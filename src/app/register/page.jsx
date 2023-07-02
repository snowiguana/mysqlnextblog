"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here", inputs);
    try {
      console.log("here1");
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res);
      router?.push("/login");
    } catch (err) {
      console.log(err, "inside error")
      setError(err.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
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
        <button onClick={handleSubmit}>Register</button>

        {error && <p>{error}</p>}

        <span>
          <Link href={"/login"}>Already have an account?</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
