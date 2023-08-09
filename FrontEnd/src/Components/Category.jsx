import React from "react";
import { Link } from "react-router-dom";
import Footer from "./templates/Footer";
import Menu from "./templates/Menu";
import Nav from "./templates/Nav";

function Category() {
  return (
    <div>
      <div className="container-scroller">
        <Nav />

        <div className="container-fluid page-body-wrapper">
          <div className="theme-setting-wrapper"></div>

          <Menu />

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-md-12 grid-margin">
                  <div className="row">
                    <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                      <h3 className="font-weight-bold">Selamat Datang WzMyThx</h3>
                      <h6 className="font-weight-normal mb-0">
                        Selamat Datang Di OnlineShop{" "}
                        {/* <span className="text-primary">3 unread alerts!</span> */}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="card-title">WELCOME TO Category</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;