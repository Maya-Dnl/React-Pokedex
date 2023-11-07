import React, { FunctionComponent } from "react";
import Pokemon from "../models/pokemon";

type Props = {
    pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {

  return (
    <div>
        Affiche moi ce pokémon : {pokemon.name}
    </div>
  );
}

export default PokemonCard;