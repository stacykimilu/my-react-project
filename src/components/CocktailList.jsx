import React from 'react';

const CocktailList = ({ cocktails, onCocktailClick }) => {
  return (
    <div>
      <h2>Cocktail List</h2>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.id} onClick={onCocktailClick}>{cocktail.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CocktailList;
