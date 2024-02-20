import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Layout from "../Layout/Layout";

class Login extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <div>
          <h1>Login Page</h1>
        </div>
      </Layout>
    );
  }
}
export default Login;
