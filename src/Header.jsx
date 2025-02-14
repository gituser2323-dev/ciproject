import React from "react";

const Header = () => {
    return (
        <>

            <section id="Header" className=" text-light fw-blod container-fluid p-2" style={{ backgroundColor: 'rgb(35,47,62)' }}>
                <div className="col-md-12">
                    <div className="row">
                        <div className=" col-md-9 col-9">
                            <div className="row">


                                <b title="Kothrud Pune 411038, India" className="col-md-4 col-sm-12 pt-2"><i className="fa-solid fa-phone" /> &nbsp; &nbsp;97-636-589-62</b>
                                <b title="Kothrud Pune 411038, India" className="col-md-4 col-sm-12 pt-2"><i className="fa-solid fa-location-dot" /> &nbsp;&nbsp;Kothrud Pune 411038, India</b>
                                <b title="info.dento@gamil.com" className="col-md-4 col-sm-12 pt-2"><i className="fa-solid fa-envelope" />&nbsp;&nbsp;info.dento@gamil.com</b>

                            </div>
                        </div>

                        <div className=" col-md-3 col-3">
                            <div className="row">
                                <i className="fa col-md-2 fa-facebook  text-light  pt-2" title="Facebook" />
                                <i className="fa col-md-2 fa-instagram text-light  pt-2 " title="instagram" />
                                <i className="fa col-md-2 fa-twitter   text-light  pt-2 " title="Twitter" />
                                <i className="fa col-md-2 fa-linkedin  text-light  pt-2" title="linkedin" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Header;
