import React from 'react';
import './styles/PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
      <div className="pokemon-info">
        <p>#{pokemon.id}</p>
        <h3>{pokemon.name}</h3>
        <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
        <p><strong>Habilidades:</strong> {pokemon.abilities.join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
