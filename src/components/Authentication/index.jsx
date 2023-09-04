import React, { useState } from "react";
import loginPic from "../../assets/login.png";
import Login from "../Login";
import "./style.scss";
import Signup from "../Signup";

const Authentication = () => {
  const [active, useActive] = useState(true);

  return (
    <main className="auth">
      <section className="auth__left">
        <img src={loginPic} alt="login" />
      </section>
      <section className="auth__right">
        {active ? <Login /> : <Signup />}
        <div className="auth__right-more">
          <span>
            {active ? (
              <>
                Don't have an account? <button onClick={() => useActive(!active)}>Sign Up</button>
              </>
            ) : (
              <>
                have an account? <button onClick={() => useActive(!active)}>Log In</button>
              </>
            )}
          </span>
        </div>
      </section>
    </main>
  );
};

export default Authentication;
