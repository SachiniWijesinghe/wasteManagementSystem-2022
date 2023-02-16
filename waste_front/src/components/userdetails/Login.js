import React, { useState } from "react";
import ReactDOM from "react-dom";

// import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password1: "pass1"
    },
    {
      username: "user2",
      password1: "pass2"
    }
  ];

  const errors = {
    name: "invalid username",
    password: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { name, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === name.value);

    // Compare user info
    if (userData) {
      if (userData.password1 !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "name", message: errors.name });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error1">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form1">
      <form onSubmit={handleSubmit}>
        <div className="input-container1">
          <label>Username </label>
          <input type="text" name="name" required />
          {renderErrorMessage("name")}
        </div>
        <div className="input-container1">
          <label>Password </label>
          <input type="password" name="password" required />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container1">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form1">
        <div className="title1">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default Login;