import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our Sweng calculator application
        </h1>
      </main>

      <footer className={styles.footer}>
        <a>
          Sweng Group 27
        </a>
      </footer>
    </div>
  )
}
