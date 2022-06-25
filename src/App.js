import React, { useState } from "react";
import "./App.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

function App() {
  const USERS_DATA = [
    {
      name: "Kyle Zimmerman",
      age: 28,
    },
    {
      name: "Lauriane",
      age: 23,
    },
  ];

  const [Users, setUser] = useState(USERS_DATA);

  //TODO:
  // need to add an addUsers method and pass the method via props to UserForm call setUser in this method
  // need to pass Users data to the userList component via props

  return (
    <div className="container-sm">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
