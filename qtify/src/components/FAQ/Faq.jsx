import React from 'react';
import styles from "./Faq.module.css";
import Acc from '../Acc/Acc';


const faqsData = [
    {
        question: "Is Qtify free to use?",
        solution: "Yes! It is 100% free, and has 0% ads"
    },
    {
        question: "Can I download and listen to songs offline",
        solution: "Sorry! we don't provide any service to download any songs"
    }
]

const showFaqs = () => {
    return faqsData.map((faq) => {
        return (
            <>
                <Acc question={faq.question} solution={faq.solution} />
            </>
        )
    })
}

function Faq() {
    return (
        <>
            <div className={styles.faqContainer} >
                <div className={styles.faqHeader}>FAQs</div>
                <div className={styles.faqAccordion} >
                    {showFaqs()}
                </div>
            </div>
        </>
    )
}

export default Faq