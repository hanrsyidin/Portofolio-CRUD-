import React from "react";
import styles from "./About.module.css";

export const About = () => {
    return (
        <>
            <section className={styles.container} id="about">
                <h2 className={styles.title}>About</h2>
                <div className={styles.content}>
                    <img src="../../assets/about/PictureAbout.png"
                        alt="Me About"
                        className={styles.aboutImage}
                    />
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src="../../assets/about/cursorIcon.png" alt="Cursor Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Junior Frontend Developer</h3>
                                <p>
                                I am a junior developer with less than a year of experience in developing websites
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src="../../assets/about/serverIcon.png" alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Junior Database Developer</h3>
                                <p>
                                    I have experience developing databases using MySQL and am currently studying Firebase to expand my expertise in modern database solutions
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src="../../assets/about/uiIcon.png" alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Junior UI Creator</h3>
                                <p>
                                    I have experience in creating engaging and user-friendly website and mobile app UIs using Figma
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}