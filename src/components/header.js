import logo from "../images/logo-adroll.svg";
import { useState } from "react";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {MdOutlineKeyboardArrowUp} from "react-icons/md"

function Header({ toggleSidebar }) {
const [onHover, setHover] = useState(false);
const hoverDropdown = () => {
  setHover(true);
  if (!onHover) {
   
  }
}

const removeDropdown = () => {
  setTimeout(() => {
    setHover(false)
  }, 5000);
 
}


 

   return (
    <>
<header className=" navbar min-h-0 px-3 md:p-5 p-0  bg-white ">
<div className="navbar-start  bg-base-100">
<img src={logo} className="md:w-20 md:hover:w-24 w-14 " alt="" srcset="" />
<ul className="navbar-center hidden lg:flex  menu menu-horizontal px-1 ">
<div className="mx-5 dropdown">

<a href="/" class="dropdown-btn block py-2 pl-3 pr-4 hover:text-[#55C7F3] hover:bg-white  rounded md:p-0 " aria-current="page"  >Why AdRoll</a>

<ul className="dropdown-content p-2 bg-base-100">
<a href="/" className="hover:text-[#55C7F3] hover:underline">Managed Services</a>
<a href="/" className="hover:text-[#55C7F3] hover:underline">Case Studies</a>
</ul>
   
</div>

<div className="mx-5">
<a href="/" class=" py-2 pl-3  flex text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#55C7F3] md:p-0  dark:text-white md:dark:hover:text-blue-500 font-extralight dark:hover:text-white md:dark:hover:bg-transparent collapse-arrow" onMouseEnter={hoverDropdown} onMouseLeave={removeDropdown} >Marketing Platform <MdOutlineKeyboardArrowDown className={` ${onHover ? "hidden" : "flex"}`}  /> <MdOutlineKeyboardArrowUp className={` ${onHover ? "flex" : "hidden"}`}  /></a>

</div>
<li className="mx-5">
<a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#55C7F3] md:p-0 dark:text-white md:dark:hover:text-blue-500 font-extralight dark:hover:text-white md:dark:hover:bg-transparent">For E-commerce</a>
</li>
<li className="mx-5">
<a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#55C7F3] md:p-0 dark:text-white md:dark:hover:text-blue-500 font-extralight dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
</li>
<li className="mx-5">
<a href="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#55C7F3] md:p-0 dark:text-white md:dark:hover:text-blue-500 font-extralight dark:hover:text-white md:dark:hover:bg-transparent">Resources</a>
</li>
</ul>
</div>
<div className="navbar-end  ">
<a href="/" className="md:mx-5 mx-3 hover:underline  hidden md:block">Log in</a>
<button className={ `bg-[#8E44AD] text-white rounded-none text-sm  md:rounded-md md:p-16 hover:bg-[#d451bc] delay-200 ease-in p-2 py-4 md:py-3 px-4 md:px-5 font-light   "}`}> GET STARTED </button>
</div>
<label htmlFor="my-drawer-2" className="lg:hidden block btn btn-square btn-ghost">
<i  className={`block lg:hidden text-4xl ml-5 bi bi-list font-bold `} onClick={toggleSidebar} ></i>
</label>

    
</header>

<footer  className={`footer py-10 max-w-screen-xl mx-7  bg-white text-base-content ${onHover ? " hidden md:flex gap-20" : "hidden"}`} >
  {/* <div className=""> */}
  <div className="flex flex-col gap-3">
  <span className=""> Marketing Platform</span> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Audience & Segmentation</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Marketing Automation</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Customer Privacy Protection</a> 
   
  </div> 
  <div className="flex flex-col gap-3">
  <span className=""> Campaigns</span> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Retargeting ads</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Brand Awareness  Ads</a> 
    
   
  </div> 
  <div className="flex flex-col gap-3">
  <span className=""> Marketing Platform</span> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Display Advertising</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Video Advertising</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Native Advertising</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Email Marketing</a> 

  </div> 
  <div className="flex flex-col gap-3">
  <span className=""> Marketing Platform</span> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Facebook Advertisting</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Instagram Advertising</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Tiktok Advertising</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Pinterest Advertising</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Google Advertising</a> 
   
  </div> 
  <div className="flex flex-col gap-3">
  <span className=""> Marketing Platform</span> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Cross-channel Performance</a> 
    <a href="/" className="link link-hover text-[#A261B6] hover:text-[#9cd2e8]">Cross-channel Attribution</a> 
  
  </div> 
  {/* </div> */}
</footer>






   

</>
  );
}

export default Header;