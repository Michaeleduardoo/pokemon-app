import React from 'react';
import PokemonCard from './PokemonCard';
import '../components/styles/PokemonList.css';

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
};

export default PokemonList;
