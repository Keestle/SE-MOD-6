import React from 'react';
import cats from './catData';

function BigCats() {
  return (
    <div className="BigCats componentBox">
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            {cat.catName} - {cat.latinName}, {cat.image}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BigCats
