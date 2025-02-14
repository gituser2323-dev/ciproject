import React from 'react'
import { FeatureCard } from './FeatureCard';
import Navbar from './Navbar';

export const Review = () => {
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
  return (
    <>
    <Navbar />
      <section >
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
    </>
  )
}
