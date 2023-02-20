import React from "react";

const Users =(props) =>{
  const{data} = props
  return (
    <div className="App">
          <h1>Hello User {data.name}</h1>
          <h1>Your age is {data.age}</h1>
      </div>
   );
}
export default Users;