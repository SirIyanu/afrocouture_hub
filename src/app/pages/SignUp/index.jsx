import React from "react";
import { useState } from "react";
import { CustomButton } from "../../components/Button";
import { CustomInput } from "../../components/Input";
import { HeaderNavigation } from "../../components/header";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { Footer } from "../../components/Footer";
import { toast } from "react-toastify";

export const SignUpPage = () => {
  // States for registration
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleId = (event) => {
    setId(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }

    // Prepare the payload
    const payload = { id, email, country, password, confirmPassword };

    // Perform the fetch request
    fetch(`http://localhost:8000/users/${id}`) // Fetch the static JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((users) => {
        if (users.email !== email) {
          throw new Error("Invalid email");
        }
        // If email does not exist, proceed with the registration
        return fetch("http://localhost:8000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      })
      .then((res) => {
        if (res.ok) {
          toast.success("Sign-Up Successful");
          setTimeout(() => {
            navigate("/verification");
          }, 6000);
        } else {
          throw new Error("Sign-Up Failed.");
        }
      })
      .catch((err) => {
        toast.error("Sign-Up Failed: " + err.message);
      });
  };

  return (
    <div className={style.form}>
      <HeaderNavigation />

      <form onSubmit={handleSubmit}>
        <div className={style.wrapper}>
          <div className={style["opening-text"]}>
            <div className={style.welcome}>Welcome Onboard!</div>
            <>Let's help you get things started</>
          </div>
          <br />

          <CustomInput
            label={"Full Name"}
            onChange={handleId}
            className={style.input}
            value={id}
            type="text"
            required
          />

          <CustomInput
            label={"Email"}
            onChange={handleEmail}
            className={style.input}
            value={email}
            type="email"
            required
          />
          <CustomInput
            label={"Country of Residence"}
            onChange={handleCountry}
            className={style.input}
            value={country}
            type="text"
            required
          />

          <CustomInput
            label={"Password"}
            onChange={handlePassword}
            className={style.input}
            value={password}
            type="password"
            required
          />

          <CustomInput
            label={"Confirm Password"}
            onChange={handleConfirmPassword}
            className={style.input}
            value={confirmPassword}
            type="password"
            required
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
