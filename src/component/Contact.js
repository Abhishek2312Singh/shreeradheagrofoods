import React,{useEffect, useState} from 'react'

function Contact() {
  const [userName,setUsername] = useState("")
  const [contact,setContact] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")


  const handleSubmit = async (e)=>{
    e.preventDefault();

    const data = {
      userName,
      contact,
      email,
      message,
    };
    try{
      const response = await fetch("http://localhost:80/userquery",{
        method: "Post",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.text();
      console.log(JSON.stringify(data))
      console.log(result);
      alert(result);
    }
    catch(error){
      console.error("Error:",error);
    }
  };

  useEffect(()=>{
            document.title="Shri Radhe Agro Food - Contact"
  })
  return (
    <><section id="contact" className="contact section">

      <div className="container section-title" >
        <h2>Contact</h2>
        <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
      </div>

      <div className="container" >

        <div className="mb-5">
          <iframe style={{width: "100%", height: "400px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen=""></iframe>
        </div>

        <div className="row gy-4">

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>C282, Vijay Nagar, Ghaziabad, 201009</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 7701933308</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>info@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-clock flex-shrink-0"></i>
              <div>
                <h3>Opening Hours<br/></h3>
                <p><strong>Mon-Sat:</strong> 09AM - 09PM; <strong>Sunday:</strong> Closed</p>
              </div>
            </div>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="php-email-form" >
          <div className="row gy-4">

            <div className="col-md-6">
              <input type="text" name="name" className="form-control" value={userName} onChange={(e)=>{setUsername(e.target.value)}} placeholder="Your Name" required=""/>
            </div>

            <div className="col-md-6 ">
              <input  type="text" 
  inputMode="numeric"  pattern="[0-9]*"  className="form-control" value={contact} onChange={(e)=>{
                setContact(e.target.value)}} name="contact" placeholder="Your Contact" required=""/>
            </div>

            <div className="col-md-12">
              <input type="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Your Email" style={{color:'gray'}} required=""/>
            </div>

            <div className="col-md-12">
              <textarea className="form-control" name="message" value={message} onChange={(e)=>{setMessage(e.target.value)}} rows="6" placeholder="Message" required=""></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>

      </div>

    </section>
    </>
  )
}

export default Contact