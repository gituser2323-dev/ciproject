import React from 'react'

export const FeatureCard = (props) => {
    const { Text,Icon ,Head } = props;
    return (
        <>
            <div className="col-md-4  Other_Prod_Data my-3">
                <div className="card shadow-lg Scard" >

                    <div className="card-body d-flex">

                        <div className="icon d-flex justify-content-ceter align-items-start pt-4 mx-3" >
                            {Icon}
                        </div>

                        <div className="text ">
                        <h5 className="fw-bold p-1" >
                            {Head}
                        </h5>
                        <p>{Text}</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
