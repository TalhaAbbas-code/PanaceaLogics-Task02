import React from 'react'
import customer1 from "./customer1.jpeg"

function Introduction() {
  return (
    <div className="flex flex-col justify-center  items-center lg:px-[20%] bg-stone-100">
        <div className='flex flex-col lg:px-[10%] max-lg:px-[2%] max-lg:items-start items-center justify-center'>
             <h1 className="text-4xl my-10  font-bold">
            What is Zendesk used for?

        </h1>
        <p className='mb-[10%]'>
            Over 100,000 businesses rely on Zendesk to elevate their customer experience. We give you access to a comprehensive, easy-to-use customer service solution that will grow with your business. Customer service is about more than just your customers—it’s about your business and your teams. We don’t just make your customers’ lives easier. We empower your agents to succeed and keep your entire company in sync. Our powerful helpdesk software brings together all the tools you need.
        </p>

        </div>
        <div className=" w-full h-[90%] max-lg:px-[2%]    ">
        <img
            src={customer1}
            alt='logo'
            width={29}
            height={29}
            className="  w-full h-[500px] "
            
          />
      </div>
       <div className='flex flex-col max-lg:px-[2%]  items-center justify-center'>
             <h1 className="text-4xl my-10  font-bold">
           Zendesk: By your side, serving your customers

        </h1>
        <p className='mb-[10%] lg:text-center'>
           Every business—no matter its size, industry, or ambition—needs to deliver powerful, innovative customer experiences. Zendesk powers 100,000 customers across a wide range of industries in 30+ languages.
        </p>

        </div>
       


    </div>
  )
}

export default Introduction