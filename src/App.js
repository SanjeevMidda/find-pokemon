import "./index.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [input, setInput] = useState("charmander");

  async function getPokemon() {
    try {
      let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

      let response = await request.json();

      setPokemon(response);
    } catch {
      console.log(null);
    }
  }

  useEffect(() => {
    getPokemon();
  }, [input]);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="container">
        {pokemon && (
          <Card
            weight={pokemon.weight}
            height={pokemon.height}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
          />
        )}
      </div>
    </div>
  );
}

export default App;
