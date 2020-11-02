import React, { useEffect, useState } from 'react';
import { GameThumb } from 'components/GameThumb';

export const GameList = () => {
  const GAMES_URL = 'https://api.rawg.io/api/games?ordering=-rating0';
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(GAMES_URL)
      .then((response) => response.json())
      .then((json) => setGames(json.results));
  }, []);

  return (
    <section className="games-list">
      {games.map((game) => (
        <GameThumb key={game.id} {...game} />
      ))}
    </section>
  );
};