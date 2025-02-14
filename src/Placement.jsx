import React from 'react'
import Navbar from './Navbar'

export const Placement = () => {
  return (
    <>
    <Navbar />

      <section>
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-0 fw-bold my-4"
          >
            Our Brand <span className="text-danger">Partners And Training From</span>
          </h1>
          <div className="about_bar">
            <div className="about_bar_progress"></div>
          </div>

        </center>

        {/* <Slider/> */}
        <div className="container p-4">
          <marquee width="100%" direction="left" height="100px">
            <img src="Image/accenture.png" title=""
              className="marquee mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/amazon.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '40px' }} />
            <img src="Image/Citi_logo.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/JP_MOr.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/KPMG.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/Myntra.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/polygon.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/Pwc.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/Target.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '50px' }} />
            <img src="Image/TechMH.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '40px' }} />
            <img src="Image/Vedantu.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '45px' }} />
            <img src="Image/upgrad-logo.svg" title=""
              className="marqueelogo mx-3" alt='' style={{ height: '50px' }} />
            <img src="Image/unitedlex.png" title=""
              className="marqueelogo mx-5" alt='' style={{ height: '45px' }} />
            <img src="Image/novartis.png" title=""
              className="marqueelogo" alt='' style={{ height: '50px' }} />

          </marquee>
        </div>
      </section>

      <section className="my-5">
        <div className="text-center my-5">
          <h5 className="fw-bold my-5">Learn From the Top 1% Instructors & Mentors From Leading Tech Company</h5>
          <img src="Image/accenture.png" title=""
            className=" mx-5 my-5" alt='' style={{ height: '50px' }} />
          <img src="Image/amazon.png" title=""
            className=" mx-5 my-5" alt='' style={{ height: '40px' }} />
          <img src="Image/JP_MOr.png" title=""
            className=" mx-5 my-5" alt='' style={{ height: '50px' }} />
          <img src="Image/KPMG.png" title=""
            className=" mx-5 my-5" alt='' style={{ height: '50px' }} />
          <img src="Image/Myntra.png" title=""
            className=" mx-5 my-5" alt='' style={{ height: '50px' }} />
        </div>

      </section>

    </>
  )
}


