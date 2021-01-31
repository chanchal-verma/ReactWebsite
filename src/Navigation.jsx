import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import {NavLink} from 'react-router-dom'
import CompassCalibrationIcon from "@material-ui/icons/CompassCalibration";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <section id="navbar">
      <div className="container-fluid nav-bg">
        <div className="row navbar">
          <div className="col-10 mx-auto">
              <div className="container-fluid p-0">
                <Navbar light expand="md">
                  <NavLink className="navbar-brand" to="/">
                    <h2>
                      <CompassCalibrationIcon style={{ fontSize: "50px" }} />
                      <text style={{ color: props.color }}>Techno</text>.
                      <span>LAB</span>
                    </h2>
                  </NavLink>
                  <NavbarToggler onClick={toggle} />
                  <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/"
                          >
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/About"
                          >
                            About
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="nav-link active"
                            aria-current="page"
                            to="/Service"
                          >
                            Service
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                           className="nav-link active"
                           aria-current="page"
                           to="/Contact"
                          >
                            Contact
                          </NavLink>
                        </NavItem>
                      {/* </ul> */}
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/js/src/collapse.js"
// import { NavLink } from "react-router-dom";
// import CompassCalibrationIcon from '@material-ui/icons/CompassCalibration';

// const Navbar = (props) => {
//   return (
//     <>
//     <section id="navbar">
//       <div className="container-fluid nav-bg">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             <nav className="navbar navbar-expand-lg py-3">
//               <div className="container-fluid p-0">
//                 <NavLink className="navbar-brand" to="/">
//                   <h2 >
//                     <CompassCalibrationIcon style={{fontSize : "50px"}}/>
//                   <text style={{color:props.color}}>Techno</text>.<span >LAB</span></h2>
//                 </NavLink>
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#navbarSupportedContent"
//                   aria-controls="navbarSupportedContent"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div
//                   className="collapse navbar-collapse"
//                   id="navbarSupportedContent"
//                 >
//                   <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                       <NavLink
//                         className="nav-link active"
//                         aria-current="page"
//                         to="/"
//                       >
//                         Home
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink
//                         className="nav-link active"
//                         aria-current="page"
//                         to="/About"
//                       >
//                         About
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink
//                         className="nav-link active"
//                         aria-current="page"
//                         to="/Service"
//                       >
//                         Service
//                       </NavLink>
//                     </li>
//                     <li className="nav-item">
//                       <NavLink
//                         className="nav-link active"
//                         aria-current="page"
//                         to="/Contact"
//                       >
//                         Contact
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//       </section>
//     </>
//   );
// };

// export default Navbar;
