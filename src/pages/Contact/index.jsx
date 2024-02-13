import React from "react";
import Carusel from "../../components/Carusel";
import ContactC from "../../components/ContactC";
import Maecenas from "../../components/Maecenas";
import ContactBg from "../../components/ContactBg";
import Loadeed from "../../components/Loadeed";
import Navbar from "../../components/Navbar";

function Contact() {
  return (
    <div>
      <Loadeed />
      <Carusel />
      <ContactC />
      <ContactBg />
      <Maecenas />
    </div>
  );
}

export default Contact;
