export const fetchAllLists = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "ALL_LISTS", payload: json }))
      .catch((err) => console.log(err));
  };
};

export const fetchDeleteList = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        dispatch({ type: "DELETE_LIST", payload: id });
      }
    });
  };
};

export const fetchAddList = (title, body, userId) => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
			.then((json) => dispatch({ type: "ADD_LIST", payload: json }))
      .catch((err) => {
        console.log("add err", err);
      });
  };
};

export const fetchChangeList = (changeField, title, body, userId) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${changeField}`, {
      method: "PUT",
      body: JSON.stringify({
        id: changeField,
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => dispatch({ type: "CHANGE_LIST", payload: {json, changeField}}));
  };
};
