import React from 'react'
import Logo from "../assets/logo.svg"
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl mx-4 my-6 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-10">

                
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    
                    <div className="flex items-center gap-3">
                        <img
                            src={Logo}
                            alt="Flowbite Logo"
                            className="w-9 h-9"
                        />
                        <span className="text-white text-xl font-semibold">
                            Flowbite
                        </span>
                    </div>

                    
                    <ul className="flex flex-wrap gap-6 text-gray-300">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                
                <hr className="my-8 border-gray-700" />

                
                <p className="text-center text-gray-400 text-sm">
                    © 2023 <span className="font-medium text-white">Flowbite™</span>. All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}
