import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Millgate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Purpose-driven design
        </h1>

        <p className={styles.description}>
         Creating with an awareness of the bigger picture.
        </p>
        <code className={styles.code}>Website under construction</code>
        <a href="https://twitter.com/millgatejosh"><FontAwesomeIcon className={styles.twitter} icon={faTwitter} width="30px" /></a>
      </main>
    </div>
  )
}
