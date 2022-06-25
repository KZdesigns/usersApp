import React from "react";

const UserItem = (props) => {
  return (
    <div>
      <li className="list-group-item">
        {props.userName} ({props.userAge} years old)
      </li>
    </div>
  );
};

export default UserItem;
