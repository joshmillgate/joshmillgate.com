import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Millgate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Josh Millgate
        </h1>

        <p className={styles.description}>
         Creating with an awareness of the bigger picture.
        </p>
      </main>

      <footer className={styles.footer}>
        2021
      </footer>
    </div>
  )
}
