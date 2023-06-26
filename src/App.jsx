import { useState, useEffect } from "react";
import "./App.css";
import poke from "./componentes/poke.png";
import pokebola from "./componentes/pokebola.png";
import Boton from "./componentes/Boton";
import { Navbar } from "./componentes/navbar";
import { Card } from "./componentes/Card";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const [color, setColor] = useState("oscuro");

  const [pokemonid, setPokemonid] = useState(1);
  const [pokemonName, SetPokemonname] = useState("");
  const [pokeimg, setPokeimg] = useState("");
  const [ability, setAbility] = useState("");
  const [ability2, setAbility2] = useState("");

  // Traer nombre, imagen y habilidad del Pokémon
  useEffect(() => {
    fetchPokemonData();
  });

  const fetchPokemonData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
      .then((response) => response.json())
      .then((data) => {
        SetPokemonname(data.name);
        setPokeimg(data.sprites.other["official-artwork"].front_default);
        setAbility(data.abilities[0].ability.name);
        setAbility2(data.abilities[1].ability.name);
      })
      .catch(console.error);
  };

  const cambiar = () => {
    setColor(color === "oscuro" ? "blanco" : "oscuro");
  };

  const adelantar = () => {
    setPokemonid(pokemonid + 1);
  };

  const retroceder = () => {
    if (pokemonid === 1) {
      setPokemonid(1);
    } else {
      setPokemonid(pokemonid - 1);
    }
  };

  return (
    <>
   
      <Navbar imagen={poke} imagen2={pokebola} cambio={cambiar} icono={<FontAwesomeIcon icon={fas.faMoon} style={{color: "#ffffff",}} />} />
      <div className={color}>
        <div className="container ">
          <div className="row">
            <div className="col-12">
              <Card
                texto={pokemonName.toUpperCase()}
                imagen={pokeimg}
                id={pokemonid}
                habilidad={ability}
                habilidad2={ability2}
                imagenbal={pokebola}
              />
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <Boton cambio={retroceder} icon={<FontAwesomeIcon icon={fas.faBackward} />} />
                    <Boton cambio={adelantar} icon={<FontAwesomeIcon icon={fas.faForward} />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
