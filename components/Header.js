import Image from "next/image";
import { 
  MagnifyingGlassIcon, 
  Bars3Icon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon
} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 justify-end">
        {/* {left} */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
                src="/logo_placeholder.svg" 
                layout="fill" 
                objectFit="contain"
                objectPosition="left"
            />
        </div>
        
        {/* {middle} - Search*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-slate400" type="text" placeholder="Search anything" />
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
    </header>
  )
}

export default Header