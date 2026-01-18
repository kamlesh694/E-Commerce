import React, { useEffect, useState } from "react";
import { CiGrid2H } from "react-icons/ci"; 
import Header from "../componants/header"; 
import Footer from "../componants/footer"; 
import { Link, useParams } from "react-router"; 
import axios from "axios"; 
import Loading from "./Loading"; 

export default function NewArrivals(){
  let { catslug } = useParams() 
  let [Sorting, setSorting] = useState("") 
  let [loading, setLoading] = useState(false) 
  let [CatFilter, setCatFilter] = useState([]) 
  let [BrandFilter,setBrandFilter] = useState([])

  let [openCat, setOpenCat] = useState(false) 
  let [cat, setcat] = useState([]) 

  let getCategorie = async () => { 
    let apires = await fetch("https://wscubetech.co/ecommerce-api/categories.php") 
    let fineldata = await apires.json() 
    setcat(fineldata.data) 
  } 

  let [openBrand, setOpenBrand] = useState(false) 
  let [Brand, setBrand] = useState([]) 

  let getBrand = async () => { 
    let apires = await fetch("https://wscubetech.co/ecommerce-api/brands.php") 
    let fineldata = await apires.json() 
    setBrand(fineldata.data) 
  } 

  let [Products, setProducts] = useState([]) 

  let getProduct = async () => {
    setLoading(true) 
    let apires = await axios.get(
      "https://wscubetech.co/ecommerce-api/products.php",
      { 
        params: { 
          page: 1, 
          limit: 12, 
          sorting: Sorting, 
          price_from: null, 
          price_to: null, 
          discount_from: null, 
          discount_to: null, 
          name: null, 
          rating: null, 
          brands: BrandFilter.join(","), 
          categories: CatFilter.join(","), 
        } 
      }
    ); 
    setProducts(apires.data.data) 
    setLoading(false) 
  } 

  let getCheckCat=(e)=>{ 
    let CheckValue=e.target.value; 
    if(e.target.checked){ 
      setCatFilter([...CatFilter,CheckValue]) 
    } else { 
      setCatFilter(CatFilter.filter(v => v != CheckValue)) 
    } 
  } 

  let getCheckBrand=(e)=>{ 
    let CheckValue=e.target.value; 
    if(e.target.checked){ 
      setBrandFilter([...BrandFilter,CheckValue]) 
    } else { 
      setBrandFilter(BrandFilter.filter(v => v != CheckValue)) 
    } 
  } 

  useEffect(() => {
    getCategorie() 
    getBrand() 
  }, []) 

  useEffect(() => { 
    getProduct() 
  },[CatFilter, Sorting, BrandFilter]) 

  useEffect(() => { 
    setCatFilter([catslug]) 
  }, [catslug]) 

  return ( 
    <> 
      <Header /> 

      <div className="max-w-7xl mx-auto p-6 mt-[150px]"> 

        {/* TITLE */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"> 
          <h1 className="text-3xl font-semibold">New Arrivals</h1> 
          <div className="flex items-center gap-6"> 
            <select 
              className="border px-3 py-2 rounded text-gray-600 cursor-pointer" 
              value={Sorting} 
              onChange={(e) => setSorting(e.target.value)}
            > 
              <option value="">Sort</option> 
              <option value="1">A To Z</option> 
              <option value="2">Z To A</option> 
              <option value="3">Price: Low to High</option> 
              <option value="4">Price: High to Low</option> 
            </select> 
            <CiGrid2H size={24} className="cursor-pointer text-gray-700" /> 
          </div>
        </div> 

        <hr className="my-4" /> 

        {/* MAIN */}
        <div className="flex flex-col md:flex-row gap-4 w-full"> 

          {/* FILTER */}
          <div className="w-full md:w-[280px]"> 

            <div 
              onClick={() => setOpenCat(!openCat)} 
              className="mb-4 text-[18px] px-6 flex cursor-pointer items-center justify-between"
            > 
              <p>Categories</p>
              <span className="text-2xl">{openCat ? '-' : '+'}</span> 
            </div> 

            <ul className={`h-[250px] overflow-y-scroll px-6 ${openCat ? "" : "hidden"}`}> 
              {cat.map(obj => ( 
                <li key={obj.id} className="p-2 hover:bg-blue-100 rounded cursor-pointer">
                  <input 
                    type="checkbox" 
                    value={obj.slug} 
                    checked={CatFilter.includes(obj.slug)} 
                    onChange={getCheckCat} 
                  /> {obj.name}
                </li> 
              ))} 
            </ul> 

            <div 
              onClick={() => setOpenBrand(!openBrand)} 
              className="mb-4 text-[18px] cursor-pointer px-6 flex justify-between"
            > 
              <p>Brands</p>
              <span className="text-2xl">{openBrand ? '-' : '+'}</span> 
            </div> 

            <ul className={`h-[250px] overflow-y-scroll px-6 ${openBrand ? "" : "hidden"}`}> 
              {Brand.map(obj => ( 
                <li key={obj.id} className="p-2 hover:bg-blue-100 rounded cursor-pointer">
                  <input type="checkbox" value={obj.slug} onChange={getCheckBrand} /> {obj.name}
                </li> 
              ))} 
            </ul> 

          </div> 

          {/* PRODUCTS */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {loading ? <Loading /> : (
              Products.map((obj, index) => (
                <Product key={index} {...obj} />
              ))
            )}
          </div> 

        </div> 
      </div> 

      <Footer /> 
    </> 
  ); 
} 

function Product({ name, price, image, brand_name, category_name, slug }) { 
  return ( 
    <div className="border rounded-lg overflow-hidden"> 
      <div className="bg-gray-200 w-full"> 
        <img 
          src={image} 
          alt="" 
          className="w-full h-[220px] object-contain"
        /> 
      </div> 

      <div className="p-4"> 
        <div className="flex gap-2 text-[12px] opacity-50 font-bold mb-2"> 
          <p>Brand : {brand_name}</p> 
          <p>Category : {category_name}</p> 
        </div> 

        <h3 className="font-semibold text-gray-800 mb-2">{name}</h3> 
        <p className="text-sm my-2 text-amber-500">$ {price}</p> 

        <div className="flex flex-col sm:flex-row gap-2 w-full"> 
          <button className="bg-blue-600 text-white py-2 px-[30px] rounded hover:bg-blue-700">
            Add to Cart
          </button> 
          <Link to={`/productsdetails/${slug}`}> 
            <button className="bg-black px-[30px] text-white py-2 rounded hover:bg-red-700">
              Details
            </button>
          </Link> 
        </div> 
      </div> 
    </div> 
  ) 
}
