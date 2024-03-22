import React, { useState } from "react";
import "./Payment.css"; // Import your CSS file for styling

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [CVV, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [cvvlimit, setCvvlimit] = useState(false);
  const [isCardNumberLimit, setisCardNumberLimit] = useState(false);

  const handleChangeCardNumber = (e) => {
    let input = e.target.value.replace(/\s/g, "");
    if (input.length === 4 || input.length === 9 || input.length === 14) {
      input += " ";
    }
    if (input.length <= 19) {
      setCardNumber(input);
      setisCardNumberLimit(false);
    } else {
      setisCardNumberLimit(true);
    }
  };

  const handleChangeName = (e) => {
    setCardName(e.target.value);
  };

  const handleChangeExpiry = (e) => {
    setExpiry(e.target.value);
  };

  const handleChangeCvv = (e) => {
    let input = e.target.value;
    if (input.length <= 3) {
      setCVV(input);
      setCvvlimit(false);
    } else {
      setCvvlimit(true);
    }
  };

  const handleCVVFocus = () => {
    setIsFlipped(true);
  };

  const handleCVVBlur = () => {
    setIsFlipped(false);
  };

  return (
    <div className="paymentContainer">
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="cardFront">
          <p className="cardType">VISA</p>
          <div className="cardNumber">{cardNumber || "#### #### #### ####"}</div>
          <div className="cardName">{cardName || "CARDHOLDER NAME"}</div>
          <div className="cardExpiry">{expiry || "MM/YY"}</div>
        </div>
        <div className="cardBack">
          <div className="cvvNumber">{CVV || "---"}</div>
        </div>
      </div>
      <form className="formContainer">
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleChangeCardNumber}
        />
        {isCardNumberLimit && <p>Card Number Digits must be 16</p>}
        <input
          type="text"
          placeholder="Card Name"
          value={cardName}
          onChange={handleChangeName}
        />
        <input
          type="text"
          placeholder="Card Expiry"
          value={expiry}
          onChange={handleChangeExpiry}
        />
        <input
          type="text"
          placeholder="Card Cvv"
          value={CVV}
          onChange={handleChangeCvv}
          onFocus={handleCVVFocus}
          onBlur={handleCVVBlur}
        />
        {cvvlimit && <p>CVV limit must be 3</p>}
      </form>
    </div>
  );
};

export default Payment;
