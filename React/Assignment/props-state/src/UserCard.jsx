import React from "react";

function UserCard(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          {/* <h5 classname="card-title">Name : </h5> */}
          <p className="card-text">Name : {props.name}</p>
          <p className="card-text">Age : {props.age}</p>
          <p className="card-text">Location : {props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
