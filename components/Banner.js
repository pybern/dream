import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400] xl:h-[500px] 2xl:h-[600px]">
        <Image 
        src ="https://bit.ly/3BcH1vb"
        layout="fill"
        objectFit="cover"
        />
        <div className="absolute top-1/2 w-full text-center">
          <p className="text-white font-semibold text-sm sm:text-lg">
            Take control of your shipments.
            </p>
          <button className="text-purple-500 bg-white px-10 py-3 shadow-md rounded-full cursor-pointer font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
            Move.
          </button>
        </div>
    </div>

    
  )
}

export default Banner