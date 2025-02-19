import React from 'react'
import MyButton from './MyButton'

function CustomerService() {
  return (
    <>
    <div className='flex flex-col lg:px-[20%]  py-[5%] bg-stone-100'>
        <div className='flex flex-col justify-center text-center px-[10%] mb-10 gap-10'>
            <h1 className='lg:text-5xl text-3xl font-bold'>Improve your customer service</h1>
            <p>
                Here's a small selection of valuable information and best practices from our extensive library of customer service resources.
            </p>

        </div>
        <div className='flex flex-row max-lg:flex-wrap gap-10 max-lg:justify-center lg:justify-between  '>
            <div className='flex flex-col items-start gap-4 max-lg:px-[2%] w-[40%] lg:w-full   '>
                 <img
            src="https://web-assets.zendesk.com/cdn-cgi/image/width=640,q=45,f=auto/apac/images/p-what-is-zendesk/level-up-photo-roi.jpg"
            alt='logo'
            width={29}
            height={29}
            className="  w-full h-[200px] "
            
          />
          <h1 className='text-xl font-bold'>ROI Calculator</h1>
          <p className=''>Discover the specific benefits of better customer service using our ROI Calculator.</p>
          <div className='flex items-center justify-center '>
             <p>Learn More</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="Linkstyle__ArrowIcon-sc-1cm3ukq-1 bxjWlu arrow-icon" theme="[object Object]"><path d="M9.804 11.373c.501-1.024 1.408-2.069 2.379-2.656v-.555c-.981-.608-1.909-1.835-2.251-2.688l-1.013.587c.32.704.928 1.376 1.483 1.813h-6.24v1.109h6.229c-.565.395-1.163 1.067-1.525 1.739l.939.651z"></path></svg>

          </div>
          

            </div>
              <div className='flex flex-col items-start gap-4 w-[40%] lg:w-full   '>
                 <img
            src="https://web-assets.zendesk.com/cdn-cgi/image/width=640,q=45,f=auto/apac/images/p-what-is-zendesk/level-up-photo-cx.jpg"
            alt='logo'
            width={29}
            height={29}
            className="  w-full h-[200px] "
            
          />
          <h1 className='text-xl font-bold'>Maximize the attractiveness of your customer experience</h1>
          <p className=' pb-10'>Check out our Customer Experience Trends Report to see where your business stands.</p>
          <div className='flex items-center justify-center '>
             <p>Learn More</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="Linkstyle__ArrowIcon-sc-1cm3ukq-1 bxjWlu arrow-icon" theme="[object Object]"><path d="M9.804 11.373c.501-1.024 1.408-2.069 2.379-2.656v-.555c-.981-.608-1.909-1.835-2.251-2.688l-1.013.587c.32.704.928 1.376 1.483 1.813h-6.24v1.109h6.229c-.565.395-1.163 1.067-1.525 1.739l.939.651z"></path></svg>

          </div>
         

            </div>
             <div className='flex flex-col items-start gap-4  lg:w-full  max-lg:px-[4%] '>
                 <img
            src="https://web-assets.zendesk.com/cdn-cgi/image/width=1080,q=45,f=auto/apac/images/p-what-is-zendesk/level-up-photo-skills.jpg"
            alt='logo'
            width={29}
            height={29}
            className="  w-full h-[200px] "
            
          />
          <h1 className='text-xl font-bold'>Strengthen your skills</h1>
          <p className=' pb-10'>Your customer service can make or break a business relationship. But what exactly is quality service?</p>
          <div className='flex items-center justify-center '>
             <p>Learn More</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="Linkstyle__ArrowIcon-sc-1cm3ukq-1 bxjWlu arrow-icon" theme="[object Object]"><path d="M9.804 11.373c.501-1.024 1.408-2.069 2.379-2.656v-.555c-.981-.608-1.909-1.835-2.251-2.688l-1.013.587c.32.704.928 1.376 1.483 1.813h-6.24v1.109h6.229c-.565.395-1.163 1.067-1.525 1.739l.939.651z"></path></svg>

          </div>
         

            </div>

        </div>
        
           
        
    </div>
     <div className='flex flex-col text-center justify-center items-center  gap-10  p-[5%] bg-sky-100 '>
                <h1 className='text-5xl max-lg:text-3xl font-bold w-full'>By your side throughout your free trial</h1>
                <div className='flex flex-row gap-5 max-lg:flex-col'>
                    <MyButton  bgColor="bg-teal-900" text="Try It Free Trail" onClick={() => alert("Button Clicked!")}></MyButton>
                     <MyButton  bgColor="bg-transparent" text="Request a Demonstration" textColor="text-teal-900" onClick={() => alert("Button Clicked!")}></MyButton>


                </div>
            </div>
            </>
  )
}

export default CustomerService