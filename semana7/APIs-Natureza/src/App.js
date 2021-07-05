import React from "react";
import styled from "styled-components";
import axios from "axios";

const PokeSelect = styled.select`
  background-color: red;
  padding: 10px;
  color: yellowgreen;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export default class App extends React.Component {
  state = {
    pokemonList: [],

    picture: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemonList: response.data.results });
  };

  getPokemonPicture = async (event) => {
    const url = event.target.value;
    const response = await axios.get(`${url}`);
    this.setState({ picture: response.data.sprites.front_default });
  };

  render() {
    const pokeOptionList = this.state.pokemonList.map((pokemon) => {
      return (
        <option key={pokemon.name} value={pokemon.url}>
          {pokemon.name}
        </option>
      );
    });

    return (
      <div>
        <h1>Pokemons</h1>
        <PokeSelect onChange={this.getPokemonPicture}>
          <option>Select Pokemon</option>
          {pokeOptionList}
        </PokeSelect>
        {this.state.picture && (
          <img src={this.state.picture} alt="Imagem Pokemon"></img>
        )}
      </div>
    );
  }
}
