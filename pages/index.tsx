import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home: NextPage = ({ exploreData, }) => {
  return (
    <div className="">
      <Head>
        <title>Build it!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <Header /> 
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Get Your Rates</h2>
          
          {/* Pull some data with some endpoints - APIs */}
          {exploreData.map((item : any) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home
export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  return{
    props:{
      exploreData,
    }
  }
}