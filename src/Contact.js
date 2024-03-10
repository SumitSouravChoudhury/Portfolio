import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [names, setName] = useState("");
  const [text, setText] = useState("");
  const [hide, setHide] = useState(false);

  function twoCalls(event) {
    handleChange(event);
    handleInput(event);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let name, value;
  function handleInput(event) {
    name = event.target.name;
    value = event.target.value;

    setUser({...user, [name]: value})
  }

  function handleClick() {
    setText(names);
    setHide(true);
  }

  return (
    <div className="container2">
      <header style={{ display: hide ? "none" : "block" }}>
        Hello I'm Sumit
      </header>
      <div className="greet" style={{ display: hide ? "block" : "none" }}>
        <header>Hello {text}</header>
        <h3>
          Thank you {text} for contacting me. I will try to reach to you as soon
          as possible.
        </h3>
        <h3>
          This is my portfolio website. I have showcase my projects and academic
          information through this website.
        </h3>
        <h3>
          You can head over to{" "}
          <Link className="res" to="/resume">
            Resume
          </Link>{" "}
          to view my projects and information.
        </h3>
        <h3>
          Or You can head back to{" "}
          <Link className="res" to="/">
            Home
          </Link>
          .
        </h3>
        <br></br>
        <h3>Love and Regards!</h3>
      </div>
      <form className="form" style={{ display: hide ? "none" : "block" }}>
        <div className="input">
          <label>First Name</label>
          <div>
            <input
              onChange={twoCalls}
              type="text"
              name="Fname"
              placeholder="First Name"
              value={user.fname}
            />
          </div>
          <label>Last Name</label>
          <div>
            <input
              type="text"
              name="Lname"
              placeholder="Last Name"
              value={user.lname}
              onChange={handleInput}
            />
          </div>
          <label>Email Address</label>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <label>Subject</label>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={user.subject}
              onChange={handleInput}
            />
          </div>
          <label>Message</label>
          <div>
            <input
              className="message"
              name="message"
              type="text"
              placeholder="Message"
              value={user.message}
              onChange={handleInput}
            />
          </div>
          <div className="btt">
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
