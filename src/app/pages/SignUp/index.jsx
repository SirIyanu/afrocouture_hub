import React from "react";
import { useState } from "react";
import { CustomButton } from "../../components/Button";
import { CustomInput } from "../../components/Input";
import { HeaderNavigation } from "../../components/header";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import Footer from "../../components/Footer";

export const SignUpPage = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Handling the name change
  const handleName = (event) => {
    setName(event.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (event) => {
    setEmail(event.target.value);
    setSubmitted(false);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (event) => {
    setPassword(event.target.value);
    setSubmitted(false);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
    setSubmitted(false);
  };

  // Handling the form submission

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log("Submit button clicked");
    console.log("Redirecting to login page...");
    // Navigate to the login page after successful submission
    // window.location.href = "login";
    // redirect("/login");
    navigate("/login");
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div className={style.success}>
        {submitted && <h1>User {name} successfully registered!!</h1>}
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div className={style.error}>
        {error && <h1>Please enter all the fields</h1>}
      </div>
    );
  };

  return (
    <div className={style.form}>
      <HeaderNavigation />

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form onSubmit={handleSubmit}>
        <div className={style.wrapper}>
          <div className={style["opening-text"]}>
            <div className={style.welcome}>Welcome Onboard!</div>
            <>Let's help you get things started</>
          </div>
          <br />

          <CustomInput
            label={"Full Name"}
            onChange={handleName}
            className={style.input}
            value={name}
            type="text"
          />

          <CustomInput
            label={"Email"}
            onChange={handleEmail}
            className={style.input}
            value={email}
            type="email"
          />
          <CustomInput
            label={"Country of Residence"}
            onChange={handleCountry}
            className={style.input}
            value={country}
            type="text"
          />

          <CustomInput
            label={"Password"}
            onChange={handlePassword}
            className={style.input}
            value={password}
            type="password"
          />

          <CustomInput
            label={"Confirm Password"}
            onChange={handleConfirmPassword}
            className={style.input}
            value={confirmPassword}
            type="password"
          />
        </div>
        <br />
        <div className={style.bottom}>
          <CustomButton className={style.button} type="submit">
            Create Account
          </CustomButton>
          <div className={style.text}>
            <p>Already have an account?</p>
            <Link className={style.link} to="/Login">
              Login
            </Link>
          </div>
          <div className={style.divider}>
            <span>or</span>
          </div>
          <br />
          <CustomButton className={style.google}>
            <GoogleIcon /> &nbsp; Continue with Google
          </CustomButton>
          <br />
        </div>
      </form>
      <Footer />
    </div>
  );
};
