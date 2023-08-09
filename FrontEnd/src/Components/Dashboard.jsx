import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Nav from "./templates/Nav";
import Menu from "./templates/Menu";
import Footer from "./templates/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function dashboard() {
  //state user
  const [user, setUser] = useState({});

  //define history
  const navigate = useNavigate();

  //token
  const token = localStorage.getItem("token");

  //function "fetchData"
  const fetchData = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch user from Rest API
    await axios.get("http://localhost:8000/api/user").then((response) => {
      //set response user to state
      setUser(response.data);
    });
  };

  //hook useEffect
  useEffect(() => {
    //check token empty
    if (!token) {
      //redirect login page
      navigate("/");
    }

    //call function "fetchData"
    fetchData();
  }, []);

  //function logout
  const logoutHanlder = async () => {
    //set axios header dengan type Authorization + Bearer token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    //fetch Rest API
    await axios.post("http://localhost:8000/api/logout").then(() => {
      //remove token from localStorage
      localStorage.removeItem("token");

      //redirect halaman login
      navigate("/");
    });
  };

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
                      <h3 className="font-weight-bold">Selamat Datang {user.name}</h3>
                    
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
                        <p className="card-title">WELCOME TO Dashboard</p>
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

export default dashboard;
