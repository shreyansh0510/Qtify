import React, { useEffect, useState } from "react";
import styles from "./SongsTab.module.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { fetchGenres } from "../../../api/api";
import Caraosel from "../../Caraosel/Caraosel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function SongsTab({ songsData }) {
  const [genres, setGenres] = useState([]);
  // const [genreType, setGenreType] = useState("");
  const [songsTabData, setSongsTabData] = useState([]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("handleChange", newValue);
    setValue(newValue);
  };

  const filterSongsData = (genreKey) => {
    let result = genreKey
      ? songsData.filter(
          (songs) => songs.genre.key.toLowerCase() === genreKey.toLowerCase()
        )
      : songsData;
    setSongsTabData(result);
  };

  const handleClick = (key) => {
    // setGenreType(key);
    filterSongsData(key);
  };

  useEffect(() => {
    fetchGenres()
      .then((response) => setGenres(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ marginBottom: 5 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="none"
              // indicatorColor="var(--color-primary)"
              aria-label="basic tabs example"
            >
              <Tab
                key=""
                label="All"
                {...a11yProps(0)}
                onClick={() => handleClick("")}
                sx={{
                  color: "var(--color-white)",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: "16px",
                }}
              />
              {genres.map((genre, index) => (
                <Tab
                  key={genre.key}
                  label={genre.label}
                  {...a11yProps(index + 1)}
                  onClick={() => handleClick(genre.key)}
                  sx={{
                    color: "var(--color-white)",
                    fontWeight: 600,
                    textTransform: "capitalize",
                    fontSize: "16px",
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <Caraosel
            caraouselData={songsTabData.length ? songsTabData : songsData}
            songs
          />
        </Box>
      </div>
    </>
  );
}

export default SongsTab;
