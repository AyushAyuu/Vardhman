import React from "react";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-lg container-md-fluid">
          <div className="d-flex justify-content-center">
            <img src="./src/assets/images/logo.png" alt="" />
            <h4 className="my-auto">वर्धमान फोटोकॉपी</h4>
          </div>

          <div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-warning " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
