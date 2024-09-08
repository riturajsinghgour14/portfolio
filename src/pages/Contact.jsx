import React, { useState } from 'react'

const Contact = () => {
 
    const [result, setResult] = React.useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "33d632a7-5ea6-4e7b-a1d1-08a24e5d4557");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <section id='contact' className="contact-section">
      <h3 className='mt-4'>CONTACT <span>ME</span></h3>

      <div className="contact">
        <div className="info">
          <h1>Let's Talk</h1>

          <p>Let's create something amazing together. Contact me.</p>

          <div className="address">
          <span>
          <i className='bx bxs-envelope'></i>
          <a href="mailto:riturajsinghgour8827@gmail.com" className='mail' target='_blank'>riturajsinghgour8827@gmail.com</a>
          </span>

          <span>
          <i className='bx bxs-phone-call' ></i>
          <a href="https://wa.me/8827151532" target='_blank'>+91-8827151532</a>
          </span>

          <span>
          <i className='bx bx-current-location'></i>
          <a>Indore, Madhya Pradesh, Bharat</a>
          </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
        <input className='form-control' type="text" name='name' placeholder="Enter your name" required/>
        <input className='form-control' type="email" name='email' placeholder="Enter your email" required/>
        <textarea name="message" id="" placeholder='Enter your message' className='form-control' rows={5} required/>
        <span>{result}</span>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </section>
  )
}

export default Contact