import React ,{useEffect}from 'react'
import cross from '../assets/cart_cross_icon.png'
import { useSelector , useDispatch } from 'react-redux'
import { getCartTotal ,removeItem} from '../features/CartSlice'
 
const Cartpage = () => {

    const {cart, totalQuantity, totalPrice,  } = useSelector((state)=>state.allcart)
    const dispatch =useDispatch()

    useEffect(() => {
        dispatch(getCartTotal());
      }, [cart]);
  return (
    < >
         <div className="lg:px-32 px-6 py-6  ">
        <div className="sm:grid sm:grid-cols-6 flex flex-wrap gap-2 font-semibold text-sm pt-9 pb-6 border-b-[1.2px] border-black justify-center ">
          <p className="col-span-2 ">Products</p>

          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
          <p>Remove</p>
        </div>

       {cart.map((data)=>{
        return(
            <div className="" key={data.id}>
            <div className="sm:grid sm:grid-cols-6 flex flex-wrap gap-3  justify-center items-center  py-4  text-sm">
              <div className="col-span-2 flex gap-2  justify-center">
                <img className="w-12" src={data.image} alt="" />
                <p className="pr-6">{data.name}</p>
              </div>
              <p>${data.new_price}</p>
              <button className="  md:inline-flex"> Qt.{data.quantity} </button>
              <p>${data.new_price *data.quantity}</p>
              <button onClick={() => dispatch(removeItem(data.id))}>
                <img className='w-3   mx-5'
                 
                  src={cross}
                  alt=""
                />
              </button>
            </div>
            <hr />
          </div>
        )
       })}

        <div className="lg:grid lg:grid-cols-2 gap-7 py-5 flex flex-wrap-reverse  md:py-12">
            <div className="left md:pr-12 w-full">
                <h3 className='font-bold py-3'>Cart Totals</h3>
                <div className="flex justify-between py-3 px-2 border-b text-sm border-black"><p>Total Quantity</p><p>{totalQuantity}</p></div>
                <div className="flex justify-between py-3  px-2  border-b text-sm border-black"><p>Shipping Fee</p><p>FREE</p></div>
                <div className="flex justify-between py-3 px-2  border-b text-sm border-black font-bold"><p>Total</p><p>${totalPrice}</p></div>
<button className='hover:bg-red-500  hover:text-white px-5 py-3 mt-4 bg-black text-white'>Proceed To CheckOut</button>
            </div>
            <div className="right md:pl-5 w-full md:pr-12 text-sm">
                <p>If You Have a Promo Code, Enter it Here</p>
                <div className="flex justify-between  mt-3   bg-gray-200 "><input className='w-full outline-none bg-transparent px-3' type="text" placeholder='Promo Code' /><button className='px-6 py-3 bg-black text-white'>Submit</button></div>
              
            </div>
        </div>
      </div>  
    </>
  )
}

export default Cartpage

 
