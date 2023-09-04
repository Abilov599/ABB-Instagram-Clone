import React, { useState } from "react";
import instagram from "../../assets/Instagram.png";
import { registerUser } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { setSignupSuccess } from "../../redux/slice/userSlice";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(
        registerUser({
          username: userName,
          password: password,
          firstName: firstName,
          lastName: lastName,
        })
      );
  
      if (response.payload && response.payload.status === "success") {
        dispatch(setSignupSuccess(true));
        alert("Registration successful");
        console.log(response.payload);
      } else {
        alert("Registration failed");
        console.error("Registration failed", response.payload);
      }
    } catch (error) {
      alert("Registration failed");
      console.error("Registration failed", error);
    }
  };
  return (
    <section className="signup">
      <img src={instagram} alt="instagram" />
      <form onSubmit={handleSignUp}>
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
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="firstname"
          required
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="lastname"
          required
        />
        <button>Sign Up</button>
      </form>
    </section>
  );
};

export default Signup;
