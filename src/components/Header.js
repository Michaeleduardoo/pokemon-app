import React from 'react';
import '../components/styles/Header.css';
import ImgLogo from "./img/pokeapi.png"

const Header = ({ searchTerm, setSearchTerm, searchPokemon }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchPokemon();
  };

  return (
    <header className="header">
      <img
        src={ImgLogo}
        alt="Pokémon Logo"
        className="logo"
      />
      <form onSubmit={handleSubmit} className="search-container">
        <input
          type="text"
          placeholder="Pesquisar um Pokémon"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
    </header>
  );
};

export default Header;
