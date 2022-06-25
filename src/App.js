import React, { useState } from "react";
import "./App.css";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

function App() {
  const USERS_DATA = [];
  const [Users, setUser] = useState(USERS_DATA);

  const addUser = (userData) => {
    let users = [userData, ...Users];
    setUser(users);
  };

  return (
    <div className="container-sm">
      <UserForm addUser={addUser} />
      <UserList usersData={Users} />
    </div>
  );
}

export default App;
