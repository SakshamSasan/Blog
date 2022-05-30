import React from 'react';
import{Link} from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
        <div className="container-fluid">
          <h1 className="inner-vintage">Bloggy</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="my-3" style={{color:'white'}}><i className="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse pt-lg-2 d-lg-flex justify-content-lg-end" id="navbarSupportedContent">
            <ul className="nav-list">
               <li className="d-lg-inline-block my-3 my-lg-0 me-lg-3">
                <Link className="spa-link" to="/Blog/create">Create Post</Link>
              </li>
              <li className="d-lg-inline-block my-3 my-lg-0 mx-lg-4">
                <Link to="/Blog" aria-current="page" className="spa-link">Home</Link>
              </li>
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    );
}
export default NavBar

