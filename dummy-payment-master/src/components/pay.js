import React, { useState } from "react";
import "./pay.css"; // Import your CSS file for styling

const PayPage = () => {
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [CVV, setCVV] = useState("");
  const [amount, setAmount] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [cvvLimit, setCvvLimit] = useState(false);
  const [cardNumberLimit, setCardNumberLimit] = useState(false);

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeCardNumber = (e) => {
    let input = e.target.value.replace(/\s/g, "");
    if (input.length === 4 || input.length === 9 || input.length === 14) {
      input += " ";
    }
    if (input.length <= 19) {
      setCardNumber(input);
      setCardNumberLimit(false);
    } else {
      setCardNumberLimit(true);
    }
  };

  const handleChangeExpiry = (e) => {
    setExpiry(e.target.value);
  };

  const handleChangeCVV = (e) => {
    let input = e.target.value;
    if (input.length <= 3) {
      setCVV(input);
      setCvvLimit(false);
    } else {
      setCvvLimit(true);
    }
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handlePayment = () => {
    // Logic to process payment
    console.log("Payment processed!");
  };

  const handleCVVFocus = () => {
    setIsFlipped(true);
  };

  const handleCVVBlur = () => {
    setIsFlipped(false);
  };

  return (
    <div className={`payPage ${isFlipped ? "flipped" : ""}`}>
      <div className="card">
        <div className="cardFront">
          <p className="cardType">VISA</p>
          <div className="cardNumber">{cardNumber || "#### #### #### ####"}</div>
          <div className="cardName">{fullName || "FULL NAME"}</div>
          <div className="cardExpiry">{expiry || "MM/YY"}</div>
        </div>
        <div className="cardBack">
          <div className="cvvNumber">{CVV || "---"}</div>
        </div>
      </div>
      <form className="paymentForm">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={handleChangeFullName}
        />
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleChangeCardNumber}
        />
        {cardNumberLimit && <p>Card Number Digits must be 16</p>}
        <input
          type="text"
          placeholder="Expiry Date"
          value={expiry}
          onChange={handleChangeExpiry}
        />
        <input
          type="text"
          placeholder="CVV"
          value={CVV}
          onChange={handleChangeCVV}
          onFocus={handleCVVFocus}
          onBlur={handleCVVBlur}
        />
        {cvvLimit && <p>CVV limit must be 3</p>}
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={handleChangeAmount}
        />
        <button className="payButton" onClick={handlePayment}>Pay Now</button>
      </form>
    </div>
  );
};

export default PayPage;
