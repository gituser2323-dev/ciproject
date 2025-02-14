import React from 'react'

export const Card2 = (props) => {
    const { Img, Name, Price,Btn } = props;
    return (
        <>
            <div className="col-md-4 col-sm-12 my-4">
                <div className="card shadow-lg Scard backgroundEffect"  style={{width:'23rem'}}>

                    <div className="card-header p-0 " >
                    {Btn}
                        <img src={Img} alt="" className='img-fluid w-100 d-block'  style={{height:'260px'}}/>
                    </div>

                    <div className="card-body " >
                        <h4 className="fw-bold">{Name}</h4>
                        <i className="fa-solid fa-desktop "></i> <span className='ms-2'> Online / Offline</span>
                        <p className='my-1'><b className="text-dark fw-bold">Number Of Classes :</b> <span>Aprox 70%</span> <br />
                            <b className="text-dark fw-bold">EnrollMent :</b> <span>Started</span></p>
                        <i className="fa-solid fa-star GColor  ml-5" ></i>
                        <i className="fa-solid fa-star GColor" ></i>
                        <i className="fa-solid fa-star GColor" ></i>
                        <i className="fa-solid fa-star GColor "></i>
                        <i className="fa-solid fa-star-half-stroke GColor "></i>
                    </div>

                    <div className="card-footer d-flex justify-content-between">
                        <p className="text-dark my-2 fw-bold mx-2 pt-0">₹ {Price} Only</p>
                        <button className="btn btn-sm btn-primary fw-bold px-3 my-0" style={{ marginRight: '10px' }}>VIEW DETAILS</button>
                    </div>

                </div>
            </div>

        </>
    )
}
