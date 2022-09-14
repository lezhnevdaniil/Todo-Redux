import { useActionsDispatch } from "hooks/useActionsDispatch";
import React from "react";
import "../../styles/AddList.scss";

export const AddList = () => {
  const { fetchAddList } = useActionsDispatch()

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as typeof e.target & { title: { value: string }, body: { value: string }, userId: { value: string }, reset: () => void }
    const title = data.title.value;
    const body = data.body.value;
    const userId = data.userId.value;
    fetchAddList(title, body, userId);
    data.reset();
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
