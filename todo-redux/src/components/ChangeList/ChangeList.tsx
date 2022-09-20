import React, { useState } from "react";
import { useActionsDispatch } from "hooks/useActionsDispatch";
import { useTypedSelector } from "hooks/useTypedSelector";
import { dataFormType, errorTextType } from "types/todo";
import { isEmail, isPassword } from "./regexForm";
import "./ChangeList.scss";

const ChangeList: React.FC = () => {
  const { fetchChangeList } = useActionsDispatch()
  const field = useTypedSelector((state) => state.lists.field)

  const [errorText, setErrorText] = useState<errorTextType>({
    email: "", password: "", userId: ""
  })

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as typeof e.target & dataFormType
    const eventForm = { email: data.email.value, password: data.password.value, userId: data.userId.value }
    if (!isEmail(data.email.value)) {
      setErrorText(prev => ({ ...prev, email: "Некорректный email" }))
    }
    if (!isPassword(data.password.value)) {
      setErrorText(prev => ({ ...prev, password: "Пароль должен содержать от 6 до 20 символов, которые содержат по крайней мере одну цифру, прописную и строчную букву" }))
    }
    if (isEmail(data.email.value) && isPassword(data.password.value)) {
      fetchChangeList(field, eventForm.email, eventForm.password, eventForm.userId);
      data.reset()
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emptyField = "Поле не может быть пустым"
    switch (e.target.name) {
      case "email":
        if (e.target.value === "") {
          setErrorText(prevState => ({ ...prevState, email: emptyField }))
        }
        break
      case "password":
        if (e.target.value === "") {
          setErrorText(prevState => ({ ...prevState, password: emptyField }))
        }
        break
      case "userId":
        if (e.target.value === "") {
          setErrorText(prevState => ({ ...prevState, userId: emptyField }))
        }
        break
    }
  }

  return (
    <div className="changeList">
      <form onSubmit={handleOnSubmit}>
        {errorText.email && <p>{errorText.email}</p>}
        <input onChange={() => setErrorText(prevState => ({ ...prevState, email: '' }))} onBlur={(e) => blurHandler(e)} placeholder="Email" name="email" />
        {errorText.password && <p>{errorText.password}</p>}
        <input onChange={() => setErrorText(prevState => ({ ...prevState, password: '' }))} onBlur={(e) => blurHandler(e)} placeholder="Password" name="password" />
        {errorText.userId && <p>{errorText.userId}</p>}
        <input onChange={() => setErrorText(prevState => ({ ...prevState, userId: '' }))} onBlur={(e) => blurHandler(e)} placeholder="Id" name="userId" />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default ChangeList;
