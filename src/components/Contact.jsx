import React, { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const messageChange = (e) => {
    setMessage(e.target.value);
  };
  const submit= () => {
    emailjs.send("service_lqkzeta", "template_8nmawy5", {
      from_name: name,
      message: message,
      reply_to: email
    }, "EpqRjdhd90IzHJLwx")
    .then((response) => {
      console.log(response);
      setEmail("");
      setName("");
      setMessage("");
    })
    .catch((err) => {
      console.log(err)
    })
  };

  //template id template_8nmawy5
  //Service id service_lqkzeta

  return (
    <form class="box">
      <div class="content">
        <h1>Contact Me</h1>
      </div>
      <div class="field container">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" onChange={nameChange} value={name} type="text" placeholder="John Smith" required></input>
        </div>
      </div>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" onChange={emailChange} value={email} type="text" placeholder="johnsmith@email.com" required></input>
        </div>
      </div>
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" onChange={messageChange} value={message} placeholder="Write Here..." required></textarea>
        </div>
      </div>
      <div>
        <button class="button is-primary" type="button" onClick={submit}>Submit</button>
      </div>
    </form>
  )
};

export default Contact;