import { useState } from "react";
import instagram from "../../assets/Instagram.png";
import { loginUser } from "../../api/auth";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        username: userName,
        password: password,
      });

      console.log(response);

      if (response && response.status === "success") {
        localStorage.setItem("loggedIn", response.token);

        alert("Login successful");
        console.log("Login successful", response);
      } else {
        alert("Login failed");
        console.error("Login failed", response);
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
