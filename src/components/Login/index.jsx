import React, { useState } from "react";
import instagram from "../../assets/Instagram.png";
import { loginUser } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signupSuccess = useSelector((state) => state.user.signupSuccess);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!signupSuccess) {
      alert("Please sign up first.");
      return;
    }

    try {
      const response = await dispatch(
        loginUser({
          username: userName,
          password: password,
        })
      );

      if (response.payload && response.payload.status === "success") {
        localStorage.setItem("loggedIn", signupSuccess);

        alert("Login successful");
        console.log("Login successful", response.payload);
      } else {
        alert("Login failed");
        console.error("Login failed", response.payload);
      }
    } catch (error) {
      alert("Login failed");
      console.error("Login failed", error);
    }
  };

  return (
    <section className="login">
      <img src={instagram} alt="instagram" />
      <form onSubmit={handleLogin}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="username"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required
        />
        <button>Log In</button>
      </form>
    </section>
  );
};

export default Login;