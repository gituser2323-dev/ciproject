import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <>      
            {/* <Header /> */}
            <nav id="Navbar" className="navbar navbar-expand-lg navbar-light bg-light p-3 sticky">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="Image/Logo.png" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <NavLink className="nav-link dropdown-toggle fw-bold" to="/allcources" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    All Courses
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/">UI/UX</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/"> Web Design</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/"> React</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/"> Fornt End</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/"> Python</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/"> Redux</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/freeClass" >Free Mentor Class</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/CoporateTraining" >Corporate Training</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/InternShip">InternShip</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active fw-bold" aria-current="page" to="/Review">Reviews</NavLink>
                            </li>
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link active fw-bold" smooth spy to="/Placement" aria-current="page" >Placement</NavLink>
                            </li>
                        </ul>

                        <button className=" btn btn-outline-primary mx-lg-2 fw-bold " type="submit">Login / Sign Up</button>
                        <button className=" btn btn-primary fw-bold mx-1 my-3" type="submit">Get Started Free</button>
                   
                    </div>
                   
                </div>
            </nav>
        </>
    )
}
export default Navbar;
