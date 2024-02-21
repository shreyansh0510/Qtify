import React from 'react'
import play from "../../assets/playerCover.png"
import playBtn from "../../assets/playButton.png"
import styles from "./Songplayer.module.css"


import { Slider } from '@mui/material'


function Songplayer() {
    return (
        <div className={styles.playerContainer} >
            <div className={styles.playerCover} >
                <div><img src={play} alt="cover" /></div>
                <div className={styles.playerCoverDetails} >
                    <div>Song name</div>
                    <br />
                    <div>Album name</div>
                </div>
            </div>
            <div className={styles.playerMusic} >
                <img src={playBtn} alt="play-button" width={40} height={40} />
                <div className={styles.slider}>
                    <span>0:38</span>
                    <Slider
                        size="small"
                        defaultValue={25}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        sx={{ color: "var(--color-primary)", margin: "0px 10px" }}
                    />
                    <span>4:38</span>

                </div>

            </div>
        </div>
    )
}

export default Songplayer