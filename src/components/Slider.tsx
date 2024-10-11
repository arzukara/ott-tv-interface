import React, { useRef, useEffect } from 'react';
import Item from './Item';
import { Movie } from '../types/Movie';

interface SliderProps {
  title: string;
  items: Movie[];
  isActive: boolean;
  onSelect: (item: Movie) => void;
}

const Slider: React.FC<SliderProps> = ({ title, items, isActive ,onSelect}) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isActive || !sliderRef.current) return;
      const focusedElement = document.activeElement as HTMLElement;
      const itemElements = Array.from(sliderRef.current.querySelectorAll('.item'));

      const currentIndex = itemElements.indexOf(focusedElement);
      if (event.key === 'ArrowRight' && currentIndex < itemElements.length - 1) {
        const nextElement = itemElements[currentIndex + 1] as HTMLElement;
        nextElement.focus();
        scrollIntoView(nextElement);
      } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
        const prevElement = itemElements[currentIndex - 1] as HTMLElement;
        prevElement.focus();
        scrollIntoView(prevElement);
      } else if (event.key === "Enter" && currentIndex !== -1) {
        onSelect(items[currentIndex]);
      }
    };

    const scrollIntoView = (element: HTMLElement) => {
      if (!sliderRef.current) return;
      const sliderLeft = sliderRef.current.scrollLeft;
      const sliderRight = sliderLeft + sliderRef.current.clientWidth;
      const elementLeft = element.offsetLeft;
      const elementRight = elementLeft + element.clientWidth;

      if (elementLeft < sliderLeft) {
        sliderRef.current.scrollLeft = elementLeft;
      } else if (elementRight > sliderRight) {
        sliderRef.current.scrollLeft = elementRight - sliderRef.current.clientWidth;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isActive, onSelect, items]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="slider" ref={sliderRef}>
        {items.map((item) => (
           <div
           key={item.id}
           className="item"
           tabIndex={0}
           onClick={() => onSelect(item)}
         >
          <Item key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
