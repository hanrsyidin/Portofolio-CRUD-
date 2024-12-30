import styles from './App.module.css'
import { About } from './components/about/About'
import { Comment } from './components/comment/comment'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/projects/Projects'


function App() {

  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Comment />
        <Contact />
      </div>
    </>
  )
}

export default App
