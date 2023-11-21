import React from 'react'

const about = () => {
  return (
    <section className="w-full h-full my-6 text-slate-50 pb-20" section id="About">
      

        <div className="max-w-[1240px] mx-auto">

          <div className="text-center">
            <h2 className="text-3xl font-bold ">Happy Tree Friends NFT (Non-Fungible Token) marketplaces are online platforms where users can buy, sell, and trade NFTs. </h2>
            <p className="text-xl py-5 text-gray-50"> Happy Tree Friend NFT marketplaces leverage blockchain technology to ensure the authenticity, provenance, and scarcity of NFTs. We typically support popular blockchain networks like Ethereum, where NFTs are minted, stored, and traded. Our marketplaces offer features like bidding, fixed-price listings, auctions, and secondary marketplaces for reselling NFTs. </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 px-2 text-center">
            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-orange-400">100%</p>
              <p className="text-gray-400 mt-2">Completion</p>
            </div>

            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-orange-400">24/7</p>
              <p className="text-gray-400 mt-2">Delivery</p>
            </div>

            <div className="border py-8 rounded-xl shadow-xl">
              <p className="text-6xl font-bold text-orange-400">100k</p>  
              <p className="text-gray-400 mt-2">Transaction</p>
            </div>
          </div>
        </div> 
    </section>
  )
}
export default about