import React from 'react';
import Check from '../images/check.svg';
import style from './sucess.module.css';

function Success({closeSuccess}) {
  return (
    <div className={style.pageContainer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
           <div><img src={Check} alt="check" /></div> 
            <button className={style.primaryButton}>Success!</button>
            <h3 className={style.congratsText}>Congratulations! Your email address has been <br/>successfully authenticated</h3>
            <button className={style.button} onClick={()=>closeSuccess(false)}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
