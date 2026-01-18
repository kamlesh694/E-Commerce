import React, { useEffect, useState } from 'react'
import Header from '../componants/header'
import Footer from '../componants/footer'
import { useParams } from 'react-router'
import axios from 'axios';

export default function Productsdetails() {
    let { slug } = useParams();

    let [data, setData] = useState(null);
    
    let [Subimage, setSubimage] = useState("");

    let getProductDetails = async () => {
        let apires = await axios.get(
            `https://wscubetech.co/ecommerce-api/productdetails.php?slug=${slug}`
        );

        let finaldata = apires.data;
        let { product } = finaldata;

        setSubimage(product.image)

        setData(product);
        
       
    };

    useEffect(() => {
        getProductDetails();
    }, [slug]);

    return (
        <>
            <Header />

            {data && (
                <div className="min-h-screen mt-[78px] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div>
                                <div className="mb-4">
                                    <img
                                        src={Subimage}
                                        alt="Product"
                                        className="w-full h-[400px] object-cover rounded-lg bg-gray-200"
                                    />
                                </div>

                                <div className="flex gap-2 overflow-x-scroll">
                                    {data.multiple_images.map((obj, index) => (
                                        <img
                                            key={index}
                                            src={obj}
                                            onClick={() => setSubimage(obj)}
                                            className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-75"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {data.name}
                                </h1>

                                <span className="text-green-700 font-bold opacity-50">
                                    rating {data.rating}
                                </span>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        ${data.price}
                                    </span>
                                    <span className="text-lg text-gray-500 line-through ml-3">
                                        $149.99
                                    </span>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {data.description}
                                </p>

                                <button className="w-full bg-red-700 hover:bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
