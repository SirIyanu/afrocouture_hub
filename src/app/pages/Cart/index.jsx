import { Head } from "../../components/Shop/Head/Head";
import { Hero } from "../../components/Shop/Hero/Hero";
import { Footer } from "../../components/Footer";
import style from "./style.module.css";
import SmallKim from "../../assets/icons/small-kim.svg"
import Edit from "../../assets/icons/edit.svg"
import ArrowRight from "../../assets/icons/arrow-right.svg"
import { CustomButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { CustomInput } from "../../components/Input";
import React from "react";
import { useState } from "react";

export const Cart = ()=> {
 // States for registration
 const [id, setId] = useState("");
 const [lastName, setLastName] = useState("");
 const [address, setAddress] = useState("");
 const [country, setCountry] = useState("");
 const [state, setState] = useState("");
 const [city, setCity] = useState("");
 const [zipCode, setZipCode] = useState("");
 const [email, setEmail] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const navigate = useNavigate();

 const handleId = (event) => {
   setId(event.target.value);
 };
 const handleLastName = (event) => {
    setLastName(event.target.value);
  };

 const handleAddress = (event) => {
   setAddress(event.target.value);
 };
 const handleCountry = (event) => {
    setCountry(event.target.value);
  };

 const handleState = (event) => {
   setState(event.target.value);
 };

 const handleCity = (event) => {
    setCity(event.target.value);
  };

 const handleZipCode = (event) => {
   setZipCode(event.target.value);
 };

 const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

    return (
    <div className={style.flex}>
      <Head />
      <Hero />
<div className={style.body}>
 <div className={style.wrapper}>
   
            <div className={style["container-one"]}>
            <div className={style.small}>
                <h2>Cart Details</h2>
            </div>

            <form>
            <div className={style.flexit}>
            <CustomInput 
            label={"User name"}
            onChange={handleId}
            className={style.input}
            value={id}
            type="text"
            required
          />
           <CustomInput
            label={""}
            onChange={handleLastName}
            className={style.input}
            value={lastName}
            type="text"
            required
          />
            </div>

                <CustomInput
            label={"Address"}
            onChange={handleAddress}
            className={style.input}
            value={address}
            type="text"
            required
          />
          <div className={style.flexit}>
          <CustomInput
            label={"Country"}
            onChange={handleCountry}
            className={style.input}
            value={country}
            type="text"
            required
          />
           <CustomInput
            label={"State"}
            onChange={handleState}
            className={style.input}
            value={state}
            type="text"
            required
          />
          </div>
          <div className={style.flexit}>
          <CustomInput
            label={"City"}
            onChange={handleCity}
            className={style.input}
            value={city}
            type="text"
            required
          />

            <CustomInput
            label={"Zip Code"}
            onChange={handleZipCode}
            className={style.input}
            value={zipCode}
            type="text"
            required
          />
          </div>
          <CustomInput
            label={"Email"}
            onChange={handleEmail}
            className={style.input}
            value={email}
            type="text"
            required
          />

            <CustomInput
            label={"Phone Number"}
            onChange={handlePhoneNumber}
            className={style.input}
            value={phoneNumber}
            type="text"
            required
          />
            </form>
           </div>   
            </div> 
            <div className={style.wrapperry}>
 <div className={style.smaller}>
                <h2>Summary</h2>
            </div>
<div className={style["container-two"]}>
<div className={style.pack}>
<div className={style.flexy}>
           <p>Sub-Total</p>
           <p>$1760</p>
        </div>
        <div className={style.flexy}>
            <p>Shipping   </p>
            <p>$12</p>
        </div>
        <div className={style.flexy}>
            <p>Discount</p>
            <p>$12</p>
        </div>
        <div className={style.flexy}>
            <p>Tax</p>
            <p> $1.05</p>
        </div>
        <div className={style.divider}>
        </div >
        <div className={style.flexy}>
            <p>Total</p>
            <p>$1761.05</p>
        </div>
        <br />
        <br />
</div>
        <CustomButton>
            Proceed to checkout &nbsp; <img style={{color: ""}} src={ArrowRight} alt="" />
        </CustomButton>
        </div>
            </div>
            <div className={style.payment}>

            </div>
            </div>
 
      <Footer/> 
    </div>
    
       
    )
}