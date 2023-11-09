import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'
  
type Props = {
  pokemon: Pokemon,
  colorCard?: string,
  initColorCard: string
};
  
// const initColorCard = "#4db6ac";

const PokemonCard: FunctionComponent<Props> = ({pokemon, initColorCard = "#4db6ac", colorCard = "#009688"}) => {

  const [color, setColor] = useState<string>(initColorCard);

  const mouseEnterColorCard = () => {
    setColor(colorCard);
  }
  
  const mouseLeaveColorCard = () => {
    setColor("#4db6ac");
  }


  return (
    <div className="col s6 m4" onMouseEnter={mouseEnterColorCard} onMouseLeave={mouseLeaveColorCard}>
      <div className="card horizontal" style={{ backgroundColor: color }}>
        <div className="card-image"> 
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content white-text">
            <p>{pokemon.name}</p>
            <p><small>{pokemon.created.toString()}</small></p>
          </div>
        </div>
      </div> 
    </div>
  );
}
  
export default PokemonCard;