import React from 'react'
import Header from '../componants/header'
import Footer from '../componants/footer'
export default function ShoppingCart() {
  return (
    <>
    <Header/>
     <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-10">

      
      <h1 className="text-3xl font-semibold mb-10">
        Shopping Cart
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        
        <div className="lg:col-span-2">
         
        </div>

        
        <div className="space-y-6">

         
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">
              Order summary
            </h2>

            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between">
                <span>Original price</span>
                <span className="text-white font-medium">$7,592.00</span>
              </div>

              <div className="flex justify-between">
                <span>Savings</span>
                <span className="text-green-400 font-medium">-$299.00</span>
              </div>

              <div className="flex justify-between">
                <span>Store Pickup</span>
                <span className="text-white font-medium">$99</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-white font-medium">$799</span>
              </div>
            </div>

            <hr className="my-6 border-slate-700" />

            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total</span>
              <span>Rs.0</span>
            </div>

            <button className="w-full mt-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium">
              Proceed to Checkout
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              or{" "}
              <a href="#" className="underline text-white hover:text-blue-400">
                Continue Shopping
              </a>{" "}
              →
            </p>
          </div>

          
          <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-6">
            <h3 className="font-medium mb-4">
              Do you have a voucher or gift card?
            </h3>

            <input
              type="text"
              placeholder=""
              className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="w-full py-3 rounded-lg border border-slate-500 hover:bg-slate-700 transition font-medium">
              Apply Code
            </button>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
