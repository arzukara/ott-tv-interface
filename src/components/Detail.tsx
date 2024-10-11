import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Movie } from '../types/Movie';


interface MovieDetailDialogProps {
  open: boolean;
  onClose: () => void;
  movie: Movie | null;
}

const MovieDetailDialog: React.FC<MovieDetailDialogProps> = ({ open, onClose, movie }) => {
  if (!movie) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{movie.title}</DialogTitle>
      <DialogContent>
        <div className="detail-item">
        <img src={movie.backdropUrl} alt={movie.title} />
        </div>
        <Typography variant="body1" gutterBottom>
          <strong>Overview:</strong> {movie.overview}
        </Typography>
        <Typography variant="body2" gutterBottom>
          <strong>Release Date:</strong> {movie.release_date}
        </Typography>
        <Typography variant="body2" gutterBottom>
          <strong>Rating:</strong> {movie.vote_average} / 10
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDetailDialog;
