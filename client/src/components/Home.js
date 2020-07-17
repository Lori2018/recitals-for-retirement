import React from "react";
import "../App.scss";
import Header from "../features/Header.js";
import Gallery from "../features/Gallery.js";
import Footer from "../features/Footer.js";
import { Row, Col, Container } from "react-bootstrap";
import strings from "../res/strings.js";
import NavBar from "../features/NavBar.js";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-page">
          <NavBar />

          <Header />
          <Row fluid style={{ "margin-left": 0, "margin-right": 0 }}>
            <Col md="3" style={{ "padding-left": 0, "padding-right": 0 }}></Col>
            <Col md="9" style={{ "padding-left": 0, "padding-right": 0 }}>
              <Container className="home-section-container section-float-right">
                <h2 className="content-block-title">Our Mission</h2>
                <p className="content-block-text">
                  {strings.homePage.ourMission}
                </p>
              </Container>
            </Col>
          </Row>
          <Row>
            <Gallery />
          </Row>
          <Row fluid style={{ "margin-left": 0, "margin-right": 0 }}>
            <Col md="9" style={{ "padding-left": 0, "padding-right": 0 }}>
              <Container className="home-section-container section-float-left">
                <h2 className="content-block-title">About Us</h2>
                <p className="content-block-text">{strings.homePage.aboutUs}</p>
              </Container>
            </Col>
            <Col md="3" style={{ "padding-left": 0, "padding-right": 0 }}></Col>
          </Row>
          <Row>
            <Footer />
          </Row>
        </div>
      </>
    );
  }
}

export default Home;
