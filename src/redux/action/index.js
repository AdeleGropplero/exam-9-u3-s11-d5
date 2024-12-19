export const SHOW_SONGS = "SHOW_SONGS";
export const SELECTED_SONGS = "SELECTED_SONGS";
export const LIKED_SONGS = "LIKED_SONGS";
export const LIKED_SONGS_TO_REMOVE = "LIKED_SONGS_TO_REMOVE";

export const getSongsWithThunk = (query) => {
  return async (dispatch, getState) => {
    const currentState = getState();
    console.log("CURRENT STATE", currentState);
    try {
      /* dispatch({ type: SHOW_SONGS }); */
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
      );
      if (resp.ok) {
        let fetchedSongs = await resp.json();
        const limitedSongs = fetchedSongs.data.slice(0, 4);
        dispatch({ type: SHOW_SONGS, payload: limitedSongs, query });
      } else {
        console.log("error");
        throw new Error("Errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const selectedSong = (song) => ({ type: SELECTED_SONGS, payload: song });

export const likedSongs = (song) => ({ type: LIKED_SONGS, payload: song });

export const removeLikedSong = (song) => ({
  type: LIKED_SONGS_TO_REMOVE,
  payload: song
});
