function Footer() {
  return (
        <div className = "grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How we work</p>
                <p>Newsroom</p>
                <p>Blog</p>
                <p>Investors</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 align-top">
                <h5 className="font-bold">Community</h5>
                <p>Sustainability</p>
                <p>Green</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Partners</h5>
                <p>Dealers</p>
                <p>Frequent mover</p>
                <p>Portal</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">Support</h5>
                <p>Knowledgebase</p>
                <p>FAQ</p>
                <p>Customer Support</p>
                <p>Trust & Safety</p>
            </div>

        </div>

  )
}

export default Footer