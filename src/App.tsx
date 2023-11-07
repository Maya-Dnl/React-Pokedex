// importation de composant fonctionnel, hook d'état et hook d'effet que nous offre REACT :
import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon'

// Ceci est un composant fonctionnel (Stateless) :

const App: FunctionComponent = () => {

  //  Ceci est la syntaxe pure d'un composant fonctionnel :
  //  const name: String = 'React';

  // Ceci est la syntaxe d'un composant fonctionnel + d'un Hooks (fonctions JS créées par REACT) ce qui nous permets d'avoir
  // la simplicité de synatxe d'un composant fonctionnel avec la gestion d'un state (état)
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS);
  }, [])

  // syntaxe JSX (JavaScript XML/ JavaScript Syntax Extension) qui nous permet d'injecter une structure HTML dans du JS
  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map(({ id, name, picture, created }) => (
            <div className="col s6 m4" key={id}>
              <div className="cards">
                <div className="card-panel teal lighten-2">
                  <div className="card-image">
                    <img src={picture} alt={name} />
                  </div>
                  <div className="card-content white-text">
                    <h3 className="card-title">{name}</h3>
                    <p><small>{created.toString()}</small></p>
                  </div>
                </div>
              </div>
            </div>
           ))}
        </div>
      </div>
    </div>
  );
}

export default App;