


import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import SIGNUP from "./SIGNUP.jpg";
import LoginBg from "./LoginBg.jpg";
import Logo from "./Logo.png";


function SignUP()
{
  return (
    <div
    style={{
      backgroundImage: `url(${LoginBg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: 780,
      backgroundPosition: "",
    }}
  >
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <CardGroup>
            <Card
              className="Bootstrap-Card"
              style={{ width: "5rem", marginTop: 140 }}
            >
              <img
                style={{ height: 570 }}
                src={SIGNUP}
               
              />
            </Card>

            <Card
              className="Bootstrap-Card"
              style={{
                width: "5rem",
                marginTop: 140,
                backgroundColor: "#f0f8ff",
              }}
            >
              <Card.Body>
                <Row>
                  <Col xs={5}></Col>
                  <Col>
                  <img
                        src={Logo}
                        style={{
                          width: "90px",

                          height: "auto",
                          verticalAlign: "middle",
                        }}
                      />
                  </Col>
                </Row>
                <Card.Title>
                  <h2
                    style={{
                      marginTop: 30,
                      WebkitTextStrokeColor: "black",
                      WebkitTextStrokeWidth: "2px",
                      color: "white",
                      fontWeight: 800,
                      textAlign: "center",
                    }}
                  >
                   Sign Up
                  </h2>
                </Card.Title>

                <Card.Text>
                  <Form>

                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="User Name" />
                      </Form.Group>
                      </Row>

                      <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Row>

                    <Row className="mb-3">
                      <Button href="/Dashboard" variant="primary">
                        {" "}
                        Sign Up{" "}
                      </Button>{" "}
                    </Row>

                  </Form>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="formGridAlredyHaveAccount">
                      <small className="text-muted">
                        <Form.Label style={{ marginLeft: 250 }}>
                          Alredy have an account !
                        </Form.Label>{" "}
                      </small>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Form.Group as={Col} controlId="formGridSignUp">
                      <small className="text-muted">
                        <a href="/Login" style={{ marginLeft: 280 }}>
                          SIGN IN NOW
                        </a>
                      </small>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default SignUP;

















/*
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css";
import signImage from './sign.jpg';
import snupImage from './snup.jpg';


const AuthForm = ({ authMode, onModeChange }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <img
          alt="This will Take a while to load"
          className="float-start auth-image"
          src={authMode === "signin" ? signImage : snupImage}
        />

        <div className="float-end Auth-form-content">
          <h2 className="mt-5">
            <b>Experience the Beauty of Nature</b>
          </h2>
          <br />
          <h3 className="Auth-form-title">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>
          <div className="text-center">
            {authMode === "signin" ? (
              <>
                Not registered yet?{" "}
                <span className="link-primary" onClick={() => onModeChange("signup")}>
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already registered?{" "}
                <span className="link-primary" onClick={() => onModeChange("signin")}>
                  Sign In
                </span>
              </>
            )}
          </div>
          {authMode === "signup" && (
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your full name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              {authMode === "signin" ? "Sign In" : "Sign Up"}
            </button>
          </div>
          {authMode === "signin" && (
            <p className="text-center mt-2">
              Forgot <span className="link-primary">password?</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default function Signup() {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = (mode) => {
    setAuthMode(mode);
  };

  return <AuthForm authMode={authMode} onModeChange={changeAuthMode} />;
}

*/
