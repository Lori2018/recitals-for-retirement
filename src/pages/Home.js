import React from "react";
import "../App.scss";
import Header from "../features/Header.js";
import Gallery from "../features/Gallery.js";
import Footer from "../features/Footer.js";
import { Row, Col, Container } from "react-bootstrap";
import strings from "../res/strings.js";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="home-page">
          <Header />
          <Row style={{ "margin-left": 0, "margin-right": 0 }}>
            <Col
              xl="2"
              lg="2"
              md="3"
              style={{ "padding-left": 0, "padding-right": 0 }}
            ></Col>
            <Col
              xl="10"
              lg="10"
              md="9"
              style={{ "padding-left": 0, "padding-right": 0 }}
            >
              <Container className="home-section-container">
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
          <Row style={{ "margin-left": 0, "margin-right": 0 }}>
            <Col
              xl="9.5"
              lg="9.5"
              md="8.5"
              style={{ "padding-left": 0, "padding-right": 0 }}
            >
              <Container className="home-section-container">
                <h2 className="content-block-title">Our Mission</h2>
                <p className="content-block-text">
                  {strings.homePage.ourMission}
                </p>
              </Container>
            </Col>
            <Col
              xl="2.5"
              lg="2.5"
              md="3.5"
              style={{ "padding-left": 0, "padding-right": 0 }}
            ></Col>
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
