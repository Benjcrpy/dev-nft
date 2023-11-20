import React from 'react'
import support from '../../assets/21.png'
import "./Support.css"

const Support = () => {
  return (
    <section className="w-full py-16 text-white">
    <p className="text-3xl font-semibold capitalize text-slate-100 relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-cyan-500 to-cyan-900 transition-all ease-in-out duration-100 mr-auto">
    Support
    </p>  

    <div className="w-full py-16 px-4">
    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={support} alt="/"/>
    <div className="flex flex-col justify-center">
        <h1 className="text-green-400 font-bold font-family text-3xl mb-5"> SUPPORT MANAGEMENT </h1>
        <p className="mb-10 text-lg md:text-justify">THappy Tree Friends  NFT marketplaces involves specialized processes to address the unique aspects of NFTs. It requires technical expertise in blockchain technology, NFT standards, and smart contracts. Support teams assist users with technical inquiries, wallet integration, rarity and metadata concerns, gas fees, network congestion, intellectual property issues, and user education. Efficient ticketing systems, dedicated support personnel, and continuous improvement are pivotal. NFT marketplace support management ensures a smooth user experience in buying, selling, and trading NFTs while handling the complexities of blockchain technology and the digital asset.</p>
    </div>
    </div>
    </div>
</section>
  )
}
export default Support