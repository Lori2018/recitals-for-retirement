import React from "react";
import { Row, Col } from "react-bootstrap";
import NavBar from "../features/NavBar.js";
import Footer from "../features/Footer.js";
import "../custom.scss";

class GetInvolved extends React.Component {
  render() {
    return (
      <>
        <Row>
          <NavBar />
          <Col md="2"></Col>
          <Col md="6">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeBw0r9browJRAhQ1I-Ys56bEjLktq4ehHN_akWih1AtSZMOQ/viewform?embedded=true"
              width="1000"
              height="2550"
              frameborder="0"
              // marginheight="0"
              // marginwidth="0"
              scrolling="no"
              allowFullScreen
            >
              Loading Google Form…
            </iframe>
          </Col>
          <Col md="3"></Col>
          <Footer />
        </Row>
      </>
    );
  }
}

export default GetInvolved;
