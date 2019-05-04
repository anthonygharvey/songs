import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Old Town Road", artist: "Lil Nas X feat Billy Ray Cyrus" },
    { title: "Wow", artist: "Post Malone" },
    {
      title: "Sunflower (Spider-Man: Into The Spiderverse",
      artist: "Post Malone & Swae Lee"
    },
    { title: "7 Rings", artist: "Ariana Grande" },
    { title: "Sucker", artist: "Jonas Brothers" },
    { title: "Without Me", artist: "Halsey" },
    { title: "Dancing With A Stranger", artist: "Sam Smith & Normani" },
    { title: "Talk", artist: "Khalid" },
    { title: "Bad Guy", artist: "Billie Eilish" },
    { title: "Middle Child", artist: "J. Cole" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
