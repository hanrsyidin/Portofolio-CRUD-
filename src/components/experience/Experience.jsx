import React from "react";

import history from "../../data/history.json"
import skills from "../../data/skills.json"
import styles from "./Experience.module.css"

export const Experience = () => {
    return (
        <>
            <section id="experience" className={styles.container}>
                <h2 className={styles.title}>Experience</h2>
                <div className={styles.content}>
                    <div className={styles.skills}> {
                            skills.map((skills, index) => {
                                return (
                                    <div key={index} className={styles.skill}>
                                        <div className={styles.skillImageContainer}><img src={`../../assets/${skills.imageSrc}`} alt={skills.title} /></div>
                                        <p>{skills.title}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ul className={styles.history}>{
                            history.map((historyItem, index) => {
                                return (
                                    <li key={index} className={styles.historyItem}>
                                        <img src={`../../assets/${historyItem.imageSrc}`} alt={`${historyItem.organisation} logo`} />
                                        <div className={styles.historyItemDetails}>
                                            <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                                            <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                                            <ul>{historyItem.experiences.map((experience, index) => {
                                                return <li key={index}>{experience}</li>
                                            })}</ul>
                                        </div>
                                    </li>
                                )
                            })
                    }
                    </ul>
                </div>
            </section>
        </>
    )
}