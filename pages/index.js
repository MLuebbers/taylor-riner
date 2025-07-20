import Head from 'next/head'

import About from '../components/About/About.js'
import CV from '../components/CV/CV.js'
import Footer from '../components/Footer/Footer.js'
import Gallery from '../components/Gallery/Gallery.js'
import Header from '../components/Header/Header.js'
import Player from '../components/Player/Player.js'
import Schedule from '../components/Schedule/Schedule.js'

import getJSONData from '../scripts/data/getJSONData.js'

export default function Home({ allMetadata, allScheduleData, allCVData }) {
  return (
    <div>
      <Head>
        <title>Taylor Riner</title>
        <meta name="description" content="Taylor Riner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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

