import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeList } from "../ChangeList/ChangeList";
import deleteImg from "../../img/delete.png";
import changeImg from "../../img/change.jpg";
import "../../styles/List.scss";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useActionsDispatch } from "hooks/useActionsDispatch";

export const List: React.FC = () => {
  const dispatch = useDispatch();
  const { fetchAllLists, fetchDeleteList } = useActionsDispatch()
  const { field, lists } = useTypedSelector((state) => state.lists);

  useEffect(() => {
    fetchAllLists();
  }, []);

  const deleteList = (id: number) => {
    fetchDeleteList(id);
  };

  console.log(lists)

  return (
    <div className="lists">
      {lists ? (
        lists.map(({ id, title, body, userId }) => (
          <div key={id} className="list">
            <div className="content">
              <p>{title}</p>
              <p>{body}</p>
              <p>{userId}</p>
            </div>
            {field === id && <ChangeList />}
            <div className="buttons">
              <img
                src={deleteImg}
                className="delete"
                onClick={() => deleteList(id)}
              />
              <img
                src={changeImg}
                className="delete"
                onClick={() => dispatch({ type: "ADD_FIELD", payload: id })}
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
