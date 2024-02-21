import React from 'react'
import styles from "./Container.module.css"
import { Card, CardMedia, Chip } from '@mui/material'

function Container({ id, image, follows }) {
    return (
        <>
            <div className={styles.container} >
                <Card id={id} sx={{ borderRadius: "10px" }} className={styles.containerCard}>
                    <CardMedia
                        className={styles.containerCardMedia}
                        // needs to be changes with api data
                        image={image}
                    />
                    <div className={styles.cardChip}>
                        <Chip
                            label={`${follows} Follows`}
                            sx={{ borderRadius: "15px", color: "var(--color-white)", backgroundColor: "var(--color-black)", height: "25px" }} />
                    </div>
                </Card>
                <div className={styles.containerText} >
                    New Bollywood
                </div>
            </div>
        </>
    )
}

export default Container