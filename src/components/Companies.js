import React from 'react'

function Companies() {
  return (
    <div>
        <div className='w-full lg:px-[20%] max-lg:px-[2%] flex xl:flex-col justify-start flex-col h-70  gap-10 items-center mt-10 mb-10  bg-white '>
      <p className="text text-5xl max-lg:text-3xl font-bold ">Companies that use Zendesk</p>
      <div className="flex flex-row justify-between flex-wrap items-end w-full">
        <h1 className=" text-6xl font-bold ">
          <span className="text-red-700">COTTON</span>
          <span>:</span>
          <span className="text-red-700">ON</span>
        </h1>
        <h1 className="text-5xl font-bold">
          Uber
        </h1>
         <h1 className="text-5xl font-bold">
          Rea Group
        </h1>
        <h1 className="text-4xl font-bold">
          Show po.
        </h1>

      </div>

    </div>
    </div>
  )
}

export default Companies