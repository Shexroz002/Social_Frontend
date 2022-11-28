import './password.css'
import React from "react";
import { Link } from 'react-router-dom';
export default function PasswordGenarate(){
  const characters = { // object of letters, numbers & symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
  const lengthSlider = document.querySelector(".pass-length input"),
  options = document.querySelectorAll(".option input"),
  passwordInput = document.querySelector(".input-box input");
    let staticPassword = "",
    randomPassword = "",
    excludeDuplicate = false,
    passLength = lengthSlider.value;

    options.forEach(option => { // looping through each option's checkbox
        if(option.checked) { // if checkbox is checked
            // if checkbox id isn't exc-duplicate && spaces
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                // adding particular key value from character object to staticPassword
                staticPassword += characters[option.id];
            } else if(option.id === "spaces") { // if checkbox id is spaces
                staticPassword += `  ${staticPassword}  `; // adding space at the beginning & end of staticPassword
            } else { // else pass true value to excludeDuplicate
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        // getting random character from the static password
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if(excludeDuplicate) { // if excludeDuplicate is true
            // if randomPassword doesn't contains the current random character or randomChar is equal 
            // to space " " then add random character to randomPassword else decrement i by -1
            !randomPassword.includes(randomChar) || randomChar === " " ? randomPassword += randomChar : i--;
        } else { // else add random character to randomPassword
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword; // passing randomPassword to passwordInput value
}

const upadatePassIndicator = () => {
  const lengthSlider = document.querySelector(".pass-length input"),
    passIndicator = document.querySelector(".pass-indicator");
    // if lengthSlider value is less than 8 then pass "weak" as passIndicator id else if lengthSlider 
    // value is less than 16 then pass "medium" as id else pass "strong" as id
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
  const lengthSlider = document.querySelector(".passlengthinput");
    // passing slider value as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    upadatePassIndicator();
}
// updateSlider();
setTimeout(()=>{updateSlider()},100)
const copyPassword = () => {
  const  copyIcon = document.querySelector(".input-box span"),
      passwordInput = document.querySelector(".input-box input");
    navigator.clipboard.writeText(passwordInput.value); // copying random password
    copyIcon.innerText = "check"; // changing copy icon to tick
    copyIcon.style.color = "#4285F4";
    setTimeout(() => { // after 1500 ms, changing tick icon back to copy
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
}
    return(
      <>
        <div className="containerpassword">
        <Link to={`/`} className="back-icon" ><i className="fas fa-arrow-left"></i>Exit</Link>
      <h2  className="containerh2">Password Generator</h2>
      <div className="wrapperpassword">
        <div className="input-box">
          <input className="inputboxinput" type="text" disabled/>
          <span onClick={()=>{copyPassword()}} className="inputboxspan material-symbols-rounded">copy_all</span>
        </div>
        <div className="pass-indicator"></div>
        <div className="pass-length">
          <div className="details">
            <label className="labelpassword">Password Length</label>
            <span></span>
          </div>
          <input onInput={()=>{updateSlider()}} className="passlengthinput" type="range" min="1" max="30" defaultValue={8} step="1"/>
        </div>
        <div className="pass-settings">
          <label className="labelpassword">Password Settings</label>
          <ul className="options">
            <li className="option">
              <input className="optionsinput" type="checkbox" id="lowercase" checked/>
              <label className="labelpassword" for="lowercase">Lowercase (a-z)</label>
            </li>
            <li className="option">
              <input className="optionsinput" type="checkbox" id="uppercase"/>
              <label className="labelpassword" for="uppercase">Uppercase (A-Z)</label>
            </li>
            <li className="option">
              <input className="optionsinput" type="checkbox" id="numbers"/>
              <label className="labelpassword" for="numbers">Numbers (0-9)</label>
            </li>
            <li className="option">
              <input className="optionsinput"  type="checkbox" id="symbols"/>
              <label className="labelpassword" for="symbols">Symbols (!-$^+)</label>
            </li>
            <li className="option">
              <input className="optionsinput" type="checkbox" id="exc-duplicate"/>
              <label className="labelpassword" for="exc-duplicate">Exclude Duplicate</label>
            </li>
            <li className="option">
              <input className="optionsinput" type="checkbox" id="spaces"/>
              <label className="labelpassword" for="spaces">Include Spaces</label>
            </li>
          </ul>
        </div>
        <button onClick={()=>{generatePassword()}} className="generate-btn">Generate Password</button>
      </div>
    </div></>
    )
}