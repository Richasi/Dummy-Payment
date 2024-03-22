import React, { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [CVV, setCVV] = useState("");
  const [expiry, setExpiry] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [cvvlimit, setCvvlimit] = useState(false);
  const [isCardNumberLimit, setisCardNumberLimit] = useState(false);

  const handleChangeCardNumber = (e) => {
    let input = e.target.value;

    if (input.length == 4) {
      input = input + " ";
    } else if (input.length == 9) {
      input = input + " ";
    } else if (input.length == 14) {
      input = input + " ";
    }

    if (input) console.log(input);
    if (input.length <= 19) {
      setCardNumber(input);
      setisCardNumberLimit(false);
    } else {
      setisCardNumberLimit(true);
    }
  };
  const handleChangeName = (e) => {
    let input = e.target.value;
    setCardName(input);
  };
  const handleChangeExpiry = (e) => {
    let input = e.target.value;
    setExpiry(input);
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
  console.log(cardNumber);
  return (
    <div
      className="cardPay"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="CardFront"
        style={{
          height: "200px",
          width: "350px",
          borderRadius: "15px",
          background: "linear-gradient(to right, #72EDF2, #5151E5)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          color: "white",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <p
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
        >
          VISA
        </p>
        <div
          className="cardNumber"
          style={{ fontSize: "18px", marginBottom: "10px" }}
        >
          {cardNumber || "#### #### #### ####"}
        </div>
        <div
          className="cardName"
          style={{ fontSize: "16px", marginBottom: "10px" }}
        >
          {cardName || "CARDHOLDER NAME"}
        </div>
        <div
          className="cardExpiry"
          style={{ fontSize: "16px", marginBottom: "10px" }}
        >
          {expiry || "MM/YY"}
        </div>
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div className="cvvNumber">{CVV || "---"}</div>
      </div>
      <form
        action=""
        style={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={handleChangeCardNumber}
        />
        {isCardNumberLimit ? <p>Card Number Digits must be 16</p> : " "}
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
        />
        {cvvlimit ? <p>CVV limit must be 3</p> : ""}
      </form>
    </div>
  );
};

export default Payment;
