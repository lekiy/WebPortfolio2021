import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kevin Annen's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar>
           <a className={styles.navitem}>Hello</a>
           <h1 className={styles.navitem}>I'm A</h1>
           <h1>Child Of Navbar</h1>
        </Navbar>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
