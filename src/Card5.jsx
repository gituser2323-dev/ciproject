import React from 'react'
import './App.css'

export const Card5 = (props) => {
    const { Head ,Btn } = props;
    return (
        <>

            <div className="col-md-4 p-0 my-2"  style={{ borderRadius: '10px 10px 0px 0px' }}>
                <div className="container" >
                    {Btn}
                <div className="card" style={{ borderRadius: '2px solid black' }}>
                    <div className="card-body mt-1" >
                        <h5 className="card-title fw-bold" style={{borderRadius:'10px solid black'}}>{Head}</h5>
                        <p className="card-text pt-1">
                            <i className="fa-solid fa-location-dot"></i> <span> Online Mode</span>
                            
                        </p>
                        <p>
                        <i className="fa-solid fa-star GColor  ml-5" ></i>
                            <i className="fa-solid fa-star GColor" ></i>
                            <i className="fa-solid fa-star GColor" ></i>
                            <i className="fa-solid fa-star GColor "></i>
                            <i className="fa-solid fa-star-half-stroke GColor "></i>
                            
                        </p>
                        <b className='pt-0'>₹ 8999 Only</b>
                        
                          
                        
                    </div>
                    </div>
                </div>

            </div>


        </>
    )
}
