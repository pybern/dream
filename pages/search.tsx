import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Faker from '../components/Faker'
import { format } from "date-fns"

function Search() {
    const router = useRouter();
    const location = router.query.location
    const startDate = router.query.startDate as string
    const endDate = router.query.endDate as string
    const noOfGuest = router.query.noOfGuest

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const dateRange = `${formattedStartDate} to ${formattedEndDate}`

    


  return (
    <div>     
        <Header />
        <main className="flex">
            <section className="flex-grow pt-14 px-6">
                <p className="text-xs">Booking results for {noOfGuest} vehicles from {dateRange}</p>
                <h1 className="text-3xl font-semibold mt-2 mb-6">For {location}</h1>
                <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="button">Cancellation Flexibility</p>
                    <p className="button">Rates</p>
                    <p className="button">Waiting Time</p>
                    <p className="button">Location</p>
                    <p className="button">More.</p>
                </div>
                <Faker />
            </section>
        </main>
        <Footer />
    </div>
  )
}

export default Search
