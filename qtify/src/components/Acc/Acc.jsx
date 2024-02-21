import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./Acc.module.css"

const Acc = ({ question, solution }) => {
    return (
        <>
            <Accordion sx={{ border: "1px solid var(--color-white)", borderRadius: 2, borderTopLeftRadius: 4, marginBottom: 3 }} >
                <AccordionSummary
                    expandIcon={
                        <ExpandMoreIcon
                            sx={{
                                fontSize: 36,
                                color: "var(--color-primary)",
                            }} />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                        backgroundColor: "var(--color-black)",
                        color: "var(--color-white)",
                        borderRadius: 2,
                    }}
                    className={styles.accordionSummary}
                >
                    {question}
                </AccordionSummary>

                <AccordionDetails
                    className={styles.accordionDetails}
                    sx={{ borderRadius: 2, padding: "20px 10px" }}
                >
                    {solution}
                </AccordionDetails>
            </Accordion >
        </>
    )
}

export default Acc;