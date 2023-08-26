import React, { useState } from 'react';
import logo from "../images/logo-adroll-white.svg";

function Sidebar() {
   const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
};
  
  return (
    <>
      
    <div className={`h-full overflow-scroll w-64 bg-[#333333] ${isSidebarOpen  ? "" : ""} transition-all duration-300`}>
      <div className="lg:mt-10 mt-0  p-5">
          <div className="flex flex-col gap-7 ">
            <div>
            <img src={logo} className={`w-32 mt-4 `}  alt="" />
            </div>
          <ul className={ ` bg-[#333333] ${isSidebarOpen ? '' : 'lg:space-y-7'}`}>
           
        <li className='flex flex-col   text-[#D6D6BC] mt-4 gap-6 '>
          <p className='text-white'>Why AdRoll? </p>
          <p className='mx-4 text-sm font-extralight'>Managed Services</p>
          <p className='mx-4 text-sm font-extralight'>Case Studies</p>
        </li>
        <li className='flex flex-col text-[#D6D6BC] mt-6 gap-6 '>
          <p className='text-white'>AdRoll for ecommerce </p>
          <p className='mx-4 text-sm font-extralight'>Shopify</p>
          <p className='mx-4 text-sm font-extralight'>Shopify Plus</p>
          <p className='mx-4 text-sm font-extralight'>WooCommerce</p>
          <p className='mx-4 text-sm font-extralight'>Wix</p>
          <p className='mx-4 text-sm font-extralight'>BigCommerce</p>
          <p className='mx-4 text-sm font-extralight'>Magneto</p>
        </li>
        <li className='flex flex-col text-[#D6D6BC] mt-6 gap-6 '>
          <p className='text-white'>  Marketing platform </p>
          <p className='mx-4 text-sm font-extralight'>Platform Overview</p>
          <p className='mx-4 text-sm font-extralight'>Retargeting Ads</p>
          <p className='mx-4 text-sm font-extralight'>Brand Awareness Ads</p>
          {/* </li> */}
          <p className='mx-4 text-sm font-extralight'>Marketing Channels</p>
          <p className='mx-4 text-sm font-extralight'>Connected Channels</p>
          <p className='mx-4 text-sm font-extralight'>Audience & Segmentation</p>
          <p className='mx-4 text-sm font-extralight'>Email Marketing </p>
          <p className='mx-4 text-sm font-extralight'>Marketing Automation</p>
          <p className='mx-4 text-sm font-extralight'>Reporting & Insights</p>
        </li>
        <li className='flex flex-col text-[#D6D6BC] mt-7 gap-6 '>
          <p className='text-white '>Pricing </p>
        </li>
        <li className='flex flex-col text-[#D6D6BC] mt-6 gap-6 '>
          <p className='text-white'>Resources</p>
          <p className='mx-4 text-sm font-extralight'>AdRoll Blog</p>
          <p className='mx-4 text-sm font-extralight'>Third-Party Cookie Trail Guides</p>
          <p className='mx-4 text-sm font-extralight'>Marketing Glossary</p>
          <p className='mx-4 text-sm font-extralight'>Holiday Marketing Resources</p>
          <p className='mx-4 text-sm font-extralight'>State of Digital Marketing Report</p>
          <p className='mx-4 text-sm font-extralight'>Return on Ad Spend Calculator</p>
          <p className='mx-4 text-sm font-extralight'>AdRoll UTM Link Builder</p>
          <p className='mx-4 text-sm font-extralight'>Events </p>
          <p className='mx-4 text-sm font-extralight'>Growth Guerilla Collective</p>
          <p className='mx-4 text-sm font-extralight'>Small Business Shopping List</p>
          <p className='mx-4 text-sm font-extralight'>Getting Started</p>
          <p className='mx-4 text-sm font-extralight'>Help Center</p>
          <p className='mx-4 text-sm font-extralight'>Beta Program</p>
        </li>
        <li className='flex flex-col text-[#D6D6BC] mt-4 gap-6 '>
          <p className='text-white'>Log in</p>
        </li>
        
        </ul>
        <div className='mx-5'>
        <button className='bg-[#8E44AD] text-white rounded-md p-2 w-full'>GET STARTED</button>
        </div>
          </div>
        </div>
        <div>
         
        {/* </div> */}
      </div>

     
    </div>
    </>
  );
}

export default Sidebar;
