import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mkvt4ed', 'template_qy3dik6', e.target, 'user_JSwynBy30FaaZiVMaWdwo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });    
    e.target.reset();
  }

  return (
    <div className="Contact" id="contact"> 
      <div class="contact-title">Contact me</div>
      <form className="form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input class="name" type="text" name="name" />
        <label > Email </label>
        <input class="email" type="email" name="email" />
        <label>Message</label>
        <textarea class="message" name="message"/>
        <input class="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;