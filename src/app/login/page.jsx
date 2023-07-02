"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import axios from "axios";

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(inputs);
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8800/api/auth/login",
  //       inputs
  //     );
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //     setError(err);
  //   }
  // };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button >Login</button>
        {error && <p>{error} </p>}
        <span>
          <Link href={"/register"}>Create new account?</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
