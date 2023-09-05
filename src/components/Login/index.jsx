import { useState } from "react";
import instagram from "../../assets/Instagram.png";
import { loginUser } from "../../api/auth";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/slice/tokenSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        username: userName,
        password: password,
      });

      if (response && response.status === "success") {
        dispatch(setToken(response.token));
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
