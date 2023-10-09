import React from "react";
import { Link } from "react-router-dom";
import { FaTabletAlt,FaMobileAlt,FaLaptop} from 'react-icons/fa';

const Nav = ({ title,search,setSearch }) => {
  return (
    <main>
      <div className="col-12 w-100 container-fluid navpage border">
        <div className="row">
          <div className="title col-3 text-center mt-3">
            <h3>{title}</h3>
          </div>
          <div className="content col-4 mt-2">
            <ul className="nav col-12 text-center navul">
              <li className="nav-item col-12 col-lg-4 ">
                <Link className="nav-link active " to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item col-12 col-lg-4 ">
                <Link className="nav-link" to="newPost">
                  NewPost
                </Link>
              </li>
              <li className="nav-item col-12 col-lg-4 ">
                <Link className="nav-link " to="about">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="search col-3 mx-auto mt-2 ">
            <form className="d-flex">
              <input
                className="form-control"
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                placeholder="Search"
              />
            </form>
          </div>
        <div className="col-2 text-center mt-2 d-flex justify-content-center text-warning">
         
          <FaLaptop size={35} className="d-lg-block d-none" />
          <FaTabletAlt size={35} className="d-md-block d-lg-none d-none " />
          <FaMobileAlt size={35} className="d-xs-block d-sm-block d-md-none" />
        </div>
        </div>
      </div>
    </main>
  );
};

export default Nav;
