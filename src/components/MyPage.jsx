import { Col, Container, Row } from "react-bootstrap";
import MyAside from "./MyAside";
import MyMain from "./MyMain";
import Player from "./Player";

const MyPage = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={3} lg={3} className="colonna-aside">
            <MyAside />
          </Col>
          <Col xs={12} md={9} lg={9}>
            <MyMain />
          </Col>
        </Row>
        <Row>
          <Player />
        </Row>
      </Container>
    </>
  );
};
export default MyPage;
