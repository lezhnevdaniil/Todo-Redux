import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChangeList } from "../../asyncActions/customers";
import "../../styles/ChangeList.scss";

export const ChangeList = () => {
  const dispatch = useDispatch();
  const field = useSelector((state) => state.field);

  const handleOnSubmit = (e) => {
    const title = e.target.title.value;
    const body = e.target.body.value;
    const userId = e.target.userId.value;
    e.preventDefault();
    dispatch(fetchChangeList(field, title, body, userId));

    e.target.title.value = "";
    e.target.body.value = "";
    e.target.userId.value = "";
  };

  return (
    <div className="changeList">
      <form onSubmit={handleOnSubmit}>
        <input placeholder="Title" name="title" />
        <input placeholder="Text" name="body" />
        <input placeholder="Id" name="userId" />
        <button>ADD</button>
      </form>
    </div>
  );
};
