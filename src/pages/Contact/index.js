import React from "react";

import ContactForm from "../../components/ContactForm";

import "./index.scss";

const Contact = () => {
  return (
    <div className="container-contact">
      <h2 className="title-contact">CONTACT</h2>
      <p>Envíame un mensaje...</p>
      <div className="card-container-contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
