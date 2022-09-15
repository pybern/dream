import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import format from "date-fns/format"

import { supabase } from '../utils/supabaseClient'

export async function getStaticProps() {
    const { data : faker, error } : any = await supabase.from('faker').select('*')

    if (error) {
      throw new Error(error);

    }
    return {
      props:{
        faker,
      }
    }
}

function Search( { faker } ) {
    const router = useRouter();

    const [endDate, setEndDate]: any = useState()

    useEffect(() => {
        if(!router.isReady) return;
        setEndDate(format(new Date(router.query.endDate as string), "dd MMMM yy" ))
    }, [router.isReady])


    const location = router.query.location
    //const startDate = router.query.startDate as string
    //const endDate = router.query.endDate as string
    const noOfGuest = router.query.noOfGuest
    //const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    //const formattedEndDate = format(new Date(endDate), "dd MMMM yy")

    //const dateRange = `${formattedStartDate} to ${formattedEndDate}`

    


  return (
    <div>     
        <Header />
        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">Booking results for {noOfGuest} vehicles from {endDate}</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">For {location}</h1>
                <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Rates</p>
                    <p className="button">Waiting Time</p>
                    <p className="button">Location</p>
                    <p className="button">More.</p>
                </div>
            </section>
        </main>

        {/* data */}
        <div>
            <h1>Faker</h1>
            <pre>{ JSON.stringify(faker, null, 2) }</pre>
        </div>
        <Footer />
    </div>
  )
}

export default Search
