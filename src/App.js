import React, { useState } from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import './components/styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  const searchPokemon = async () => {
    if (!searchTerm) {
      setError('Por favor, insira o nome ou número de um Pokémon.');
      setPokemon(null); 
      return;
    }
    try {
      setError(''); 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado.');
      }
      const data = await response.json();
      const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(typeInfo => typeInfo.type.name),
        abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name)
      };
      setPokemon(pokemonData);
      setError(''); 
    } catch (error) {
      setError('Pokémon não encontrado.'); 
      setPokemon(null); 
    }
  };

  return (
    <div className="App">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchPokemon={searchPokemon} />
      
      {error && (
        <div className="error-message">
          <span className="error-icon">⚠️</span>
          {error}
        </div>
      )}
      
      {pokemon && <PokemonList pokemon={pokemon} />} {/* Exibe o card apenas se houver Pokémon */}
    </div>
  );
}

export default App;
