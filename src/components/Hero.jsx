import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="">
            <div className="bg-hero w-full h-[80vh] flex justify-center items-center  flex-col gap-5  bg-cover">
                <h1 className='text-4xl font-bold text-white'>The Summer Sale</h1>
                <button className='px-8 py-3 text-xl border-2 border-white bg-black text-white font-bold inline-flex'>Shop Now</button>
             </div>
        </div>
    </div>
  )
}

export default Hero