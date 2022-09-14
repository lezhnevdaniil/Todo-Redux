import { Dispatch } from "redux";
import { actionNameTypes, actionProps } from "types/todo";

export const fetchAllLists = () => {
  return (dispatch: Dispatch<actionProps>) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => dispatch({ type: actionNameTypes.ALL_LISTS, payload: json }))
      .catch((err) => console.log(err));
  };
};

export const fetchDeleteList = (id: number) => {
  return (dispatch: Dispatch<actionProps>) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status !== 200) {
        return;
      } else {
        dispatch({ type: actionNameTypes.DELETE_LIST, payload: id });
      }
    });
  };
};

export const fetchAddList = (title: string, body: string, userId: string) => {
  return (dispatch: Dispatch<actionProps>) => {
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
      .then((json) => dispatch({ type: actionNameTypes.ADD_LIST, payload: json }))
      .catch((err) => {
        console.log("add err", err);
      });
  };
};

export const fetchChangeList = (changeField: number | null, title: string, body: string, userId: string) => {
  return async (dispatch: Dispatch<actionProps>) => {
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
      .then((json) => dispatch({ type: actionNameTypes.CHANGE_LIST, payload: json }));
  };
};
