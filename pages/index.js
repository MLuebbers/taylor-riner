import Head from 'next/head'

import About from '../components/About'
import CV from '../components/CV'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Player from '../components/Player'
import Schedule from '../components/Schedule'

import getJSONData from '../scripts/data/getJSONData.js'

import styles from '../styles/Page.module.css'

export default function Home({ allMetadata, allScheduleData, allCVData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Taylor Riner</title>
        <meta name="description" content="Taylor Riner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header data={ allMetadata }></Header>
        <About data={ allMetadata.about } />
        <Schedule data={ allScheduleData } />
        <CV data={ allCVData }></CV>
        <Gallery></Gallery>
        <Player></Player>
        <Footer data={ allMetadata } />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const allMetadata = getJSONData("meta.json");
  const allScheduleData = getJSONData("schedule.json");
  const allCVData = getJSONData("cv.json");

  return {
    props: {
      allMetadata,
      allScheduleData,
      allCVData,
    },
  }
}

