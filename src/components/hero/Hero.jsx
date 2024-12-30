import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./Hero.module.css"

export const Hero = () => {
    return(
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <TypeAnimation
                        sequence={[
                            "Hi, I'm Farhan", // Teks yang diketik
                            3000, // Tunggu selama 3 detik
                            "", // Hapus teks (hapus semua karakter)
                            800, // Tunggu selama 1 detik sebelum mengetik lagi
                        ]}
                        speed={50} // Kecepatan mengetik (50 ms per karakter)
                        deletionSpeed={200} // Kecepatan menghapus (100 ms per karakter)
                        repeat={Infinity} // Ulangi animasi tanpa batas
                        className={styles.title}
                    />
                    <span className={styles.cursor}></span>
                    </div>
                    <p className={styles.description}>A junior web developer with less than a year of experience, specializing in building user interfaces using React, Vite, CSS, and Figma. Scroll down to learn more about me!</p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aan.syidin@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
                <img src="../../assets/hero/PictureMe.png" alt="Hero Image of Me"  className={styles.heroImg}/>
                <div className={styles.topBlur} />
                <div className={styles.bottomBlur} />
            </section>
        </>
    )
}