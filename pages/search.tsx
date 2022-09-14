import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Search() {
    const router = useRouter();
    const location = router.query.location
    const startDate = router.query.startDate
    const endDate = router.query.endDate
    const noOfGuest = router.query.noOfGuest

  return (
    <div>     
        <Header />
        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">Booking results for {noOfGuest} vehicles from {startDate} to {endDate}</p>
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
        <Footer />
    </div>
  )
}

export default Search