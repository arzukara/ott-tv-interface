import React, { useState, useEffect, useRef } from 'react';
import TopSlider from './components/TopSlider';
import MovieDetailDialog from './components/Detail';
import { Movie } from './types/Movie';
import axios from 'axios';
import './App.css';
import Slider from './components/Slider';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';


const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedItem, setSelectedItem] = useState<Movie | null>(null);
  const [activeSlider, setActiveSlider] = useState<'top' | 'bottom'>('top');
  const topSliderRef = useRef<HTMLDivElement | null>(null);
  const bottomSliderRef = useRef<HTMLDivElement | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        const movieData: Movie[] = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          release_date: movie.release_date,
          genres: movie.genre_ids.map((id: number) => ({ name: `Genre ${id}` })),
          vote_average: movie.vote_average,
          imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          backdropUrl: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
        }));
        setMovies(movieData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        setActiveSlider((prev) => (prev === 'bottom' ? 'top' : 'bottom'));
      } else if (event.key === 'ArrowDown') {
        setActiveSlider((prev) => (prev === 'top' ? 'bottom' : 'top'));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectItem = (item: Movie) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedItem(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="App">
      <div ref={topSliderRef} className={`slider-container ${activeSlider === 'top' ? 'active' : ''}`}>
        <TopSlider items={movies} onSelect={handleSelectItem} isActive={activeSlider==='top'}/>
      </div>
      <div ref={bottomSliderRef} className={`slider-container ${activeSlider === 'bottom' ? 'active' : ''}`}>
        <Slider title="Popüler Filmler" items={movies}  onSelect={handleSelectItem} isActive={activeSlider==='bottom'} />
      </div>
      <MovieDetailDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        movie={selectedItem}
      />
    </div>
  );
};

export default App;
