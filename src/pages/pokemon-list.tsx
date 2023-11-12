import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import logo from '../images/logo-pokedex.png';
import "./pokemon-list.css";
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);
  
  return (
    <div className="container"> 
    <div className='center'>
        <img id='logo' src={logo} alt="logo of pokedex"/>
    </div> 
    <div className="row"> 
    {pokemons.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon}/>
    ))}
    </div>
  </div>
);
}
  
export default PokemonList;