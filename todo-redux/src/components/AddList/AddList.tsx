import { useActionsDispatch } from "hooks/useActionsDispatch";
import React, { useState } from "react";
import { errorTextType } from "types/todo";
import "./AddList.scss";

const AddList: React.FC = () => {
  const { fetchAddList } = useActionsDispatch()

  const [errorText, setErrorText] = useState<errorTextType>({
    email: "", password: "", userId: ""
  })
  const [enumField, setEnumField] = useState<boolean>(false)

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

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = e.target as typeof e.target & { email: { value: string }, password: { value: string }, userId: { value: string }, reset: () => void }

    if (data.email.value === "" || data.password.value === "" || data.userId.value === "") {
      setEnumField(true)
      setErrorText({ email: "", password: "", userId: "" })
    } else {
      const eventForm = { email: data.email.value, password: data.password.value, userId: data.userId.value }
      fetchAddList(eventForm.email, eventForm.password, eventForm.userId);
      data.reset();
    }
  };

  return (
    <div className="addList">
      <form onSubmit={handleOnSubmit}>
        <div className="container">
          {enumField && <div className="emptyField"><span>Заполните все поля</span></div>}

          <div className="containerInput">
            {errorText.email && <p>{errorText.email}</p>}

            <input
              onChange={() => {
                setErrorText(prevState => ({ ...prevState, email: '' }))
                setEnumField(false)
              }}
              onBlur={(e) => blurHandler(e)}
              placeholder="Email"
              name="email"
            />
          </div>

          <div className="containerInput">
            {errorText.password && <p>{errorText.password}</p>}

            <input
              onChange={() => {
                setErrorText(prevState => ({ ...prevState, password: '' }))
                setEnumField(false)
              }}
              onBlur={(e) => blurHandler(e)}
              placeholder="Password"
              name="password"
            />
          </div>
          <div className="containerInput">
            {errorText.userId && <p>{errorText.userId}</p>}

            <input
              onChange={() => {
                setErrorText(prevState => ({ ...prevState, userId: '' }));
                setEnumField(false)
              }}
              onBlur={(e) => blurHandler(e)}
              placeholder="Id"
              name="userId"
            />
          </div>
        </div>
        
        <div>
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default AddList;
