import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "../src/api/api";
import { useEffect, useState } from "react";
import Songs from "./components/Songs/Songs";

// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Faq from "./components/FAQ/Faq";

// calling fetchNewAlbums  & fetchTopAlbums API to fetch data
// import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
// import Songplayer from "./components/Songplayer/Songplayer";
// import { Card } from "@mui/material";

function App() {
  // local state("data")
  const [musicData, setMusicData] = useState([]);

  // on "<App />" component load
  useEffect(() => {
    // call API to fetch data and store it
    fetchTopAlbums()
      .then((result) =>
        setMusicData((prevState) => ({ ...prevState, topAlbums: result }))
      )
      .catch((result) => console.log(result));

    fetchNewAlbums()
      .then((result) =>
        setMusicData((prevState) => ({ ...prevState, newAlbums: result }))
      )
      .catch((result) => console.log(result));

    fetchSongs()
      .then((result) =>
        setMusicData((prevState) => ({ ...prevState, songs: result }))
      )
      .catch((result) => console.log(result));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={musicData.topAlbums} />
      <Section title="New Albums" data={musicData.newAlbums} />

      <Songs songsData={musicData.songs} />

      {/* <Faq /> */}
      {/* <Songplayer /> */}
    </div>
  );
}

export default App;
