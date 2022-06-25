import React, { useState } from "react";

const UserForm = (props) => {
  const [enteredUserName, setEnteredUserName] = useState(" ");
  const [enteredAge, setEnteredAge] = useState(" ");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      name: enteredUserName,
      age: +enteredAge,
    };

    props.addUser(userData);
    setEnteredUserName(" ");
    setEnteredAge(" ");
  };

  return (
    <div className="card" style={{ margin: "30px 10px" }}>
      <form style={{ margin: "10px 20px 10px 20px" }} onSubmit={submitHandler}>
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
        <label style={{ padding: "5px" }}>Age (Years)</label>
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
  );
};

export default UserForm;
