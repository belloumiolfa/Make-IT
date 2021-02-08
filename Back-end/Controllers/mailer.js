import nodemailer from 'nodemailer';

const SetUpMail = () => {
   return nodemailer.createTransport({
      service: 'gmail',
      auth: {
         user: process.env.GMAIL_USER,
         pass: process.env.GMAIL_PASS,
      },
   });
};

const sendConfirmationEmail = contact => {
   const tranport = SetUpMail();

   const email = {
      from: contact.email,
      to: 'cf.makeit@gmail.com',
      subject: contact.subject,
      html: ` Name:${contact.name} <br/> email: ${contact.email} <br/> ${contact.message}`,
   };

   tranport.sendMail(email);
};

export default sendConfirmationEmail;
