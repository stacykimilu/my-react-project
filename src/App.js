import React, { useState } from 'react';
import './App.css';
import CocktailList from './components/CocktailList'; 
import ErrorMessage from './components/ErrorMessage'; 
import Instructions from './components/Instructions'; 
import { IngredientsList } from './components/IngredientsList';
import {SearchBar } from './components/SearchBar';

// display the cocktails
function App() {
  const [cocktails, setCocktails] = useState([
    { id: 1, name: 'Margarita', ingredients: ['Tequila', 'Triple sec', 'Lime juice'], instructions: 'Mix ingredients and serve over ice.' },
    { id: 2, name: 'Cosmopolitan', ingredients: ['Vodka', 'Cranberry juice', 'Triple sec', 'Lime juice'], instructions: 'Shake ingredients with ice, strain into glass.' },
 
  ]);
  const [error, setError] = useState('');
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  const handleSearch = (searchTerm) => {
  
    const filteredCocktails = cocktails.filter(cocktail =>
      cocktail.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if(filteredCocktails.length !== 0){
      setCocktails(filteredCocktails);
    } else {
      setError("Nothing found")
    }
  };

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Cocktail App</h1>
      </header>
      <main>
        <SearchBar onSearch={handleSearch} />
        {error && <ErrorMessage message={error} />}
        {selectedCocktail ? (
          <div>
            <Instructions instructions={selectedCocktail.instructions} />
            <IngredientsList ingredients={selectedCocktail.ingredients} />
          </div>
        ) : (
          // Render the CocktailList component with the cocktails state and handleCocktailClick function
          <CocktailList cocktails={cocktails} onCocktailClick={handleCocktailClick} />
        )}
      </main>
    </div>
  );
}

export default App;
