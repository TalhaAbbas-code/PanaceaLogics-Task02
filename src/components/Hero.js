import React from 'react'
import MyButton from './MyButton'
import   customer1  from "./assets/customer1.jpeg";

function Hero() {
  return (
    <div className='w-full flex xl:flex-row flex-col max-lg:py-[22%]  max-lg:px-[2%]    gap-5 lg:px-[20%]   pb-12 pt-[8%]  bg-sky-100 '>
      <div className="flex flex-col justify-between  px-0 md:w-[40%]">
        <div>
        <span className="text-xl">
          At your side to serve your customers
        </span>
       <h1>
         <span className="max-md:text-3xl text-7xl">
         What is  
        </span>
        <span> </span>
         <br  className="md:block hidden"/>
         <span className="max-md:text-3xl text-7xl">
           Zendesk? 
        </span>
        </h1>
        <p className="mt-7 text-xl">
          We give customer service agents and sales teams all the tools to fulfill their mission brilliantly.
        </p>
        </div>
        <div className="mt-5 w-full items-end ">
         <MyButton  bgColor="bg-teal-900" text="Click Meee" onClick={() => alert("Button Clicked!")}/>
          </div>
      </div>
      <div className=" lg:w-[60%]   ">
        <img
            src={customer1}
            alt='logo'
            width={29}
            height={29}
            className="  w-full h-[400px] "
            
          />
      </div>

    </div>
  )
}

export default Hero