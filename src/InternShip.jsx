import React from 'react'
import { Card } from './Card'
import Navbar from './Navbar';

export const InternShip = () => {

  const car2 = [
    {
      Img: "Image/Img1.jpeg",
      Title: "6th Sept | Wed | 7:30 PM ",
      Text: "Unlocking New Horizons: How an Online MBA Can Elevate Your Professional Journey.",
    },
    {
      Img: "Image/Img2.jpeg",
      Title: "11th Sept | Mon | 7:30 PM  ",
      Text: "A step by step guide for a smooth transition into Data Science.",
    },
    {
      Img: "Image/Img3.jpeg",
      Title: "12th Sept | Tues | 7:30 PM  ",
      Text: "It’s hard to choose between the two. But it won’t remain this way after this masterclass.",
    },
  ];

  const car3 = [
    {
      Img: "Image/Img4.jpeg",
      Title: "13th Sept | Wed | 7:30 PM  ",
      Text: "Get your queries answered regarding the different career trajectories with a Doctorate degree.",
    },
    {
      Img: "Image/Img5.jpeg",
      Title: "14th Sept | Thurs | 7:30 PM  ",
      Text: "Hear from the leader in innovation about acceptance of online MBA in corporates.",
    },
    {
      Img: "Image/Img6.jpeg",
      Title: "10th Sept | Sun | 11:00 AM ",
      Text: " Land your Dream Job in DevOps. Get hands-on training and real-time insights to empower your DevOps journey.",
    },

  ];

  return (
    <>
    <Navbar />
      <section id="scheme" className=" mt-5" style={{ zIndex: '-1' }}>
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-0 fw-bold my-4"
          >
            Our Professional  <span className="text-danger">Scheme</span>
          </h1>
          <div className="about_bar">
            <div className="about_bar_progress"></div>
          </div>
        </center>

        <div className="Carousel_Body container">

          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">

                <div className="row">
                  {
                    car2.map((val) => {
                      return (
                        <>
                          <Card
                            Img={val.Img}
                            Title={val.Title}
                            Text={val.Text}

                          />
                        </>
                      )
                    }
                    )
                  }
                </div>

              </div>
              <div class="carousel-item">

                <div className="row">
                  {
                    car3.map((val) => {
                      return (
                        <>
                          <Card
                            Img={val.Img}
                            Title={val.Title}
                            Text={val.Text}

                          />
                        </>
                      )
                    }
                    )
                  }
                </div>

              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden ">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </section>
    </>
  )
}
