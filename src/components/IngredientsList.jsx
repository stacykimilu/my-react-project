import React from 'react';

const IngredientsList = ({ ingredients }) => {
  console.log(ingredients)
  return (
    <div>
      <h3>Ingredients List</h3>
      <ul>
        {ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export { IngredientsList };
