import fetch from "isomorphic-fetch";

function fetchingCats() {
  return {
    type: "LOADING_CATS"
  };
}

// export async function fetchCats(dispatch) {
//   dispatch(fetchingCats());
//   let res = await fetch("http://localhost:4000/db");
//   let json = await res.json();
//   return dispatch({
//     type: "FETCH_CATS",
//     payload: json.images
//   });
// }

export function fetchCats() {
  return async function(dispatch) {
    dispatch(fetchingCats());
    await fetch("http://localhost:4000/db")
      .then(res => res.json())
      .then(json =>
        dispatch({
          type: "FETCH_CATS",
          payload: json.images
        })
      );
  };
}
