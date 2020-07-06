import React from "react";
import "../App.scss";
import { Container, Row, Col, Button } from "react-bootstrap";

class Gallery extends React.Component {
  render() {
    return (
      <>
        <Container fluid className="gallery-container">
          <div className="gallery-border">
            <Row>
              <Col md={{ span: 2, order: 1, offset: 3 }}>
                <img
                  className="grid-img left-top"
                  src="https://images.pexels.com/photos/4088786/pexels-photo-4088786.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <img
                  className="grid-img left-mid"
                  src="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <img
                  className="grid-img left-bot"
                  src="https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Col>
              <Col md={{ span: 2, order: 2, offset: 0.5 }}>
                <img
                  className="grid-img mid-top"
                  src="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <img
                  className="grid-img mid-mid"
                  src="https://images.pexels.com/photos/210854/pexels-photo-210854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <img
                  className="grid-img mid-bot"
                  src="https://images.pexels.com/photos/2269739/pexels-photo-2269739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Col>
              <Col md={{ span: 2, order: 3, offset: 0.5 }}>
                <img
                  className="grid-img right-top"
                  src="https://images.pexels.com/photos/752535/pexels-photo-752535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <img
                  className="grid-img right-mid"
                  src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <img
                  className="grid-img right-bot"
                  src="https://images.pexels.com/photos/2228466/pexels-photo-2228466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
  }
}

export default Gallery;
