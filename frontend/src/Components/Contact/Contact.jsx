import React from "react";
import axios from "axios";
import img from "../../img/2.png";
import img1 from "../../img/11.png";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import IconLoading from '../Auth/AuthFunc/IconLoading'

export default function Contact(props) {
  const [loading, setLoading] = React.useState(false)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, e) => {
    setLoading(true)
    axios
      .post("http://localhost:5000/api/SendEmail", data)
      .then((result) => {
        setLoading(false)
        props.history.push('/community')
      })
      .catch((err) => {
        setLoading(false)
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
      <div className="bodyCO">
        <h1 className="titleCO">Contact Us</h1>
        <Link to='/community' ><button className="BackbtnCO">Go to Community</button></Link>
      </div>
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
          {!loading ?
            <React.Fragment>
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
                  <div className="inputCO">Name is required</div>
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
                  <div className="inputCO">Email is required</div>
                )}
                {errors.email && errors.email.type === "validate" && (
                  <div className="inputCO">Please enter a valid email</div>
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
                  <div className="inputCO">Message is required</div>
                )}
                <br />
                <button className="sendCO">Submit</button>
              </form>

            </React.Fragment>

            :
            <IconLoading />
          }
        </div>
      </div>
    </div>
  );
}