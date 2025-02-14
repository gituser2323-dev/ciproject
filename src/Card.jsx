import React from 'react'
import './App.css'

export const Card = (props) => {
    const { Img, Title, Text } = props;
    return (
        <>

            <div className="col-md-4 my-2">
                <div className="container d-flex">
                    <div className="card text-center" style={{ borderRadius: '10px' }}>
                        <img src={Img} alt='' class="card-img-top" style={{ borderRadius: '10px 10px 0px 0px' }} />
                        <div className="card-body mt-2">
                            <h5 className="card-title">{Title}</h5>
                            <p className="card-text ">{Text}</p>
                            <a href="/" className="btn btn-outline-danger my-3">Register</a>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
