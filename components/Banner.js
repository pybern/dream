import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500] xl:h-[600px] 2xl:h-[700px]">
        <p>Banner</p>
        <Image 
        src ="https://bit.ly/3AANkqQ"
        layout="fill"
        objectFit="cover"
        />
        <div>
          <p>
            
          </p>
        </div>
    </div>

    
  )
}

export default Banner