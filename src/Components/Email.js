import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
const Email = () => {
     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();

       emailjs
         .sendForm(
           "YOUR_SERVICE_ID",
           "YOUR_TEMPLATE_ID",
           form.current,
           "jalaluddinemon4@gmail.com"
         )
         .then(
           (result) => {
             console.log(result.text);
           },
           (error) => {
             console.log(error.text);
           }
         );
     };
    return (
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
};

export default Email;