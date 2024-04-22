import React from "react";
import Check from "../images/check.svg";
import style from "./sucess.module.css";
import { useNavigate } from "react-router-dom";

function Success({ closeSuccess }) {
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to the login page
    navigate("/login");
    // Close the success component
    closeSuccess(false);
  };

  return (
    <div className={style.pageContainer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
            <div>
              <img src={Check} alt="check" />
            </div>
            <button className={style.primaryButton}>Success!</button>
            <h3 className={style.congratsText}>
              Congratulations! Your email address has been <br />
              successfully authenticated
            </h3>
            <button className={style.button} onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
