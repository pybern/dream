import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

type LocationType = {
  img:string,
  location:string,
  distance:string,
}
type CardsType = {
  img:string,
  title:string,
}
type PageProps = {
  locationData : LocationType[],
  cardsData : CardsType[]
}

const Home: NextPage<PageProps> = ({ locationData, cardsData }) => {
  return (
    <div>
      <Head>
        <title>Build it!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Header />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Nearby Quotes</h2>
          
          {/* Pull some data with some endpoints - APIs */}
          <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {locationData.map(({ img, distance, location }) => (
              <SmallCard key={img} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>
          

        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Instant Booking</h2>

          <div className = "flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardsData.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />

            ))}
          </div>
        </section>

      <LargeCard img="https://bit.ly/3cG8FHf" title="Premium" description="The fastest delivery on the planet" buttonText="Book Now"/>

      </main>

    <Footer/>

    </div>
  );
}

export default Home
export async function getStaticProps() {
  const locationData = await fetch("https://jsonkeeper.com/b/BPPJ").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return{
    props:{
      locationData,
      cardsData,
    }
  }
}