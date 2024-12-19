import { Container } from "react-bootstrap";
import MyCategoryRow from "./MyCategoryRow";

const MyMain = () => {
  return (
    <>
      <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </div>
      <Container fluid className="songSection">
        <MyCategoryRow query="Sia" />
        <MyCategoryRow query="Katy Perry" />
        <MyCategoryRow query="Eminem" />
        <MyCategoryRow query="Bastille" />
        <MyCategoryRow query="Mannarino" />
      </Container>
    </>
  );
};
export default MyMain;
