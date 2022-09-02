import Image from 'next/image'

function LargeCard({ img, title, description, buttonText}) {
    return (
    
        <section className="relative py-16 ml-3">
            <div className="relative h-96 min-w-{300px}">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl cursor-pointer"/>
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">{title}</h3>
                <p className="text-white">{description}</p>

                <button className="text-sm text-white bg-gray-500/80 px-4 py-2 rounded-lg mt-5 font-medium hover:shadow-xl active:scale-90 transition duration-150 cursor-pointer">{buttonText}</button>

            </div>
        </section>

  )
}
export default LargeCard