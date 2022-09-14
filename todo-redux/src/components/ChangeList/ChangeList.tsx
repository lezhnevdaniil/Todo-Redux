import { useActionsDispatch } from "hooks/useActionsDispatch";
import { useTypedSelector } from "hooks/useTypedSelector";
import React from "react";
import "../../styles/ChangeList.scss";

export const ChangeList = () => {
  const { fetchChangeList } = useActionsDispatch()
  const field = useTypedSelector((state) => state.lists.field)

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as typeof e.target & { title: { value: string }, body: { value: string }, userId: { value: string }, reset: () => void }
    const title = data.title.value;
    const body = data.body.value;
    const userId = data.userId.value;
    fetchChangeList(field, title, body, userId);
    data.reset()
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
