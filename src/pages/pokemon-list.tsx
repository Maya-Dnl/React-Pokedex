import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
// import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import "./pokemon-list.css";
import { Link } from 'react-router-dom';
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    // fetch(`http://localhost:3001/pokemons`) // requête de type GET vers l'url passé en paramètre
    // .then(response => response.json()) // on récupère un objet de type response sous forme json afin d'extraire les datas (sans l'en-tête, le status, l'url etc)
    // .then((pokemons) => {
    //   setPokemons(pokemons) // on met à disposition les pokémons dans le state de notre composant  
    // });                     // le DOM virtuel affichera donc la liste de pokémons aux users
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);
  
  return (
    <div className="container"> 
      <div className="row"> 
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
      </div>
      <Link className='btn-floating btn-large waves-effect waves-light red z-depth-3'
        style={{position: "fixed", bottom: "25px", right: "25px"}}
        to="/pokemon/add">
        <i className="bi bi-plus-circle-fill"></i>
      </Link>
    </div>
  );
};
  
export default PokemonList;