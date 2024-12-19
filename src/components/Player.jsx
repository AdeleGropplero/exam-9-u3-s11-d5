import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { likedSongs, removeLikedSong } from "../redux/action";
import { useState } from "react";

const Player = () => {
  const songToPlay = useSelector((state) => state.songs.selected);
  const songsliked = useSelector((state) => state.liked.liked);

  const dispatch = useDispatch();

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
    if (songToPlay) {
      const isAlreadyLiked = songsliked.some(
        (likedSong) => likedSong.id === songToPlay.id
      );

      if (isAlreadyLiked) {
        // Rimuovi la canzone dall'array
        dispatch(removeLikedSong(songToPlay));
      }
      // Aggiungi la canzone all'array
      else dispatch(likedSongs(songToPlay));
    }
  };
  /*     if(songToPlay.id){
        dispatch(likedSongs(songToPlay));
    } */

  return (
    <Container className="playbar">
      <Row className="RowAllPalybar d-flex">
        {songToPlay ? (
          <Col sm={3}>
            <div className="d-flex align-items-center song">
              <img
                src={songToPlay.album.cover_small}
                alt={songToPlay.title}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              <div>
                <p className="playbarP">{songToPlay.title}</p>
                <p className="playbarP">{songToPlay.artist.name}</p>
              </div>
            </div>
          </Col>
        ) : (
          <Col sm={3}></Col>
        )}

        <Col sm={4} className="playerControls">
          <Row className="d-flex justify-content-center w-100">
            <Col xs="auto" className="text-center">
              <div className="d-flex player-buttons-section w-100">
                <button className="btn playerBtn">
                  <img
                    src="src/assets/playerbuttons/shuffle.png"
                    alt="shuffle"
                  />
                </button>
                <button className="btn playerBtn">
                  <img src="src/assets/playerbuttons/prev.png" alt="prev" />
                </button>
                <button className="btn playerBtn">
                  <img src="src/assets/playerbuttons/play.png" alt="play" />
                </button>
                <button className="btn playerBtn">
                  <img src="src/assets/playerbuttons/next.png" alt="next" />
                </button>
                <button className="btn playerBtn">
                  <img src="src/assets/playerbuttons/repeat.png" alt="repeat" />
                </button>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="text-center">
              <div className="progress mt-3 w-100">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
        {songToPlay ? (
          <Col sm={3} className="d-flex align-items-center offset-1 ">
            <div className="d-flex justify-content-center align-items-center heart ">
              <button
                className="btn"
                onClick={() => {
                  handleLikeClick();
                }}
              >
                <i
                  className={`heart-icon bi ${
                    liked ? "bi-suit-heart-fill" : "bi-suit-heart"
                  }`}
                ></i>
              </button>
            </div>
          </Col>
        ) : (
          <Col sm={3}></Col>
        )}
      </Row>
    </Container>
  );
};

export default Player;
