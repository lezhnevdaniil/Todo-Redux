import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeList } from "../ChangeList/ChangeList";
import { fetchAllLists, fetchDeleteList } from "../../asyncActions/customers";
import "../../styles/List.scss";

export const List = ({ data, setData }) => {
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.lists);
  const field = useSelector((state) => state.field);

  useEffect(() => {
    dispatch(fetchAllLists());
  }, []);

  const deleteList = (id) => {
    dispatch(fetchDeleteList(id));
  };

  return (
    <div className="lists">
      {lists ? (
        lists.map((list) => (
          <div key={list.id} className="list">
            <div className="content">
              <p className="title">{list.title}</p>
              <p className="body">{list.body}</p>
              <p className="body">{list.userId}</p>
            </div>
            {field === list.id && <ChangeList data={data} setData={setData} />}
            <div className="buttons">
              <img
                src="https://cdn.picpng.com/delete/abort-delete-cancel-icon-cross-98726.png"
                className="delete"
                onClick={() => deleteList(list.id)}
              />
              <img
                src="https://banner2.cleanpng.com/20181212/gpb/kisspng-computer-icons-portable-network-graphics-scalable-5c10cb233822e2.6889250315446044512299.jpg"
                className="delete"
                onClick={() =>
                  dispatch({ type: "ADD_FIELD", payload: list.id })
                }
              />
            </div>
          </div>
        ))
      ) : (
        <div className="loadingContainer">
          <span>LOADING</span>
        </div>
      )}
    </div>
  );
};
