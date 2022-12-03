import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SearchArea from "./SearchArea";

function Home() {
  return (
    <Container style={{ height: "100vh" }}>
      <Row>
        <Col className="mt-4">
          <SearchArea />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
