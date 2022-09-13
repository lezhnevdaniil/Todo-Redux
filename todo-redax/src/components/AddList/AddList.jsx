import React from "react";
import { useDispatch } from "react-redux";
import { fetchAddList } from "../../asyncActions/customers";
import "../../styles/AddList.scss";

export const AddList = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    const title = e.target.title.value;
    const body = e.target.body.value;
    const userId = e.target.userId.value;
    e.preventDefault();
    dispatch(fetchAddList(title, body, userId));
    e.target.title.value = "";
    e.target.body.value = "";
    e.target.userId.value = "";
  };

  return (
    <div className="addList">
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Title" name="title" />
        <input placeholder="Text" name="body" />
        <input placeholder="Id" name="userId" />
        <button>ADD</button>
      </form>
    </div>
  );
};
