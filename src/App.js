import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import AddLoan from "./components/add-loan.component";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/loans" className="navbar-brand">
            SumBank
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/loan"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<LoanList />} />
            <Route path="/loan" element={<LoanList />} />
            <Route path="/add" element={<AddLoan />} />
            <Route path="/loan/:id" element={<Loan />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;