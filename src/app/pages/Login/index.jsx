import style from "./style.module.css";
import { CustomInput } from "../../components/Input";
import React, { useEffect } from "react";
import { CustomButton } from "../../components/Button";
import { toast } from "react-toastify";
import { isUserLogin } from "../../utils/user";
import { UserPage } from "../UserPage";
import { useNavigate } from "react-router-dom";
import { HeaderNavigation } from "../../components/header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";

export const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();
  // console.log(email, password, rememberMe);

  const handleId = (event) => {
    setId(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRememberMeCheckbox = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleLogin = () => {
    setIsSubmitting(true);
    const payload = {
      username: id,
      password,
    };
    console.log({ payload }, "i'm working");
    fetch(`http://localhost:8000/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          toast.error("User not found");
          setIsSubmitting(false);
        }
        return response.json();
      })
      .then((users) => {
        if (users.id !== id) {
          throw new Error("Invalid credentials");
        }

        return fetch("http://localhost:8000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      })
      .then((res) => {
        if (res.ok) {
          toast.success("Login Successful");
          setTimeout(() => {
            navigate("/shop");
          }, 6000);
        } else {
          throw new Error("Login Failed.");
        }
      })
      .catch((err) => {
        // toast.error("Login Failed: " + err.message);
      });
  };

  return (
    <div className={style.wrapper}>
      <HeaderNavigation />

      <main className={style.main}>
        <div className={style["opening-text"]}>
          <div className={style.welcome}>Welcome Back!</div>
          <>Let's pick up where you left off</>
        </div>
        <br />
        <CustomInput
          onChange={handleId}
          type="text"
          placeholder={"Email address or username"}
          label={"Email address or username"}
        />
        <CustomInput
          onChange={handlePassword}
          label={"Password"}
          placeholder="Password"
          type="password"
        />
        <div className={style.password}>
          <h5>Forgot password</h5>
          <Link className={style.link} to="/forgot-password">
            Click here?
          </Link>
        </div>

        <div className={style.flex}>
          {/* <div>
            <input
              id="remember-me"
              type="checkbox"
              onChange={handleRememberMeCheckbox}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div> */}

          <CustomButton
            className={style.login}
            disabled={isSubmitting}
            onClick={handleLogin}
          >
            Login
          </CustomButton>
        </div>
        <div className={style.signup}>
          <p>Dont have an account?</p>
          <Link style={{ color: "#ff8a00" }} to="/signup">
            Sign up
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
      </main>
      <Footer />
    </div>
  );
};
