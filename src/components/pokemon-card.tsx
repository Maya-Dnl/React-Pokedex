import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import formatDate from '../helpers/format-date';
import './pokemon-card.css';

type Props = {
  pokemon: Pokemon,
  colorCard?: string,
};

const  initColorCard = "#80cbc4";

const PokemonCard: FunctionComponent<Props> = ({pokemon, colorCard = "#26a69a"}) => {

  const [color, setColor] = useState<string>(initColorCard);
  const history = useHistory();

  const mouseEnterColorCard = () => {
    setColor(colorCard);
  }
  
  const mouseLeaveColorCard = () => {
    setColor("#80cbc4");
  }

  const clickToDetailsPokemon = (id: number) => {
    history.push(`/pokemon-list/${id}`);
  }
  
  return (
    <div className="col s6 m4" onMouseEnter={mouseEnterColorCard} onMouseLeave={mouseLeaveColorCard} onClick={() => clickToDetailsPokemon(pokemon.id)}>
      <div className="card horizontal" style={{ backgroundColor: color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content white-text">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>
            {pokemon.types.map(type => (
              <span key = {type} className={formatType(type)}>{type}</span>
            ))}
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;