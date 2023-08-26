import hero from '../images/hero.png';
import automation from '../images/img-automation_studio.png';
import lounge from "../images/lounge.webp";
import topo from "../images/topo-designs.webp";
import peyton from "../images/peyton-jewelry.webp";
import shadRays from "../images/shady-rays.webp";
import kittens from "../images/exploading-kittens.webp";
import kandy from '../images/head-kandy.webp';
import customersFind from "../images/customers-find.webp";
import saveTime from "../images/save-time.webp";
import correctChoice from '../images/correct-choices.png';
import experts from '../images/experts.webp';
import Button from './button';
import blueBlob from "../images/blob-blue.svg";
import volcano from '../images/logo-volcanica.webp'
import pink from '../images/blob-pink.svg';
import bg from "../images/bkgd-bluedot-sm.png";
import medal from "../images/medal.svg"
import "./style.css";
import medal5 from "../images/medals/medal (2).svg";
import medal2 from "../images/medals/medal (1).svg";
import medal3 from "../images/medals/medal (3).svg";
import medal4 from "../images/medals/medal (4).svg";

function Section() {
    return(
        <>


        <section className='bg-[#4C805A] lg:px-5 xl:px-0 px-0'>
       <div className="max-w-screen-lg  mx-auto py-3 px-4 lg:px-0  ">
        <div className='flex '>
   <h1 className='text-white'>Become an AI expert! 🤖 Learn how AI can help improve your marketing performance and save you time.</h1>
    <a href="/" className="underline text-[#FDC145] ml-2"> Register Now</a>
  </div>
  </div>
  </section>
      <section class="bg-[#FFE8E0] ">
    <div class="grid    px-4 md:px-8 lg:px-0 py-8 lg:py-0  mx-auto lg:mx-0 lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div class="mr-auto xl:mx-32 place-self-center lg:col-span-6 lg:px-6 px-0">
            <h1 class="max-w-2xl mb-4 md:text-4xl text-2xl font-bold    dark:text-white">Smaller budgets need smarter dollars</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
           <Button/>
        </div>

         <div class="hidden lg:mt-0 lg:col-span-6  lg:flex " style={{ backgroundImage: `url('${blueBlob}')`,    }}>
           <div className='hero-content  h-[100vh]  mx-auto'>
            <img src={hero} className='h-[70vh] ' alt="mockup"/> 
            </div>
        </div>                 
    </div>
</section>
<section class="bg-white dark:bg-gray-900 lg:px-5 xl:px-0 px-0">  
    <div class="grid max-w-screen-lg  px-5 md:px-10 lg:px-0  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-5">
            <h3 class="max-w-2xl mb-4 text-3xl font-semibold  leading-10  dark:text-white">AdRoll works for the
<span className='underline ml-3 text-gray-500 '>marketing newbie.</span></h3>
            <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8  ">Our industry-first automation builder gives you full control of campaigns across display, social, and email — all from one place.</p>
           <a href='/'  className='inline-flex justify-center  items-center py-3 px-5 text-[#CC66A0]  font-medium text-center'><span className='underline'>Explore automation builder</span><svg class="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
        </div>
        <div className='hidden md:flex lg-col-span-2'></div>
        <div class=" lg:mt-0 lg:col-span-5  md:mx-5  lg:flex">
            <img src={automation} className='p-5 ' alt="mockup"/> 
        </div>                
    </div>
 
  <div className=" grid md:grid-cols-4 grid-cols-2 items-center mb-10 lg:flex max-w-screen-lg lg:flex-row md:max-w-screen-lg md:mx-auto">
    <img src={lounge} alt="" srcset="" className='md:w-40 mx-5 lg:mt-5 lg:h-10 w-24 ' />
    <img src={topo} alt="" srcset=""  className='md:w-30 mx-5 my-3 md:my-0 lg:mt-5 lg:h-5 w-32'/>
    <img src={peyton} alt="" srcset="" className='md:w-30 mx-5 my-3 md:my-0 lg:mt-5 lg:h-8 w-32'  />
    <img src={shadRays} alt="" srcset="" className='md:w-30 mx-5 my-3 md:my-0 lg:mt-5 lg:h-3 w-32' />
    <img src={kittens} alt="" srcset=""  className='md:w-30 mx-5 my-3 md:my-0 lg:mt-5 lg:h-5 w-32' />
    <img src={kandy} alt="" srcset="" className='md:w-30 mx-5 my-3 md:my-0 lg:mt-7 lg:h-7 w-32 ' />
  </div>

</section>

<section class="bg-[#F4F6F9] dark:bg-gray-900">
    <div class="grid max-w-screen-lg px-5 md:px-10 lg:px-0  py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="hiddmden lg:mt-0 lg:col-span-5    lg:flex">
            <img src={customersFind} alt="mockup"/> 
        </div>       
        <div className='hidden  md:flex lg-col-span-2'></div>
        <div class="mr-auto place-self-center lg:col-span-5">
            <h3 class="max-w-2xl mb-4 text-2xl font-semibold  leading-10  dark:text-white">For 15 years, we've been the leader in helping our customers find their best customers</h3>
            <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8  ">The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. Let our expertise find the right customers for your business.</p>
           <a href='/'  className='inline-flex justify-center  items-center py-3 px-5 text-[#CC66A0] text-lg font-medium text-center'><span className='underline'>Learn  more</span><svg class="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
        </div>        
    </div>
</section>


<section class="bg-white dark:bg-gray-900 lg:px-7 px-0 xl:px-0">
    <div class="grid max-w-screen-lg px-5 md:px-10 lg:px-0  py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center  lg:col-span-5">
            <h3 class="max-w-2xl mb-4 text-2xl font-semibold  leading-10  dark:text-white">Save time and energy by running all your campaigns across 500+ platforms from one place</h3>
            <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8  ">When we say one-stop shop, we mean one-stop. Launch, pause, and edit ad campaigns across all the places you want to advertise, plus use that data to see your campaigns holistically and make improvements.</p>
           <a href='/'  className='inline-flex justify-center  text-lg items-center px-5 text-[#CC66A0]  font-medium text-center'><span className='underline'>Explore social ads manager</span><svg class="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
        </div>
        <div className='hidden md:flex lg-col-span-2'></div>
        <div class="hidden lg:mt-0 lg:col-span-5    lg:flex">
            <img src={saveTime} alt="mockup"/> 
        </div>                
    </div>
</section>


<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-lg px-5 md:px-10 lg:px-0  py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="hidden lg:mt-0 lg:col-span-5    lg:flex">
            <img src={correctChoice} alt="mockup"/> 
        </div>       
        <div className='hidden md:flex lg-col-span-2'></div>
        <div class="mr-auto  place-self-center lg:col-span-5">
            <h3 class="max-w-2xl mb-4 text-2xl font-semibold  leading-10  dark:text-white">Our retargeting and brand awareness ads make billions of correct choices every day</h3>
            <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8  ">Our AI does what even the most savvy marketer alone cannot. Our powerful machine learning makes more predictions per second than the NASDAQ to attract the right customers to your site and get them buying again and again.</p>
        <div className='leading-none'>  
         <a href='/'  className='inline-flex justify-center m-0 my-0 items-center  hover:text-purple-400  px-5 text-[#CC66A0] text-lg font-medium text-center'><span className='underline'>Explore retargeting ads</span><svg class="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
  <a href='/' className='inline-flex justify-center m-0 items-center hover:text-purple-400 my-0 px-5 text-[#CC66A0] text-lg font-medium text-center'><span className='underline'>Explore brand awareness ads</span><svg class="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a></div>
        </div>        
    </div>
</section>

<section class="bg-white dark:bg-gray-900 lg:px-7 px-0 xl:px-0">
    <div class="grid max-w-screen-lg px-5 md:px-10 lg:px-0  py-6 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">   
        <div class="mr-auto place-self-center lg:col-span-5">
            <h3 class="max-w-2xl mb-4 text-2xl font-semibold  leading-10  dark:text-white">Experts to manage your advertising</h3>
            <p class="max-w-2xl mb-6  text-gray-500 lg:mb-8  ">Want to run effective campaigns but don’t have the bandwidth to manage different platforms? AdRoll managed services can be an extension of your marketing team, providing you with a dedicated platform expert to partner with, helping you and your team achieve your marketing goals and maximize return from your campaigns.</p>
           <a href='/'  className='inline-flex justify-center  items-center py-3 px-5 text-[#CC66A0] text-lg font-medium text-center'><span className='underline'>Get the support you deserve</span><svg class="ml-2 mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </a>
        </div>       
        <div className='hidden md:flex lg-col-span-2'></div> 
        <div class=" lg:mt-0 lg:col-span-5    lg:flex">
            <img src={experts} alt="mockup"/> 
        </div>    
    </div>
</section>


<section class=" max-w-screen-lg mx-auto px-4 xl:px-0">
    <div class="grid  border-[#303273] border-8    px-4 md:px-8 lg:px-0 py-8 lg:py-0  lg:gap-8 xl:gap-0  lg:grid-cols-12 ">
        <div className="callout-quote lg:col-span-5 p-5 mt-12">
  <img src={volcano} className="h-30 w-40 mx-auto lg:mx-2" alt="" />
    <p className='mt-5 text-lg'>
    <b className='text-[#3C4858]'>" </b>Since last year, <b className='text-[#3C4858]'>our revenue has increased 191%</b>,{" "}
      <b className='text-[#3C4858]'>our attributed conversions 177%</b>, and our <b className='text-[#3C4858]'>engagement 33%</b>. We’re
      reaching and converting customers higher in the funnel.<b className='text-[#3C4858]'>"</b>
    </p>
  </div>
         <div class="hidden lg:mt-0 lg:col-span-7   lg:flex " style={{ backgroundImage: `url('${pink}')`,    }}>
           <div className='hero-content flex flex-col justify-center items-center mt-40 ml-24'>
           <p className='text-[#3C4858]  text-3xl'>
      <b className='text-[#3C4858] text-4xl'>AdRoll customers</b> make</p>
      
        <b className='text-8xl text-[#3C4858]'>$165B</b>
      
    
    <p className='text-[#3C4858] text-4xl'>in sales <b>every year</b></p>
            </div>
        </div>                 
    </div>
</section>


<div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 max-w-screen-lg mx-auto gap-2 my-16 px-4 lg:px-0'>
    <img src={medal} className='h-40' alt="" />
    <img src={medal2} className='h-40' alt="" />
    <img src={medal3} className='h-40' alt="" />
    <img src={medal4} className='h-40' alt="" />
    <img src={medal5} className='h-40' alt="" />
</div>

<section class="bg-[#FFE8E0] dark:bg-gray-900">
    <div class=" max-w-screen-lg  py-16 mx-auto  xl:gap-0 ">
        <div className='flex flex-col justify-center items-center'>
    <h1 className='text-3xl text-center font-bold'>Increase ROI. Learn from your data. <br/>Maximize sales.</h1>
    <div className="buttons flex  my-10">
     <Button/>
    </div>
    </div>
    </div>
</section>
</>
    )
}

export default Section;