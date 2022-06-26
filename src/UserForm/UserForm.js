import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");
  const [isValid, setIsValid] = useState();

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setIsValid({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: +enteredAge,
    };

    props.addUser(userData);
    setEnteredUserName(" ");
    setEnteredAge(" ");
  };

  const errorHandler = () => {
    setIsValid(undefined);
  };

  return (
    <div>
      {isValid && (
        <ErrorModal
          title={isValid.title}
          message={isValid.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <div className="card" style={{ margin: "30px 10px" }}>
        <form
          style={{ margin: "10px 20px 10px 20px" }}
          onSubmit={submitHandler}
        >
          <div className="row">
            <label className="form-label">Username</label>
          </div>
          <input
            value={enteredUserName}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={userNameChangeHandler}
          ></input>
          <div className="row" style={{ marginTop: "10px" }}>
            <label className="form-label">Age (Years)</label>
          </div>

          <input
            value={enteredAge}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={ageChangeHandler}
          ></input>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
