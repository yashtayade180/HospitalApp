import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./BloodBag.css";

const BloodBag = () => {
  return (
    <div>
      <div>
        <Header />
        <Sidebar />
      </div>
      <div className="mt-5">
        <h1 className="head">Blood Bags</h1>
        <div
          classname="container ml-5"
          style={{ padding: 30, overflow: "auto" }}
        >
          <div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <br></br>
          <table class="table table-striped">
            <thead>
              <tr class="table-dark">
                <th scope="col">#</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Qty</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>A+</td>
                <td>18</td>

                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>B+</td>
                <td>25</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>AB+</td>
                <td>9</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>O+</td>
                <td>12</td>
                <td className="d-flex justify-content-between">
                  <button className="btn btn-success">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BloodBag;
