import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Cards/Cards";
import Container from "./components/Container/Container";


// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Faq from "./components/FAQ/Faq";


// calling fetchNewAlbums  & fetchTopAlbums API to fetch data 
// import { fetchNewAlbums, fetchTopAlbums } from "./api/api";
// import Songplayer from "./components/Songplayer/Songplayer";
// import { Card } from "@mui/material";

function App() {
  // // local state("data")
  // const [data, setData] = useState({});

  // // fetch data from respective API call and store the data inside state("data")
  // const generateData = (key, source) => {
  //   source().then((data) => {
  //     setData((prevData) => {
  //       return { ...prevData, [key]: data };
  //     });
  //   });
  // };

  // // on "<App />" component load 
  // useEffect(() => {
  //   // call function "generateData()" to get "topAlbums" & "newAlbums"
  //   generateData("topAlbums", fetchTopAlbums);
  //   generateData("newAlbums", fetchNewAlbums);
  // }, []);

  // // by default state "data" 
  // const { topAlbums = [], newAlbums = [] } = data;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Container />

      {/* <Cards /> */}


      {/* sending "topAlbums" "newAlbums" data to "<Homepage />" component by using useContext() hook  */}
      {/* <Outlet context={{ data: { topAlbums, newAlbums } }} /> */}
      {/* <Faq /> */}
      {/* <Songplayer /> */}
    </div>
  );
}

export default App;
