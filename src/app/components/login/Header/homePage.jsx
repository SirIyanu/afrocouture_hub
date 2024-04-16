import React, { useState } from 'react';
import homePage from './homePage.module.css';
import Success from "../success/Success";
import Error from "../error/error";

function NavigationPage() {
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [verificationCodes, setVerificationCodes] = useState(['', '', '', '']);

    const handleInputChange = (index, value) => {
        const newVerificationCodes = [...verificationCodes];
        newVerificationCodes[index] = value;
        setVerificationCodes(newVerificationCodes);
    };

    const handleConfirmButtonClick = () => {
        const verificationCode = verificationCodes.join('');
        if (verificationCode === '1234') {
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
            <header className={homePage.heading}>
                <h2><span className={homePage.Afro}>AfroCouture </span>Hub</h2>
            </header>
            <section className={homePage.body}>
                <div className={homePage.momo}>
                    <div>
                        <h3 className={homePage.verify}>Verification Code</h3>
                        <div className={homePage.info}>Input the verification code that was <br />
                            sent to your email address</div>
                    </div>
                    <div className={homePage.inputs}>
                        {[0, 1, 2, 3].map(index => (
                            <div key={index}>
                                <input
                                    className={homePage.text}
                                    type="text"
                                    value={verificationCodes[index]}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                    </div>
                    {!openSuccess && !openError && (
                        <div>
                            <button className={homePage.button} onClick={handleConfirmButtonClick}>Confirm</button>
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
