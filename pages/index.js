import Head from 'next/head'
import Image from 'next/image'

import About from '../components/About'
import CV from '../components/CV'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Player from '../components/Player'
import Portrait from '../components/Portrait'
import Schedule from '../components/Schedule'

import styles from '../styles/Page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Taylor Riner</title>
        <meta name="description" content="Taylor Riner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header></Header>
        <Portrait></Portrait>
        <About></About>
        <CV></CV>
        <Schedule></Schedule>
        <Gallery></Gallery>
        <Player></Player>
        <Footer></Footer>
      </main>
    </div>
  )
}
