import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Sign Up</h1>
      <div className="inputs">
        <form>
          <div className="signupInfo">
            <label for="email">Email</label>
            <input id="email" type="email" />
            <label for="password">Password</label>
            <input id="password" type="password" />
            <label for="password">Confirm Password</label>
            <input id="password" type="password" />
          </div>

          <div className="rememberMe">
            <label>
              {" "}
              <input type="checkbox" /> Remember Me{" "}
            </label>
          </div>
        </form>
        <div>
          <button>Sign up</button>
        </div>
        <p>or</p>
        <button>Sign up with Google</button>
        <p>
          Already a user?<button className="loginButton">Login</button>
        </p>
      </div>
    </>
  );
}

export default App;
