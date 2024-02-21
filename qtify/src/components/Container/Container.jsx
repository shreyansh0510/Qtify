import React from 'react'
import styles from "./Container.module.css"
import { Card, CardMedia, Chip } from '@mui/material'

function Container() {
    return (
        <>
            <Card sx={{ borderRadius: "10px" }} className={styles.containerCard}>
                <CardMedia
                    className={styles.containerCardMedia}
                    // needs to be changes with api data
                    image={require("../../assets/dummyCover.png")}
                    // needs to be changes with api data
                    title={"DUMMY"}
                />
                {/* needs to be changes with api data */}
                <div className={styles.cardChip}>
                    <Chip label="100 Follows" sx={{ borderRadius: "15px", color: "var(--color-white)", backgroundColor: "var(--color-black)", height: "25px" }} />
                </div>
            </Card>
            <div className={styles.containerText} >
                New Bollywood
            </div>

        </>
    )
}

export default Container