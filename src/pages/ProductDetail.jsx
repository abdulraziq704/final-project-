import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import star from "../assets/star_icon.png";
import stardull from "../assets/star_dull_icon.png";
import { Addtoocart } from '../features/CartSlice';

const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState("description");
    const Dispatch=useDispatch();


    const params = useParams();
    console.log("Params from URL:", params);
    const { ID } = params;
    const items = useSelector((state) => state.allcart.items);

    const productId = Number(ID);

    const product = items.find((item) => item.id === productId);
    

    

    return (
        <>
       
      <div className="  md:flex   px-4 md:px-24 font-poppins pt-12 ">
        <div className="left   md:w-1/2 ">
        <div className="md:flex gap-2">
        <div className="img4 flex flex-col gap-2 justify-between ">
            <img className="w-20" src={product.image} alt={product.name} />
            <img className="w-20" src={product.image} alt={product.name} />
            <img className="w-20" src={product.image} alt={product.name} />
            <img className="w-20" src={product.image} alt={product.name} />
          </div>
          <div className="display">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
         
        </div>
        <div className="right   md:w-1/2">
          <h1 className="text-3xl font-bold py-2 ">{product.name}</h1>
          <div className=" flex gap-1 py-4 ">
            <img className="w-4 h-4" src={star} alt="" />
            <img className="w-4 h-4" src={star} alt="" />
            <img className="w-4 h-4" src={star} alt="" />
            <img className="w-4 h-4" src={star} alt="" />
            <img className="w-4 h-4" src={stardull} alt="" />
            <p className="text-xs px-2">(122)</p>
          </div>
          <div className="flex gap-5 py-5">
            <p className="text-lg line-through text-gray-400">
              ${product.old_price}
            </p>
            <p className="text-lg text-red-600 font-semibold">
              ${product.new_price}
            </p>
          </div>
          <p>
            Crafted from high-quality denim, this jacket offers a soft yet
            sturdy feel, ensuring long-lasting wear.{" "}
          </p>
          <p className="font-semibold py-4 text-lg">Select Size:</p>
          <div className=" flex gap-6">
            <button className="px-4 py-2 rounded-md bg-slate-100 border ">
              S
            </button>
            <button className="px-4 py-2 rounded-md  bg-slate-100 border">
              M
            </button>
            <button className="px-4 py-2 rounded-md  bg-slate-100 border">
              L
            </button>
            <button className="px-4 py-2 rounded-md  bg-slate-100 border">
              XL
            </button>
            <button className="px-4 py-2 rounded-md  bg-slate-100 border">
              XXL
            </button>
          </div>
          <div className="py-4">
            <button
              onClick={() => Dispatch(Addtoocart(product))}
              className="px-4 py-2 text-white bg-red-600 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="tabs-container mt-10 px-6 md:px-24 py-12">
        <div className="tabs flex justify-around border-b  ">
          <button
            className={`tab-button py-2 px-4 font-bold ${
              activeTab === "description" ? "border-b-2 border-red-600" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-button py-2 px-4 font-bold ${
              activeTab === "reviews" ? "border-b-2 border-red-600" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div
          className={`tab-content ${
            activeTab === "description" ? "block" : "hidden"
          } mt-4`}
        >
          <p>
            Stay Cozy and Stylish with Our Premium Warm Jacket Embrace the
            winter chill with our premium warm jacket, designed to keep you snug
            and stylish no matter the weather. Crafted from high-quality,
            breathable materials, this jacket offers optimal insulation without
            compromising on comfort. <br />
            <br />
            The outer layer is windproof and water-resistant, ensuring you stay
            dry and warm even in the harshest conditions. Inside, the soft,
            fleece-lined interior provides an extra layer of warmth, while the
            adjustable hood and cuffs offer a customizable fit to keep the cold
            out. Whether you're hitting the slopes, going for a winter hike, or
            just commuting to work, this jacket is your ultimate cold-weather
            companion.
          </p>
        </div>
        <div
          className={`tab-content ${
            activeTab === "reviews" ? "block" : "hidden"
          } mt-4`}
        >
          <p>
            Emily R. <br />
            ⭐️⭐️⭐️⭐️⭐️
            <br />
            <br />
            I absolutely love this jacket! It's incredibly warm and the fleece
            lining feels so soft against my skin. I wore it during a recent trip
            to the mountains, and it kept me comfortable even in freezing
            temperatures. Plus, the design is so stylish – I've received so many
            compliments!"
            <br />
            <br />
            Jason M. <br />
            ⭐️⭐️⭐️⭐️
            <br />
            <br />
            "This jacket is perfect for the cold weather. The material is
            durable and does a great job blocking the wind. I appreciate the
            adjustable hood and cuffs, which help keep the cold out. My only
            minor gripe is that I wish there were more color options, but
            overall, it's a fantastic buy."
            <br />
            <br />
            Sophia L.
            <br />
            ⭐️⭐️⭐️⭐️⭐️
            <br />
            <br />
            "Best winter jacket I've ever owned! It has all the features I need
            for my outdoor adventures – water-resistant, windproof, and plenty
            of pockets for my gear. The fit is also great; it feels tailored
            without being too tight. Highly recommend this jacket to anyone
            looking for warmth and style."
            <br />
            <br />
            David K.
            <br />
            ⭐️⭐️⭐️⭐️⭐️
            <br />
            <br />
            "I'm really impressed with the quality of this jacket. It's
            lightweight yet incredibly warm, making it ideal for both everyday
            wear and more intense outdoor activities. The sleek design means I
            can wear it to work or out with friends without feeling bulky.
            Definitely worth the investment!"
            <br />
            <br />
            Anna P.
            <br />
            ⭐️⭐️⭐️⭐️
            <br />
            <br />
            "This jacket has quickly become my go-to for winter. It keeps me
            toasty without overheating, and the pockets are very handy. The only
            thing I'd suggest is a slightly longer length for more coverage, but
            overall, it's a fantastic jacket that I highly recommend."
          </p>
        </div>
      </div>
        </>
    )
}

export default ProductDetail;
