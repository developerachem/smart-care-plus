"use client";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/form-element/Input";
import Password from "@/components/ui/form-element/Password";
import React, { useState } from "react";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form action="">
      <div className="mt-5">
        <Input
          label="Username"
          handler={handleInputChange}
          value={login.username}
          name="username"
          required
        />
      </div>
      <div className="mt-3">
        <Password label="Password" required />
      </div>
      <Button type="submit" className="w-full mt-2" title="Login" />
      <Button
        type="link"
        link="/user-signup"
        title="New User Registration"
        className="w-full mt-2"
      />
    </form>
  );
}

export default Login;
