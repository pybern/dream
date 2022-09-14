import Image from "next/image";
import { useRouter } from 'next/router';
import { 
  MagnifyingGlassIcon, 
  Bars3Icon,
  UserCircleIcon,
  GlobeAltIcon,
  TruckIcon,
} from '@heroicons/react/24/solid'
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';



function Header() {

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest,setNoOfGuest] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }

  const router = useRouter()

  const search = () => {
    router.push({
      pathname:"/search",
      query:{
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      }  
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 justify-end">
        {/* {left} */}
        <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
                src="/logo_placeholder.svg" 
                layout="fill" 
                objectFit="contain"
                objectPosition="left"
            />
        </div>
        
        {/* {middle} - Search*/}
        <div className="flex items-center rounded-full py-2 md:shadow">
          <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-slate400" type="text" placeholder="Search anything" />
          < MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-blue-800 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* {options} */}

        {/* {right} */}
        <div className="flex space-x-4 items-center justify-end">
          <p className="hidden md:inline font-medium cursor-pointer">Become a partner</p>
          <GlobeAltIcon className="hidden md:inline h-6 text-gray-600 cursor-pointer" />
          <div className="flex space-x-2 items-center border-2 p-2 rounded-full">
            <Bars3Icon className="h-6 text-gray-600 cursor-pointer"/>
            <UserCircleIcon className="h-6 text-gray-600 cursor-pointer"/>
          </div>
        </div>

        {searchInput && <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker 
            ranges={[selectionRange]}
            minDate = {new Date()}
            rangeColors = {["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of vehicles
            </h2>

            <TruckIcon className="h-5"/>
            <input value={noOfGuest} onChange={e => setNoOfGuest(e.target.value)} min={1} type="number" className="w-12 pl-2 outline-none text-red-400"/>
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick = {resetInput}>Cancel</button>
            <button className="flex-grow text-red-500" onClick = {search}>Search</button>
          </div>
        </div>}
        
    </header>
  )
}

export default Header