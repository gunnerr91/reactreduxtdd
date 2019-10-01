import React, { useState } from "react";
import "./../src/App.css";

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
      <label data-game-label>Name of the game</label>
      <input
        data-game-field
        type="text"
        value={gameName}
        onChange={event => setGameName(event.target.value)}
      />
      <label data-genre-label>Game genre</label>
      <input
        data-genre-field
        type="text"
        value={genreName}
        onChange={event => setGenreName(event.target.value)}
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
