import React, { useRef } from "react";
import "./Form.css";

const Form = () => {
  const NameRef = useRef(null);
  const EmailRef = useRef(null);
  const NumRef = useRef(null);
  const DateRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const mobNum = NumRef.current.value;
    const date = DateRef.current.value;
    
  }

  return (
    <div className="FormWrap">
      <form className="Form" onSubmit={(e) => submitHandler(e)}>
        <p className="FormHead">
          <b style={{ color: "purple" }}>Welcome, </b>book your appointment.
        </p>
        <span className="InputWrap">
          <label htmlFor="name">Name</label>
          <input ref={NameRef} type="text" id="name" required />
        </span>
        <span className="InputWrap">
          <label htmlFor="email">Email</label>
          <input ref={EmailRef} type="email" id="email" required />
        </span>
        <span className="InputWrap">
          <label htmlFor="mob">Mobile Number</label>
          <input ref={NumRef} type="tel" id="mob" maxLength="10" required />
        </span>
        <span className="InputWrap">
          <label htmlFor="date">Date</label>
          <input ref={DateRef} type="date" id="date" required />
        </span>
        <button className="Btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
