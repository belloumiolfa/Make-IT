import React from 'react';
import ContactForm from './ContactForm';
import ContactInfos from './ContactInfos';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>

        <ContactInfos />
        <ContactForm />
      </div>
    </section>
  );
}
export default Contact;
