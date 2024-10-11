import React from "react";
import { Movie } from "../types/Movie";

interface ItemProps {
  item: Movie;
}

const BackdropItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="backdropitem" tabIndex={0}>
      <img src={item.backdropUrl} alt={item.title} />
      <div className="text-overlay">
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default BackdropItem;
