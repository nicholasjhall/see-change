import React from "react";
import { Button } from "reactstrap";
import { UserContext } from "../UserContext";

function Login() {
  return (
    <UserContext.Consumer>
      {({ userId, setUserId }) => (
        <Button onClick={() => {setUserId(1); console.log(userId);}}>Login</Button>
      )}
    </UserContext.Consumer>
  );
}

export default Login;