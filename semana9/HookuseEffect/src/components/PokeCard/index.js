import React, {useState, useEffect} from "react";
import axios from "axios";

export const PokeCard = () => {
  const [pokemon] = useState("")
 
getUsers =(pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => pokemon
        // guarda as infos do pokemon no estado
        (response.data)
      .catch(err => console.log(err))
    }
  useEffect((prevProps) => {
    (prevProps.pokemon !== pokemon)
      pegaPokemon(pokemon);
      getUsers()
  }, [prevProps])

    return (
      <div>
        <p>{pokemon.name}</p>
        <p>{pokemon.weight} Kg</p>
        {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    );
  }


export default PokeCard;
