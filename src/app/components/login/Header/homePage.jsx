import React, { useState } from "react";
import style from "./homePage.module.css";
import Success from "../success/Success";
import Error from "../error/error";

function NavigationPage() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [verificationCodes, setVerificationCodes] = useState(["", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newVerificationCodes = [...verificationCodes];
    newVerificationCodes[index] = value;
    setVerificationCodes(newVerificationCodes);
  };

  const handleConfirmButtonClick = () => {
    const verificationCode = verificationCodes.join("");
    if (verificationCode === "1234") {
      setOpenSuccess(true);
    } else {
      setOpenError(true);
    }
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  return (
    <div>
      <header className={style.heading}>
        <h2>
          <span className={style.Afro}>AfroCouture </span>Hub
        </h2>
      </header>
      <section className={style.body}>
        <div className={style.momo}>
          <div>
            <h3 className={style.verify}>Verification Code</h3>
            <div className={style.info}>
              Input the verification code that was <br />
              sent to your email address
            </div>
          </div>
          <div className={style.inputs}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index}>
                <input
                  className={style.text}
                  type="text"
                  value={verificationCodes[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>
          {!openSuccess && !openError && (
            <div>
              <button
                className={style.button}
                onClick={handleConfirmButtonClick}
              >
                Confirm
              </button>
            </div>
          )}
          {openSuccess && <Success closeSuccess={handleCloseSuccess} />}
          {openError && <Error closeError={handleCloseError} />}
        </div>
      </section>
    </div>
  );
}

export default NavigationPage;
