import React from 'react'
import Header from '../componants/header'
import Footer from '../componants/footer'
import { IoBagAddOutline } from "react-icons/io5";
import Shoes from "../assets/shoes.png";
export default function Home() {
  return (
    <>
      <Header />

      
      <section className="max-w-7xl mx-auto p-3 pt-[110px]">

       
        <div className="mb-6">
          <h2 className="text-center font-bold mb-2 text-2xl sm:text-3xl md:text-4xl">
            Celebration wear for Men
          </h2>
          <p className="text-center text-sm sm:text-base">
            Welcome to Bagtesh Fashion Buy Indian Men's Ethnic suits, Tuxedos,
            Sherwanis, Nehru jacket, Jodhpurs pants, Blazers, Shirts and much more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
        </div>

        
        <div className="mt-16 mb-6">
          <h2 className="text-center font-bold mb-2 text-2xl sm:text-3xl md:text-4xl">
            Celebration wear for Women
          </h2>
          <p className="text-center text-sm sm:text-base">
            Beautiful collection of Lehenga cholis, Sarees, Salwar suits for
            engagement, wedding and other ethnic occasions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
          <ProductDiv />
        </div>

      </section>

      <Footer />
    </>
  )
}

function ProductDiv() {
  return (
    <div className="bg-white rounded-3xl hover:shadow-2xl transition p-4 cursor-pointer">

      <img
        src={Shoes}
        alt="Shoes"
        className="w-full h-44 sm:h-48 md:h-52 object-contain"
      />

      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-[10px] sm:text-xs bg-blue-500 text-white px-2 py-1 rounded-md">
          BRAND : OFF WHITE
        </span>

        <span className="text-[10px] sm:text-xs bg-blue-500 text-white px-2 py-1 rounded-md">
          CATEGORY : MENS SHOES
        </span>
      </div>

      <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-2 leading-tight">
        Sports Sneakers Off White Running Shoes
      </h2>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold">$110</span>
          <span className="text-gray-400 line-through text-sm">$199</span>
        </div>

        <button className="border border-black rounded-xl p-2 hover:bg-black hover:text-white transition">
          <IoBagAddOutline />
        </button>
      </div>

    </div>
  )
}
