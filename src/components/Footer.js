import React from 'react'
import { footerLinks } from "../constants";
import MyButton from './MyButton';

function Footer() {
  return (
    <div className='flex flex-col   lg:px-[19%] max-md:px-5'>
        <div>
           <ul className="hidden lg:flex  justify-center items-start px-5 py-10 mb-10  gap-1">
                    {footerLinks.map((item, index) => (
                      <li
                        key={item.label}
                        className="relative group"
                        
                      >
                        <a href={item.href} className="font-montserrat  text-lg text-slate-gray">
                          {item.label}
                        </a>
          
                      
                        {item.subMenu &&  (
                          <ul className="     bg-white  ">
                            {item.subMenu.map((subItem, subIndex) => (
                              <li key={subIndex} className=" hover:bg-gray-100">
                                <a href={subItem.href} className="block text-gray-700">
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
        </div>
        <hr className=' max-lg:hidden border border-stone-400 '></hr>
        <div className='flex flex-row items-center justify-start max-lg:flex-col max-lg:px-5 gap-5 py-10'>
          <h1 className='font-bold text-2xl'>
            Subscribe to receive Zendesk news and updates.
          </h1>
           <div className="   flex flex-row justify-between w-full max-lg:flex-col   border border-stone-600  ">
        <input type="text" placeholder="what is your Email Address?" className="input max-lg:p-4   " />
        <div className=' max-lg:hidden'>
          <MyButton className="rounded-lg" bgColor="bg-teal-900" text="Subscribe" onClick={() => alert("Button Clicked!")} />

        </div>
        
          
      
      </div>
      <div className=' lg:hidden w-full'>
         <button className="px-4 py-2 w-full bg-teal-900 text-white ">
      Subscribe
    </button>

        </div>
      <div className='flex px-3 flex-row  justify-between gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" theme="[object Object]" class="SocialBlockstyle__TwitterIcon-sc-1ebt7cj-1 ennTzG"><path d="M9.3 6.9 14.4 1h-1.2L8.8 6.1 5.2 1H1.1l5.3 7.8L1.1 15h1.2L7 9.6l3.7 5.4h4.1zm-1.6 2-.6-.8-4.3-6.2h1.9l3.5 5 .5.8 4.5 6.5h-1.9z" class="twitter-x_svg__st0"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" theme="[object Object]" class="SocialBlockstyle__FacebookIcon-sc-1ebt7cj-2 fMYITU"><path d="M15.043 8.043a7.043 7.043 0 1 0-14.086 0A7.044 7.044 0 0 0 6.899 15v-4.921H5.111V8.043h1.788V6.491c0-1.765 1.051-2.74 2.66-2.74.771 0 1.576.138 1.576.138v1.733h-.888c-.875 0-1.148.543-1.148 1.1v1.321h1.953l-.312 2.036H9.099V15a7.044 7.044 0 0 0 5.942-6.957z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" theme="[object Object]" class="SocialBlockstyle__LinkedInIcon-sc-1ebt7cj-4 bRAChU"><path d="M15.25 9.589v5.441h-3.109V9.953c0-1.275-.45-2.145-1.574-2.145-.86 0-1.37.586-1.595 1.153-.081.202-.102.485-.102.769v5.298H5.759s.042-8.598 0-9.487h3.109v1.346l-.021.031h.021v-.031c.413-.645 1.15-1.567 2.803-1.567 2.045 0 3.579 1.357 3.579 4.27zM2.509.97C1.445.97.75 1.678.75 2.61c0 .91.675 1.64 1.718 1.64h.021c1.085 0 1.757-.729 1.757-1.64C4.225 1.678 3.571.97 2.51.97zM.933 15.03h3.109V5.543H.933z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 16" fill="currentColor" theme="[object Object]" class="SocialBlockstyle__YoutubeIcon-sc-1ebt7cj-0 iEJxZX"><path d="M19.6 3.2c-.2-.9-.9-1.5-1.8-1.8C16.3 1 10 1 10 1s-6.3 0-7.8.4c-.9.2-1.6.9-1.8 1.8C0 4.7 0 8 0 8s0 3.3.4 4.8c.2.9.9 1.5 1.8 1.8 1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4c.9-.2 1.5-.9 1.8-1.8.4-1.5.4-4.8.4-4.8s0-3.3-.4-4.8M8 11V5l5.2 3z"></path></svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="currentColor" theme="[object Object]" class="SocialBlockstyle__InstaIcon-sc-1ebt7cj-3 gxgYUI"><path d="M5.375 1h5.25A4.375 4.375 0 0 1 15 5.375v5.25A4.375 4.375 0 0 1 10.625 15h-5.25A4.375 4.375 0 0 1 1 10.625v-5.25A4.375 4.375 0 0 1 5.375 1m5.25 12.688a3.066 3.066 0 0 0 3.063-3.063v-5.25a3.066 3.066 0 0 0-3.063-3.063h-5.25a3.066 3.066 0 0 0-3.063 3.063v5.25a3.066 3.066 0 0 0 3.063 3.063zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m1.313 0c0 1.206.982 2.188 2.188 2.188S10.189 9.206 10.189 8s-.982-2.188-2.188-2.188S5.813 6.793 5.813 8m5.846-3.182a.477.477 0 1 0 0-.954.477.477 0 0 0 0 .954"></path></svg>
      </div>

        </div>
    </div>
  )
}

export default Footer