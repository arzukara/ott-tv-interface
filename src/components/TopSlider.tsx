import React, { useRef, useEffect } from "react";
import BackdropItem from "./BackdropItem";
import { Movie } from "../types/Movie";

interface TopSliderProps {
  items: Movie[];
  isActive: boolean;
  onSelect: (item: Movie) => void;
}

const TopSlider: React.FC<TopSliderProps> = ({ items, isActive, onSelect }) => {
  const topSliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isActive || !topSliderRef.current) return;
      const focusedElement = document.activeElement as HTMLElement;
      const itemElements = Array.from(
        topSliderRef.current.querySelectorAll(".backdropitem")
      );

      const currentIndex = itemElements.indexOf(focusedElement);
      if (
        event.key === "ArrowRight" &&
        currentIndex < itemElements.length - 1
      ) {
        const nextElement = itemElements[currentIndex + 1] as HTMLElement;
        nextElement.focus();
      } else if (event.key === "ArrowLeft" && currentIndex > 0) {
        const prevElement = itemElements[currentIndex - 1] as HTMLElement;
        prevElement.focus();
      } else if (event.key === "Enter" && currentIndex !== -1) {
        onSelect(items[currentIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, onSelect, items]);

  return (
    <div className="row">
      <div className="slider" ref={topSliderRef}>
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            tabIndex={0}
            onClick={() => onSelect(item)}
          >
            <BackdropItem key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSlider;
