import React from "react";
import { Container } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="footer-container">
          <p className="footer-text">
            Designed and developed by{" "}
            <a className="lori-brown" href="https://github.com/Lori2018">
              Lori Brown
            </a>
          </p>
        </Container>
      </>
    );
  }
}

export default Footer;
