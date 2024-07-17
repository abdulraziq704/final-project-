import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from "../assets/cart_icon.png";
import { Addtoocart } from "../features/CartSlice";
import { Link } from "react-router-dom";

const Card = () => {
  const items = useSelector((state) => state.allcart.items);
  const Dispatch = useDispatch();
  return (
    <>
      <div className="font-bold  md:mt-12 pt-6 md:pb-3 text-2xl md:text-4xl text-center">
        <h2 className="  border-black">Our New Collection</h2>{" "}
      </div>
      <div className="lg:grid gap-y-9 flex flex-wrap justify-center gap-4 lg:grid-cols-4 px-5 lg:px-24 py-5 md:py-12">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className=" font-poppins w-60 flex flex-col justify-center py-4 "
            >
              <Link to={`/product/${item.id}`}>
                {" "}
                <img
                  className="hover:scale-105 transition-transform	"
                  onClick={window.scrollTo(0, 0)}
                  src={item.image}
                  alt=""
                />
              </Link>
              <p className="text-xl font-bold pt-6 leading-6">{item.name}</p>
              <div className="flex justify-between items-center">
                <div className=" flex gap-3 text-lg ">
                  <p className="font-bold">${item.old_price}</p>

                  <p className="text-gray-500 line-through">
                    ${item.new_price}
                  </p>
                </div>
                <div className="  pr-3">
                  <button onClick={() => Dispatch(Addtoocart(item))}>
                    <img className="w-5 " src={cart} alt="" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
