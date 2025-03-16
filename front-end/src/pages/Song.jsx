import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const song = songsArray.filter((currentObj) => currentObj._id === id)[0];

  const songArtist = artistArray.filter( (currentObj) => currentObj.name === song.artist)[0];

  const songsArrayFromArtist = songsArray.filter( (currentObj) => currentObj.artist === songArtist.name );
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1));
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={song.image} alt={`Image da música ${song.image}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${songArtist._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={songArtist.image}
            alt={`Imagem do artista ${songArtist.name}`}
          />
        </Link>

        <Player randonIdFromArtist={randomIdFromArtist} duration={song.duration} audio={song.audio}/>

        <div className="song__info">
          <p className="song__name">{song.name}</p>
          <p>{songArtist.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
