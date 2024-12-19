import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { likedSongs, removeLikedSong } from "../redux/action";
/* import { useEffect } from "react"; */

const Player = () => {
  const songToPlay = useSelector((state) => state.songs.selected);
  const songsliked = useSelector((state) => state.liked.liked);
  const dispatch = useDispatch();

  // Verifico se la canzone è nei preferiti così da poter gestire il "toggle"
  const isLiked = songToPlay
    ? songsliked.some((likedSong) => likedSong.id === songToPlay.id)
    : false;

  const handleLikeClick = () => {
    if (songToPlay) {
      if (isLiked) {
        // Se la canzone è già nei preferiti in questo modo la rimuovo
        dispatch(removeLikedSong(songToPlay));
      } else {
        // Aggiungo la canzone ai preferiti
        dispatch(likedSongs(songToPlay));
      }
    }
  };

  // Calcola minuti e secondi della canzone
  const minutes = songToPlay ? Math.floor(songToPlay.duration / 60) : 0;
  const remainingSeconds = songToPlay ? songToPlay.duration % 60 : 0;

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
                {songToPlay ? (
                  <p className="time">
                    {minutes}:
                    {remainingSeconds < 10
                      ? `0${remainingSeconds}`
                      : remainingSeconds}
                  </p>
                ) : null}
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
              <button className="btn" onClick={handleLikeClick}>
                <i
                  className={`heart-icon bi ${
                    isLiked ? "bi-suit-heart-fill" : "bi-suit-heart"
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
