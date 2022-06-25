import React from "react";

const UserForm = (props) => {
  return (
    <div className="card" style={{ margin: "30px 10px" }}>
      <form style={{ margin: "10px 20px 10px 20px" }}>
        <div className="row">
          <label for="exampleFormControlInput1" class="form-label">
            Username
          </label>
        </div>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
        ></input>
        <label style={{ padding: "5px" }}>Age (Years)</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
        ></input>
        <button
          type="button"
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
