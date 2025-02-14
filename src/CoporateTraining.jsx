import React from 'react'
import { Card2 } from './Card2';
import Navbar from './Navbar';

export default function CoporateTraining() {
  const data = [
    {
      Img: "Image/card1.jpg",
      Name: "Full Stack Web Devloper",
      Price: "9999",
      Star: "fa-solid fa-star-half-stroke",
      Btn: <button className='btn btn-sm btn-danger fw-bold' style={{ position: 'absolute', top: '210px', left: '15px' }}>Most Popular</button>
    },
    {
      Img: "Image/card1.jpg",
      Name: "Mern Stack Web Devloper",
      Price: "7999",
      Star: "fa-solid fa-star",
      Btn: <button className='btn btn-sm btn-dark fw-bold' style={{ position: 'absolute', top: '210px', left: '15px' }}>Most Latest</button>
    },
    {
      Img: "Image/card3.avif",
      Name: "Front End Developer",
      Price: "8999",

    },
    {
      Img: "Image/card4.avif",
      Name: "UI / UX Developer",
      Price: "5999",
      Btn: <button className='btn btn-sm btn-danger fw-bold' style={{ position: 'absolute', top: '210px', left: '15px' }}>UpComing</button>
    },
    {
      Img: "Image/card7.avif",
      Name: "Cloud Computing Dev",
      Price: "6999",
    },
    {
      Img: "Image/card6.avif",
      Name: "Microsoft Azure Devloper",
      Price: "4999",
      Btn: <button className='btn btn-sm btn-primary fw-bold' style={{ position: 'absolute', top: '210px', left: '15px' }}>Most Trending</button>
    },
  ];
  return (
    <>
    <Navbar />
      <section>
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-3 fw-bold my-4"
          >
            Recording Courses For Your{" "}
            <span className="text-danger">Growth</span>
          </h1>
          <div className="about_bar">
            <div className="about_bar_progress"></div>
          </div>
        </center>

        <div className="container">
          <div className="col-md-12">
            <div className="row">
              {data.map((val) => {
                return (
                  <>
                    <Card2 Img={val.Img} Price={val.Price} Name={val.Name} Btn={val.Btn} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

