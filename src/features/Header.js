import React from "react";
import "../App.scss";

import { Row, Col } from "react-bootstrap";
import images from "../assets/violin-silhouette.jpg";

class Header extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col lg="8" md="6" sm="6">
            <Row>
              <h1 className="org-description-name-header">
                Recitals for Retirement
              </h1>
            </Row>
            <Row>
              <a href="/explore">
                <button className="explore-button">
                  <span className="explore-button-text">Explore</span>
                </button>
              </a>
            </Row>
          </Col>
          <Col>
            <img className="violin-silhouette-img" src={images} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
