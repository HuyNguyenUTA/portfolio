import styles from './page.module.scss'
import Navbar from './components/navigation/navbar/navbar'
import About from './components/about'
import Experience from './components/experience'
import Project from './components/project'
import Contact from './components/contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <About />
      <Experience />
      <Project />
      <Contact />
    </main>
  )
}
