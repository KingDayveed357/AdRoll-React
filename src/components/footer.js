import React from 'react';
import white from '../images/white-8.png';
import AdRoll from '../images/logo-adroll.svg';
import nextRoll from '../images/logo-nextroll.svg';
import rollWorks from '../images/logo-rollworks.svg';
import choices from  "../images/your-privacy-choices.png"

function Footer() {
  return (
    <>
    <footer className="footer max-w-screen-lg  lg:flex md:grid md:grid-cols-5 md:px-3 grid grid-cols-2  mx-auto p-10 gap-16 ">
        <div className="flex flex-col gap-8">
    <div className='flex flex-col gap-3'>
      <span className="font-semibold">Why AdRoll?</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">Overview</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Pricing</a> 
    
    </div> 
    <div className='flex flex-col gap-3'>
      <span className="font-semibold">For ecommmerce stores</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">AdRoll for ecommerce</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Shopify</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">WooCommerce</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">BigCommerce</a>
      <a href='/' className="link link-hover text-xs  font-extralight">Magento</a>
    </div> 
    </div>
    <div className="flex flex-col gap-8">
    <div className='flex flex-col gap-3'>
      <span className="font-semibold">Why AdRoll?</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">Branding</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Design</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Marketing</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Advertisement</a>
    </div> 
    <div className='flex flex-col gap-3'>
      <span className="font-semibold">Company</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">About us</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Contact</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Jobs</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Press kit</a>
    </div> 
    </div>
    <div className='gap-3'>
      <span className="font-semibold">Explore</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">Features</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Enterprise</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Security</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Pricing</a>
    </div> 
    <div  className='gap-3'>
      <span className="font-semibold">Apps</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">Mac</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Windows</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">iPhone</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Android</a>
    </div>
    <div className='gap-3'>
      <span className="font-semibold">Explore</span> 
      <a href='/' className="link link-hover text-xs  font-extralight">Features</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Enterprise</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Security</a> 
      <a href='/' className="link link-hover text-xs  font-extralight">Pricing</a>
    </div> 
    <div  className='gap-3 '>
        <div className='flex md:gap-5 gap-2 md:text-xl text-sm'>
     <a href='/'><i class="bi bi-facebook"></i></a>
     <a href='/'><i class="bi bi-linkedin"></i></a>
     <a href='/'><i class="bi bi-instagram"></i></a>
     <a href='/'><i class="bi bi-twitter"></i></a>
     </div>
    <img src={white} alt="" srcset=""  className='md:h-20 h-12 mt-5'/>
    </div>
  </footer>

  <footer class="bg-[#F4F6F9] dark:bg-gray-900">
    <div class=" max-w-screen-xl px-5 md:px-2 py-16 mx-auto  xl:gap-0 ">
        <div className='flex flex-col justify-center items-center'>
    <img src={nextRoll} alt="" srcset="" className='w-40' />
    <div className='flex gap-5 mt-5'>
    <img src={AdRoll} alt="" srcset="" className=' w-20' />
    <img src={rollWorks} alt="" srcset="" className=' w-28'/>
    </div>
   <p className='text-xs mt-7'>NextRoll is as an equal opportunity employer.</p>
   <a href='/' className='text-xs underline font-extralight'>We stand alongside organizations that support our Rollers and community</a>
   <div className='md:flex grid grid-cols-2  md:flex-row gap-8 my-5 text-xs  font-semibold'>
    <a href='/' className='hover:underline'> Carees</a>
    <a  href='/' className='hover:underline'> Trust Center</a>
    <a  href='/' className='hover:underline'>Terms of service</a>
    <a  href='/' className='hover:underline'>Website term of Use</a>
    <a  href='/' className='hover:underline'>Privacy Notice</a>
    <a  href='/' className='hover:underline'>Infrigment policy</a>
    <a  href='/' className='hover:underline'>Ad Opt Out</a>
    <a  href='/' className='hover:underline'>CCPA Notice at Collection</a>
    <a  href='/' className='hover:underline'>AdChoices</a>
    </div>
    <a href="/" className='text-xs font-semibold flex gap-2'>Your Privacy Choices <img src={choices} alt="" className='h-3 mt-[2.2px]' srcset="" /></a>
    <p className='mt-4 text-xs'>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit <span className='text-blue-400'>nextroll.com.</span></p>
    <button className='bg-[#00AEEF]  rounded-md p-1 mt-5 text-white text-xs px-7'>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</button>
    </div>
    </div>
</footer>
  </>
  )
}

export default Footer
