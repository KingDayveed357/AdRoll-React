import React from 'react';
// import volcano from '../images/logo-volcanica.webp'
// import blob from "../images/blob-pink.svg";
import hero from '../images/hero.png';
import blueBlob from "../images/blob-blue.svg";
import "./style.css";

const QuoteCallout = () => (
  <>
  {/* <section id="quote-callout">
    <div className="max-w-screen-lg mx-auto container  ">
    <div className=' border-8 p-8 border-[#303273]  flex'>
      <div className="callout-quote">
        <img
          width="150"
          height="128"
          data-src={volcano}
          alt=""
          loading="lazy"
          className="lazy loaded"
          srcSet={volcano}
          src={volcano}
          data-ll-status="loaded"
        />
        <span >
          Since last year, <b>our revenue has increased 191%</b>,{' '}
          <b>our attributed conversions 177%</b>, and our <b>engagement 33%</b>. We’re reaching
          and converting customers higher in the funnel.<b>"</b>
        </span>
      </div>
      <div
        className="background callout-block lazy loaded"
        // data-bg="/assets/svg/bkgd/blob-pink.svg"
        data-ll-status="loaded"
        // style={{ backgroundImage: 'url({blob})' }}
      >
        <p >
          <b>AdRoll customers</b> make
          <span>
            <b>$165B</b>
          </span>
          in sales <b>every year</b>
        </p>
      </div>
    </div>
    </div>
  </section> */}





  <section id="hp-hero" className="hero bkgd-coconut " >
    {/* <div className='flex'> */}
      <div id="hero-left" className=''>
        <h1>Smaller budgets need smarter dollars</h1>
        <p>Create, manage, and analyze your display, Facebook, Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
        <p>
          <a className="cta" href="/pricing">Get Started</a>
          &nbsp;&nbsp;<a className="cta-alt" href="/contact">Get In Touch</a>
        </p>
      </div>
      <div id="hero-right"  style={{ backgroundImage: `url('${blueBlob}')`, }}>
        <img
          width="576"
          height="566"
          src={hero}
          loading="eager"
          alt=""
          srcSet={
            `${hero}?format=jpg&amp;auto=webp&amp;width=576,` +
            `${hero}?format=jpg&amp;auto=webp&amp;width=576&amp;dpr=1.5 1.5x,` +
            `${hero}?format=jpg&amp;auto=webp&amp;width=576&amp;dpr=2 2x`
          }
        />
      {/* </div> */}
      </div>
    </section>

  </>
);

export default QuoteCallout;
