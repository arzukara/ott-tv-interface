import React from 'react';
import { Movie } from '../types/Movie';

interface ItemProps {
  item: Movie;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="item" tabIndex={0}>
      <img src={item.imageUrl} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default Item;
