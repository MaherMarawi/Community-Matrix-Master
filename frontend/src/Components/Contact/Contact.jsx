import React from "react";
import axios from "axios";
import img from "../../img/2.png";
import img1 from "../../img/11.png";
import { useForm } from "react-hook-form";

export default function Contact(props) {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    axios
      .post("http://localhost:5000/api/SendEmail", data)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
  };

  const validate = (value) => {
    if (value.includes("@")) return true;
    return false;
  };

  return (
    <div className="backgroundCO">
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Contact Us</h1>
      <div className="bodyCO">
        <div className="textttCO">
          <h1>We’d love to hear from you</h1>
          <h4>
            Whether you have a question about React, Node js, Style, need a
            demo, or anything else, our team is ready to answer all your
            questions
          </h4>
          <img className="imgCO" src={img} alt="img" />
        </div>
        <div className="textCO">
          <h1>
            {" "}
            <label>
              C<img className="logo" src={img1}></img>ntact Us
            </label>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className='btnCO'
              type="text"
              name="name"
              ref={register({ required: true })}
              placeholder="Type your name"
            />
            <br />
            {errors.name && errors.name.type === "required" && (
              <span>This is required</span>
            )}

            <input
              className="btnCO"
              type="text"
              name="email"
              ref={register({ required: true, validate: validate })}
              placeholder="Type your email"
            />
            <br />
            {errors.email && errors.email.type === "required" && (
              <span>This is required</span>
            )}
            {errors.email && errors.email.type === "validate" && (
              <span>This should be an email</span>
            )}

            <textarea
              className="btntCO"
              type="text"
              name="message"
              ref={register({ required: true })}
              placeholder="Add a message"
            />
            <br />
            {errors.message && errors.message.type === "required" && (
              <span>This is required</span>
            )}

            <button className="sendCO">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
