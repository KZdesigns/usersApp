import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.usersData.length === 0) {
    return;
  }

  return (
    <div className="card" style={{ margin: "30px 10px" }}>
      <ul className="list-group" style={{ padding: "20px" }}>
        {props.usersData.map((user) => (
          <UserItem key={user.id} userName={user.name} userAge={user.age} />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
