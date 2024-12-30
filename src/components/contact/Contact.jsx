import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={`../../assets/contact/emailIcon.png`} alt="Email icon" />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aan.syidin@gmail.com">aan.syidin@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={`../../assets/contact/linkedinIcon.png`}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ahmadfarhanrasyidin/">linkedin.com/Ahmad Farhan Rasyidin</a>
        </li>
        <li className={styles.link}>
          <img src={`../../assets/contact/githubIcon.png`} alt="Github icon" />
          <a href="https://github.com/hanrsyidin">github.com/Ahmad Farhan Rasyidin</a>
        </li>
      </ul>
    </footer>
  );
};