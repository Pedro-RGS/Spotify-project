import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // os componentes são re-renderizados apenas quando uma de suas 
  // variáveis de stado são atualizadas.

  // para atualizar a variável de estado, nos usamos os hooks,
  // nesse caso vou usar o useState
  let [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentItem, index) => index < items)
        .map((currentItem, index) => (
          <SongItem {...currentItem} key={index} index={index} />
        ))}
      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>Ver mais</p>
    </div>
  );
};

export default SongList;
