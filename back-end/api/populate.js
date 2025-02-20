import { artistArray } from "./database/artistArray.js";
import { songsArray } from "./database/songArray.js";
import { db } from "../api/connect.js";

const newArtistsArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };
    delete newArtistObj.id;

    return newArtistObj;
})

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };
    delete newSongObj.id;

    return newSongObj;
})

await db.collection("songs").insertMany(newSongsArray);
await db.collection("artists").insertMany(newArtistsArray);