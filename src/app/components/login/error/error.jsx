import React from 'react';
import Error from '../images/error.svg';
import style from '../success/sucess.module.css';

function error({closeError}) {
  return (
    <div className={style.pageContainer}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.column}>
           <div><img src={Error} alt="check" /></div> 
            <button className={style.primaryButton}>Failed!</button>
            <h3 className={style.congratsText}>Authentication Failed!</h3>
            <button className={style.button} onClick={()=>closeError(false)}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default error;
