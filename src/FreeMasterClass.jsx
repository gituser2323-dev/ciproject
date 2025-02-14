import React from 'react'
import { Card } from './Card';
import { useNavigate } from 'react-router-dom';


export const FreeMasterClass = (props) => {

  var nav = useNavigate();

  function GoHome() {
    nav('/');
  }

  const data = [
    {
      Img: "Image/Img1.jpeg",
      Title: "6th Sept | Wed | 7:30 PM ",
      Text: "Unlocking New Horizons: How an Online MBA Can Elevate Your Professional Journey."
    },
    {
      Img: "Image/Img2.jpeg",
      Title: "11th Sept | Mon | 7:30 PM  ",
      Text: "A step by step guide for a smooth transition into Data Science."
    },
    {
      Img: "Image/Img3.jpeg",
      Title: "12th Sept | Tues | 7:30 PM  ",
      Text: "It’s hard to choose between the two. But it won’t remain this way after this masterclass."
    },


  ]
  const data1 = [
    {
      Img: "Image/Img4.jpeg",
      Title: "13th Sept | Wed | 7:30 PM  ",
      Text: "Get your queries answered regarding the different career trajectories with a Doctorate degree."
    },
    {
      Img: "Image/Img5.jpeg",
      Title: "14th Sept | Thurs | 7:30 PM  ",
      Text: "Hear from the leader in innovation about acceptance of online MBA in corporates."
    },
    {
      Img: "Image/Img6.jpeg",
      Title: "10th Sept | Sun | 11:00 AM ",
      Text: " Land your Dream Job in DevOps. Get hands-on training and real-time insights to empower your DevOps journey."
    },

  ]
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="Image/Logo.png" alt="" onClick={() => GoHome()} />
          </a>
          <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
            <span className="navbar-hrefggler-icon"></span>
          </buthrefn>
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
              <li className="nav-item dropdown mx-2">

                <a className="nav-link dropdown-toggle fw-bold btn btn-danger" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">UI/UX</a></li>
                  <li><a className="dropdown-item" href="/"> Web Design</a></li>
                  <li><a className="dropdown-item" href="/"> React</a></li>
                  <li><a className="dropdown-item" href="/"> Fornt End</a></li>
                  <li><a className="dropdown-item" href="/"> Python</a></li>
                  <li><a className="dropdown-item" href="/"> Redux</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link active fw-bold" aria-current="page" href="/FreeMasterClass">REFER AND EARN</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active fw-bold" aria-current="page" href="/">STUDY ABROAD</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link active fw-bold" aria-current="page" href="/">FREE MASTERCLASS</a>
              </li>
              <li className="nav-item dropdown mx-2">

                <a className="nav-link dropdown-toggle fw-bold " href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  MORE
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Careers at upGrad</a></li>
                  <li><a className="dropdown-item" href="/"> Hire From upGrad</a></li>
                  <li><a className="dropdown-item" href="/"> upGrad from Business</a></li>
                  <li><a className="dropdown-item" href="/"> upGrad Blog</a></li>
                  <li><a className="dropdown-item" href="/"> Resources</a></li>
                  <li><a className="dropdown-item" href="/"> Experience Center</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>

              </li>
            </ul>

            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}

          </div>
          <div className="button d-flex">
            <buthrefn className=" btn btn-danger mx-3" type="submit"> Sign Up</buthrefn>
            {/* <buthrefn className=" btn btn-primary " type="submit">Get Started Free</buthrefn> */}
          </div>
        </div>
      </nav>

      <section className='container-fluid '>
        <div className="col-md-12 free_Card">
          <div className="row Info">
            <h1 className='text-light my-5 col-sm-12 col-md-12 pt-5'>LIVE LEARNING FOR CAREER GROWTH</h1>

            <b className='text-light col-12 col-md-12 my-2'> Are you someone who is - Feeling stuck in your job? Ambitious to continue learning? Not sure what’s
              next for you in your <br /> career? Our FREE masterclasses with leading industry leaders is exactly what you need!</b>
            <br />

            <button className='btn btn-danger p-3 my-4 col-md-3 col-sm-12 fw-bold'>REGISTOR NOW</button>

            <div className="col-md-12">
              <div className="row">
                <div className="container bg-;ight">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-3col-sm-12">
                      <h5 className='fw-bold' >FREE Registration</h5>
                      </div>
                      <div className="col-md-3col-sm-12"></div>
                      <div className="col-md-3col-sm-12"></div>
                      <div className="col-md-3col-sm-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>

      {/* <section className='text-center'>
        <div className="Incontainer text-center" >
          <div className="Info">
            <p className=' mt-5'>
              <h1 className='text-light my-5'>LIVE LEARNING FOR CAREER GROWTH</h1>

              <b className='text-light '> Are you someone who is - Feeling stuck in your job? Ambitious to continue learning? Not sure what’s
                next for you in your <br /> career? Our FREE masterclasses with leading industry leaders is exactly what you need!</b>
              <br />

              <button className='btn btn-danger p-3 w-25 aligents-item-ceter my-5'>REGISTOR NOW</button>
              <div className="row text-center ">
                <div className="box d-flex justify-content-between align-content-center text-dark bg-light p-4 ">
                  <h5 className='col-md-3 col-sm-12' >FREE Registration</h5>
                    
                  <h5 className='col-md-3 col-sm-12' >Live Hand-On Learning</h5>
                  <h5 className='col-md-3 col-sm-12' >1-1 Career Counselling</h5>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section> */}

      <section className="Carousel_Box">
        <div className='Carousel_Heading d-flex justify-content-center align-content-center'>
          <h1 className='fw-bold text-dark text-center my-3'>FreeMasterClass</h1>
        </div>
        <div className="Carousel_Body">

          <div className="container">
            <div id="carouselExampleCaptions" class="carousel slide carousel-dark " data-bs-ride=" carousel">

              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div className="carousel-inner ">
                  <div class="carousel-item active">
                    <div className="row">
                      {
                        data.map((val) => {
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
                        data1.map((val) => {
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

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="Carousel_Footer text-center">
          <button className='btn btn-danger fw-bold text-light my-4 p-3'>VIEW OUR MASTERCLASES</button>
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
              <h5 style={{ paddingTop: '30px' }}> <i class="fa-regular fa-copyright"></i> Copyright <strong>
                Yummy.</strong> All Rights Reserved </h5>
              <b> Designed by Sourabh</b>
            </div>
          </center>
        </div>
      </footer>

    </>
  )
}

//  default FreeMasterClass