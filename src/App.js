import React, { useState } from "react";
import "./../src/App.css";
import InputWithLabel from "./components/InputWIthLabel";

const App = () => {
  const [gameName, setGameName] = useState("");
  const [genreName, setGenreName] = useState("");
  const [games, setGames] = useState([]);
  return (
    <div className="App">
      <h2 className="App-header" data-app-header>
        React app
        <hr></hr>
      </h2>
      <InputWithLabel
        data-game
        label="Name of the game"
        inputValue={gameName}
        changeHandler={event => setGameName(event.target.value)}
      />
      <InputWithLabel
        data-genre
        label="Game genre"
        inputValue={genreName}
        changeHandler={event => setGenreName(event.target.value)}
      />
      <button
        type="submit"
        onClick={() =>
          setGames(oldData => [
            ...oldData,
            { name: gameName, genre: genreName }
          ])
        }
      >
        Add game
      </button>
      <div>
        {games.length > 0
          ? games.map((item, index) => (
              <p key={index} data-games-list>
                {item.name} ({item.genre})
              </p>
            ))
          : null}
      </div>
    </div>
  );
};
export default App;
