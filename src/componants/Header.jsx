import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { CgMenuGridR } from "react-icons/cg";
import Logo from "../assets/logo.svg";

export default function Header() {
  let { catslug } = useParams();

  const [openCat, setOpenCat] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [cat, setCat] = useState([]);

  const getCategorie = async () => {
    let res = await fetch("https://wscubetech.co/ecommerce-api/categories.php");
    let data = await res.json();
    setCat(data.data);
  };

  useEffect(() => {
    getCategorie();
  }, []);

  return (
    <>
      
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 w-full shadow-lg fixed top-0 left-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="h-8" />
            <span className="text-white text-xl font-semibold">
              Flowbite
            </span>
          </div>

          
          <ul className="hidden md:flex items-center gap-8">

            <li>
              <Link to="/" className="text-blue-400 hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="text-white hover:text-blue-400">
                About
              </Link>
            </li>

           
            <li className="relative">
              <button
                onClick={() => setOpenCat(!openCat)}
                className="text-white hover:text-blue-400"
              >
                Category
              </button>

              {openCat && (
                <div className="absolute left-0 mt-2 w-44 h-[200px] overflow-y-auto bg-white rounded shadow-lg border z-50">
                  {cat.map((obj) => (
                    <Link
                      key={obj.id}
                      to={`/products/${obj.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setOpenCat(false)}
                    >
                      {obj.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link to="/products" className="text-white hover:text-blue-400">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="text-white hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>

          
          <div className="flex items-center gap-3">

           
            <button
              onClick={() => setOpenMenu(true)}
              className="md:hidden text-white text-2xl"
            >
              <CgMenuGridR />
            </button>

            <Link to="/cart" className="hidden md:block">
              <button className="px-4 py-2  rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition">
                View Cart (0)
              </button>
            </Link>

            <button className="hidden md:block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </nav>
      </header>

    
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-sm bg-slate-900 text-white z-50 transform transition-transform duration-300
        ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpenMenu(false)} className="text-2xl">✕</button>
        </div>

        
        <div className="px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setOpenMenu(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setOpenMenu(false)} className="block">About</Link>
          <Link to="/products" onClick={() => setOpenMenu(false)} className="block">Products</Link>
          <Link to="/contact" onClick={() => setOpenMenu(false)} className="block">Contact</Link>
        </div>

        
        <div className="px-6 py-4 mt-auto space-y-4">
          <Link to="/cart" onClick={() => setOpenMenu(false)}>
            <button className="w-full px-4 py-2 mb-2 border border-blue-500 text-blue-400 rounded-lg">
              View Cart (0)
            </button>
          </Link>

          <button className="w-full px-4 py-2 mb-2 bg-blue-600 text-white rounded-lg">
            Login
          </button>
        </div>
      </div>

     
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}
    </>
  );
}
