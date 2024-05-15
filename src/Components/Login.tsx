import React from "react";
import logoblue from "../assets/logoblue.png";
import Input from "./common/Input";
import Button from "./Button";
function Login() {
  return (
    <div className="bg-white p-[60px]">
      <img src={logoblue}></img>
      <Input placeholder="Email" type="email" onChange={() => {}} />
      <Input placeholder="Password" type="password" onChange={() => {}} />
      <Button title="Sign In" className="w-full" />
    </div>
  );
}

export default Login;
