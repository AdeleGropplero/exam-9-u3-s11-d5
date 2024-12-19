import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSongsWithThunk, selectedSong } from "../redux/action";

const MyCategoryRow = (props) => {
  const dispatch = useDispatch();
  const fetchedSongs = useSelector(
    (state) => state.songs.content[props.query] || []
  );
  const isSongSelected = useSelector((state) => state.songs.selected);

  useEffect(() => {
    dispatch(
      getSongsWithThunk(props.query)
    ); /* chiamo la dispatch al montaggio del componente */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2 className="titleRow">{props.query}</h2>
      <Row className="songsRow">
        {fetchedSongs.length > 0 ? (
          fetchedSongs.map((song) => (
            <Col key={song.id} md={3}>
              {/* 🔴 SISTEMA LA RESPONSIVNESS */}
              <div
                className={`song-card text-center `}
                onClick={() => {
                  // dispatch({ type: SELECTED_SONGS, payload: song });
                  dispatch(selectedSong(song));
                }}
              >
                <img
                  className={`img-fluid song-img ${
                    isSongSelected?.id === song.id ? "song-card-selected" : ""
                  }`}
                  src={song.album.cover_big}
                  alt="track"
                />
                <p className="song-info">
                  Track: {song.title} <br />
                  Artist: {song.artist.name}
                </p>
              </div>
              {/*               <Card>
                <Card.Img variant="top" src={song.album.cover_big} />
                <Card.Body>
                  <Card.Title>Track: {song.title}</Card.Title>
                  <Card.Text>Artist: {song.artist.name}</Card.Text>
                </Card.Body>
              </Card> */}
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center">No songs available</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default MyCategoryRow;
