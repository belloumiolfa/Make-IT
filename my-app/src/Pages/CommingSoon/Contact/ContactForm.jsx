import React, { useState } from 'react';
import { useInput } from '../../../Utils/FakeData/Hooks/useInput';
import { reduxForm, Field } from 'redux-form';

function ContactForm() {
  const [contacting, setContacting] = useState({});
  const { value: valueName, bind: bindName, reset: resetName } = useInput('');
  const { value: valueEmail, bind: bindEmail, reset: resetEmail } = useInput(
    ''
  );
  const {
    value: valueSubject,
    bind: bindSubject,
    reset: resetSubject,
  } = useInput('');
  const {
    value: valueMessage,
    bind: bindMessage,
    reset: resetMessage,
  } = useInput('');

  const handleSubmit = event => {
    event.preventDefault();
    let contact = {
      name: valueName,
      email: valueEmail,
      subject: valueSubject,
      message: valueMessage,
    };
    console.log(contact);
    /**
     *
     * add contacting to data base
     */
    resetName();
    resetEmail();
    resetSubject();
    resetMessage();
  };

  return (
    <div className="row  justify-content-center">
      <div className="col-lg-10">
        <form className="php-email-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col-md-6 form-group">
              <input
                {...bindName}
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate"></div>
            </div>
            <div className="col-md-6 form-group">
              <input
                {...bindEmail}
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group">
            <input
              {...bindSubject}
              type="text"
              className="form-control"
              id="subject"
              placeholder="Subject"
              data-rule="minlen:4"
              data-msg="Please enter at least 8 chars of subject"
            />
            <div className="validate"></div>
          </div>
          <div className="form-group">
            <textarea
              {...bindMessage}
              className="form-control"
              rows="5"
              data-rule="required"
              data-msg="Please write something for us"
              placeholder="Message"
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default reduxForm({ form: 'contactForm' })(ContactForm);
