import React, { useState } from "react";
import Navbar from "./Navbar";
import { Card2 } from "./Card2";
import { FeatureCard } from "./FeatureCard";
import { Card5 } from "./Card5";
import { Card } from "./Card";
import './counter.js'
import CoporateTraining from "./CoporateTraining";
// import './button.js'
import './Top.js'


export function Home() {

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

  const data2 = [
    {
      Icon: <i class="fa-solid fa-star fa-2xl" style={{ color: "rgb(29,161,242)" }}></i>,
      Head: '100% Placements',
      Text: " We provide Online Classes, Online Live Project Training, Corporate Training, web development course videos and articles.",
    },
    {
      Icon: <i class="fa-solid fa-crown fa-2xl" style={{ color: "rgb(29,161,242)" }}></i>,
      Head: 'Awarded',
      Text: " We provide Online Classes, Online Live Project Training, Corporate Training, web development course videos and articles.",
    },
    {
      Icon: <i class="fa-solid fa-medal fa-2xl" style={{ color: "rgb(29,161,242)" }}></i>,
      Head: 'Learn From Anywhere',
      Text: " We provide Online Classes, Online Live Project Training, Corporate Training, web development course videos and articles.",
    },
    {
      Icon: <i class="fa-solid fa-layer-group fa-2xl" style={{ color: "rgb(29,161,242)" }}></i>,
      Head: 'Top Instructor',
      Text: " We provide Online Classes, Online Live Project Training, Corporate Training, web development course videos and articles.",
    },
    {
      Icon: <i class="fa-solid fa-city fa-2xl" style={{ color: "rgb(29,161,242)" }}></i>,
      Head: 'Well Training Institute',
      Text: " We provide Online Classes, Online Live Project Training, Corporate Training, web development course videos and articles.",
    },
    {
      Icon: <i class="fa-solid fa-leaf fa-2xl" style={{ color: "rgb(29,161,242)" }}></i>,
      Head: 'LMS Platform',
      Text: " We provide Online Classes, Online Live Project Training, Corporate Training, web development course videos and articles.",
    },
  ];
  const car1 = [
    {
      Btn: <button className="btn p-2 w-25 my-1">.</button>,
      Head: 'Machine Learning With Python'
    },
    {
      Btn: <button className="btn btn-danger px-3 btn-sm fw-bold mb-3 w-25 my-1">New</button>,
      Head: 'Machine Learning With Python'
    },
    {
      Btn: <button className="btn p-2 w-25 my-1">.</button>,
      Head: 'Machine Learning With Python'
    },
  ];
  const card2 = [
    {
      Btn: <button className="btn btn-primary px-3 btn-sm fw-bold mb-3 w-25 my-1">Upcoming</button>,
      Head: 'Machine Learning With Python'
    },
    {
      Btn: <button className="btn p-2 w-25 my-1">.</button>,
      Head: 'Machine Learning With Python'
    },
    {
      Btn: <button className="btn btn-primary px-3 btn-sm fw-bold mb-3 w-25 my-1">Latest</button>,
      Head: 'Machine Learning With Python'
    },
  ];


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

  const indices = [];
  for (let i = 0; i < data.length; i++) {
    indices.push(i);
  }
  const [selectedCards, setSelectedCards] = useState(indices);

  // const [selectedCards, setSelectedCards] = useState([...Array(data.length).keys()]);


  const handleClick = (index) => {
    // console.log(index);
    setSelectedCards(index);
  }


  return (
    <>
      <Navbar />
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="row  Homecontainer">
                <div className="Info">

                  <div className=" col-md-4 col-sm-12 d-md-block d-none">

                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div className="Image">
                            <b className="fw-bold text-center text-light"
                              style={{ fontSize: "15px", position: 'absolute', paddingTop: '105px', paddingLeft: '47px' }}>
                              With <br /> Complete HandSome
                            </b>
                            <img src="Image/cloudImg-removebg-preview.png" alt="" className="img-fluid" width='50%' />
                          </div>
                        </div>
                        <div class="carousel-item ">
                          <div className="Image">
                            <b className="fw-bold text-center text-light"
                              style={{ fontSize: "18px", position: 'absolute', paddingTop: '100px', paddingLeft: '65px' }}>
                              Live <br /> Project Work
                            </b>
                            <img src="Image/cloudImg-removebg-preview.png" alt="" className="img-fluid" width='50%' />
                          </div>
                        </div>
                        <div class="carousel-item ">
                          <div className="Image">
                            <b className="fw-bold text-center text-light"
                              style={{ fontSize: "18px", position: 'absolute', paddingTop: '100px', paddingLeft: '60px' }}>
                              Get <br /> Your Dreem Job
                            </b>
                            <img src="Image/cloudImg-removebg-preview.png" alt="" className="img-fluid" width='50%' />
                          </div>
                        </div>
                      </div>
                    </div>


                    <h5 className="text-light fw-bold mx-5 my-3" style={{ fontVariant: "small-caps", textAlign: "left" }}>
                      Build Future Expertise Today With Popular Technology
                    </h5>
                    <button className="btn btn-danger p-2 w-50 alignts-item-ceter mx-5 my-5 fw-bold">
                      EXPLORE COURSES
                    </button>

                  </div>

                  <div className="col-md-4 col-sm-12 text-center">

                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" style={{ paddingTop: '110px' }}>

                      <div class="carousel-inner">
                        <div class="carousel-item active">

                          <h1 className="fw-bold text-light" style={{ fontSize: '45px' }}>
                            Your Awsome
                            <span className="text-danger"> React Course</span>
                          </h1>
                          <br />
                          <h4 className="fw-bold text-light text-left">
                            Job Oriented Industrail Training Program
                          </h4>

                        </div>
                        <div class="carousel-item " >
                          <h1 className="fw-bold text-light">
                            Your Awsome
                            <span className="text-danger"> AWS Course</span>
                          </h1>
                          <br />
                          <h4 className="fw-bold text-light text-left">
                            Job Oriented Industrail Training Program
                          </h4>

                        </div>
                        <div class="carousel-item ">
                          <h1 className="fw-bold text-light">
                            Your Awsome <span className="text-danger"> Full Stack Course</span>
                          </h1>
                          <br />
                          <h4 className="fw-bold text-light text-left">
                            Job Oriented Industrail Training Program
                          </h4>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >

      <section >
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-3 fw-bold my-4"
          >
            Popular Course For Your <span className="text-danger">Growth</span>
          </h1>
          <div className="about_bar">
            <div className="about_bar_progress"></div>
          </div>
        </center>
        <div className="container">
          <div className="col-md-12 ">
            <div className="row   text-center">
              <div className="col-md-12 my-3">
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <button
                      onClick={() => handleClick([0, 1, 2, 3, 4, 5])}
                      className="btn btn-primary fw-bold  w-50 my-2" >
                      All
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <button
                      onClick={() => handleClick([0, 2])}
                      className="btn btn-primary fw-bold  w-50 my-2">
                      Front End
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-12 ">
                    <button
                      onClick={() => handleClick([1, 4])}
                      className="btn btn-primary fw-bold w-50 my-2 p-2">
                      Cloud Computing
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <button
                      onClick={() => handleClick([2, 3])}
                      className="btn btn-primary fw-bold w-50 my-2">
                      UI / UX
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                {
                  data.map((val, id) => (
                    selectedCards.includes(id) && (
                      <Card2 Img={val.Img} Price={val.Price} Name={val.Name} Btn={val.Btn} key={id} />
                    )
                  ))
                }

              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section>
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-0 fw-bold my-4"
          >
            Interview Notes & E-Book For Your{" "}
            <span className="text-danger">Growth</span>
          </h1>
          <div className="about_bar">
            <div className="about_bar_progress"></div>
          </div>
        </center>

        <div className="container row">
          <div className="col-md-12">
            <div className="row d-flex justify-content-evenly">
              <div className="col-md-4  Other_Prod_Data my-3">
                <div
                  className="card shadow-lg Scard img-fluid w-100 d-block"
                  style={{ height: "480px", display: "block" }}
                >
                  <div className="card-header" style={{ height: "55%" }}>
                    <img
                      src="Image/NotesImg1.avif"
                      alt=""
                      className="img-fluid"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>

                  <div className="card-body p-3" style={{ height: "35%" }}>
                    <h4 className="fw-bold">Interview Notes</h4>
                    <i className="fa-solid fa-desktop"></i>{" "}
                    <span> Online / Offline</span>
                    <p>
                      <b className="text-dark fw-bold">Number Of Classes :</b>{" "}
                      <span>Aprox 100%</span> <br />
                      <b className="text-dark fw-bold">EnrollMent :</b>{" "}
                      <span>Started</span>
                    </p>
                    <i className="fa-solid fa-star GColor  ml-5"></i>
                    <i className="fa-solid fa-star GColor"></i>
                    <i className="fa-solid fa-star GColor"></i>
                    <i className="fa-solid fa-star GColor "></i>
                    <i className="fa-solid fa-star GColor "></i>
                    {/* <i className="fa-solid fa-star-half-stroke GColor "></i> */}
                  </div>

                  <div
                    className="card-footer p-2 d-flex justify-content-between"
                    style={{ height: "10%" }}
                  >
                    <p className="text-dark my-2 fw-bold mx-2 pt-0">
                      ₹ 1999 Only
                    </p>
                    <button
                      className="btn btn-primary fw-bold pt-1"
                      style={{ marginRight: "10px" }}
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4  Other_Prod_Data my-3">
                <div
                  className="card shadow-lg Scard"
                  style={{ height: "480px", display: "block" }}
                >
                  <div className="card-header" style={{ height: "55%" }}>
                    <img
                      src="Image/NotesImg2.avif"
                      alt=""
                      className="img-fluid"
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>

                  <div className="card-body p-3" style={{ height: "35%" }}>
                    <h4 className="fw-bold">E-Book Notes</h4>
                    <i className="fa-solid fa-desktop"></i>{" "}
                    <span> Online / Offline</span>
                    <p>
                      <b className="text-dark fw-bold">Number Of Classes :</b>{" "}
                      <span>Aprox 100%</span> <br />
                      <b className="text-dark fw-bold">EnrollMent :</b>{" "}
                      <span>Started</span>
                    </p>
                    <i className="fa-solid fa-star GColor  ml-5"></i>
                    <i className="fa-solid fa-star GColor"></i>
                    <i className="fa-solid fa-star GColor"></i>
                    <i className="fa-solid fa-star GColor "></i>
                    <i className="fa-solid fa-star-half-stroke GColor "></i>
                  </div>

                  <div
                    className="card-footer p-2 d-flex justify-content-between"
                    style={{ height: "10%" }}
                  >
                    <p className="text-dark my-2 fw-bold mx-2 pt-0">
                      ₹ 2999 Only
                    </p>
                    <button
                      className="btn btn-primary fw-bold pt-1"
                      style={{ marginRight: "10px" }}
                    >
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-3 fw-bold my-4"
          >
            Our Unique <span className="text-danger">Features</span>
          </h1>
          <div className="about_bar mb-3">
            <div className="about_bar_progress"></div>
          </div>
          <b>Working Data - Featured</b>
        </center>

        <div className="container">
          <div className="col-md-12">
            <div className="row">
              {data2.map((val) => {
                return (
                  <>
                    <FeatureCard
                      Icon={val.Icon}
                      Head={val.Head}
                      Text={val.Text} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <br /> <br />

      <section className="container my-5 mb-5">
        <center className="my-5">
          <h1
            style={{ fontVariant: "small-caps" }}
            className="pt-0 fw-bold my-4"
          >
            Our UpComing <span className="text-danger">Courses</span>
          </h1>
          <div className="about_bar">
            <div className="about_bar_progress"></div>
          </div>
        </center>
        <div className="Carousel_Body">

          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <div className="row">
                  {car1.map((val) => {
                    return (
                      <>
                        <Card5
                          Btn={val.Btn}
                          Head={val.Head}
                        />
                      </>
                    );
                  })}
                </div>

              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="row">
                  {card2.map((val) => {
                    return (
                      <>
                        <Card5
                          Btn={val.Btn}
                          Head={val.Head}
                        />
                      </>
                    );
                  })}
                </div>

              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>
      </section>

      <br /> <br />

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
      <br /> <br />
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

      {/* <section className="stats_counter my-5 ">
        <div className=" col-md-12">
          <div className="countdiv row" style={{ textAlign: 'center' }}>
            <div className="counter col-md-3 col-sm-5">
              <i className="fa-solid fa-users fa-xl p-4" style={{ color: 'rgb(29,161,242)', backgroundColor: 'white', borderRadius: '5px' }}></i>
              <span className="count fw-bold mt-2" data-target="350">350+</span>
              <h5 className="text-light">Enrolled Student</h5>
            </div>
            <div className="counter col-md-3 col-sm-5">
              <i className="fa-solid fa-building fa-xl p-4" style={{ color: 'rgb(29,161,242)', backgroundColor: 'white', borderRadius: '5px' }}></i>
              <span className="count fw-bold mt-2" data-target="500">500+</span>
              <h5 className="text-light">Place In Top MNC</h5>
            </div>
            <div className="counter col-md-3 col-sm-5">
              <i className="fa-solid fa-users fa-xl p-4" style={{ color: 'rgb(29,161,242)', backgroundColor: 'white', borderRadius: '5px' }}></i>
              <span className="count fw-bold mt-2" data-target="25">25</span>
              <h5 className="text-light">Tie Up Partner</h5>
            </div>
            <div className="counter col-md-3 col-sm-5">
              <i className="fa-solid fa-trophy fa-xl p-4" style={{ color: 'rgb(29,161,242)', backgroundColor: 'white', borderRadius: '5px' }}></i>
              <span className="count fw-bold mt-2" data-target="07">07</span>
              <h5 className="text-light">Awards Win</h5>
            </div>
          </div>
        </div>
      </section> */}

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

      <section className="my-5">
        <div className="container">
          <div className="col-md-12">
            <div className="row">

              <div className="col-md-5 col-sm-12">
                <div className="img text-center">
                  {/* <div className="ImgMain"> */}
                  <img src="Image/Mobile.png" alt="" style={{ borderRadius: '20px', height: '550px', width: '60%' }} />
                  {/* </div> */}

                </div>

              </div>
              <div className="col-md-7 col-sm-12">

                <h2 className="text-dark fw-bold my-5 mx-4" style={{ fontVariant: 'small-caps' }}>Most Trending <span className="text-danger"> Technology Platform</span>
                  <div className="about_bar mt-3 ms-0">
                    <div className="about_bar_progress"></div>
                  </div></h2>


                <h6 className="text-dark mx-4 fw-bold">Get The Take App Today  </h6>
                <h6 className="text-dark mx-4 " style={{ lineHeight: '30px' }}> We will send you a link open in your phone and download the app</h6>
                <div className="Form mx-4">
                  <input type="email" className="form-control py-3 w-50 my-4" placeholder="Enter Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <button className="btn  my-5 p-0 btn-sm" style={{ height: '50px', width: '150px', borderRadius: '10px' }}>
                    <img src="Image/Sub.png" height='100%' width='100%' alt="" style={{ borderRadius: '10px' }} /> </button>
                  <button className="btn mx-5 p-0 btn-sm" style={{ height: '50px', width: '150px', borderRadius: '10px' }}>
                    <img src="Image/Gp_Logo.webp" height='100%' width='100%' alt="" style={{ borderRadius: '10px' }} /> </button>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      <br /> <br />

      <section className="container my-5">
        <div className="col-md-12">
          <div className="row">

            <div className="col-md-5 tblImg text-center p-4">

              <h1 className="fw-bold pt-4" style={{ fontVariant: 'small-caps' }}>Employee And Corporate  <br />
                <span className="text-danger"> Training Tutorial</span></h1>

              <h6 className="fw-bold my-5 mb-5 mt-5">Leran Something New and build Your Carrer<br />
                From Anywhere In The World And Get Your Dream Job In Top MNC'S</h6>

              <center>

                <div class="mb-2 " style={{ marginTop: '140px' }}>
                  <button class="btn btn-danger text-light w-50 fw-bold">Request A Free Demo</button>
                </div>
              </center>

            </div>

            <div className="col-md-7 p-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>

              <div className="form form-control text-center">
                <h2 className="fw-bold text-center mt-3">Fill Your <span className="text-danger">Registration</span> </h2>

                <input className="mt-4 p-3 w-100" type="text" placeholder="Your Name" />
                <input className="mt-5 p-3" style={{ width: '49%' }} type="email" placeholder="Your Email" />
                <input className="mt-5 p-3 mx-1" style={{ width: '48.9%' }} type="number" placeholder="Your Number" />

                <div className=" mt-5">
                  <textarea name="Massage" id="user_mes"
                    placeholder="Massage" className="w-100"></textarea>
                </div>
                <div className=" mt-5 mb-5">
                  <textarea name="Comments" id="user_mes"
                    placeholder="Comments" className="w-100"></textarea>
                </div>

              </div>

            </div>
          </div>
        </div>

      </section>

      <footer style={{ height: '400px', backgroundColor: 'rgb(31,31,36)' }}>
        <div className="container-fluid ">


          <div className="col-md-12" style={{ color: 'gray' }}>
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <h4 className="text-light fw-bold mx-5 my-4">About <span style={{ color: 'gray' }}>Us</span> </h4>
                <h6 className="my-3 mx-5">Company</h6>
                <h6 className="my-3 mx-5">Team</h6>
                <h6 className="my-3 mx-5">Career</h6>
                <h6 className="my-3 mx-5">Graphic Dessign</h6>
                <h6 className="my-3 mx-5">Documentation</h6>

                <a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>
              </div>
              <div className="col-md-3 col-sm-12">
                <h4 className="text-light fw-bold mx-5 my-4">Usefull <span style={{ color: 'gray' }}>Links</span> </h4>
                <h6 className="my-3 mx-5">Maharashtra, 411038</h6>
                <h6 className="my-3 mx-5">Pune, Kothrud</h6>
                <h6 className="my-3 mx-5">Mumbai</h6>
                <h6 className="my-3 mx-5">Pimpri ChinchWad</h6>
              </div>
              <div className="col-md-3 col-sm-12">
                <h4 className="text-light fw-bold mx-5 my-4">Contact <span style={{ color: 'gray' }}>Info</span> </h4>
                <b className="fw-bold my-3 mx-5" ><i class="fa-solid fa-location-dot"></i> <span className="mx-3">Kothrud, Pune</span></b> <br /> <br />
                <b className="fw-bold my-3 mx-5"><i class="fa-solid fa-phone"></i> <span className="mx-3">97-636-588-64</span> </b>  <br /> <br />
                <b className="fw-bold my-3 mx-5"><i class="fa-solid fa-envelope"></i> <span className="mx-3">learnplatform@gmail.com</span> </b>
              </div>
              <div className="col-md-3 col-sm-12">
                <h4 className="text-light fw-bold my-4">Subscribe <span style={{ color: 'gray' }}>On Our News</span> </h4>
                <input type="email" placeholder="Email Address" className="color-light p-2 w-75" />
                <div>
                  <div className="incons d-flex my-3">
                    <div className="mt-3 mx-2 bg-light p-3"
                      style={{ height: '50px', width: '50px', borderRadius: '50%', border: ' 1px solid rgb(238, 238, 238)' }}>
                      <i className="fa-brands fa-twitter fa-xl" style={{ color: ' rgb(31,31,36)' }}></i>
                    </div>
                    <div className="mx-2 mt-3 bg-light"
                      style={{ height: '50px', width: '50px', borderRadius: '50%', padding: '14px', border: ' 1px solid rgb(238, 238, 238)' }}>
                      <i className="fa-brands fa-facebook fa-xl" style={{ color: ' rgb(31,31,36)' }}></i>
                    </div>
                    <div className="mx-2 mt-3 bg-light"
                      style={{ height: '50px', width: '50px', borderRadius: '50%', padding: '14px', border: ' 1px solid rgb(238, 238, 238)' }}>
                      <i className="fa-brands fa-instagram fa-xl" style={{ color: ' rgb(31,31,36)' }}></i>
                    </div>
                    <div className="mx-2 mt-3 bg-light"
                      style={{ height: '50px', width: '50px', borderRadius: '50%', padding: '14px', border: ' 1px solid rgb(238, 238, 238)' }}>
                      <i className="fa-brands fa-linkedin fa-xl" style={{ color: ' rgb(31,31,36)' }}></i>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <center>

            <div class="footerend" style={{ textAlignalign: 'center', color: 'rgb(238, 238, 238)' }}>
              <hr /> <br /> <br />
              <b style={{ marginTop: '50px !important' }}> <i class="fa-regular fa-copyright"></i> &nbsp;
                2015 - 2023 abc Private Limited . All Rights Reserved
              </b>
            </div>
          </center>
        </div>
      </footer>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank" rel="noreferrer">
        <i class="fa fa-whatsapp my-float"></i>
      </a>



      <button
        type="button"
        className="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

//  default Home
