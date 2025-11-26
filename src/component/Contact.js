import React,{useEffect, useState} from 'react'

function Contact() {
  const [userName,setUsername] = useState("")
  const [contact,setContact] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [emailError, setEmailError] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [phoneError, setPhoneError] = useState("")
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
  const [isPhoneValid, setIsPhoneValid] = useState(false)

  // Email validation function
  const validateEmail = (email) => {
    // Simple validation: must contain @ and . characters
    return email.includes('@') && email.includes('.');
  };

  // Phone validation function
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Handle email change (no validation on change, only on submit)
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError("");
    }
    
    // Set validation status for visual feedback
    if (emailValue === "") {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(validateEmail(emailValue));
    }
  };

  // Handle phone change with validation
  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setContact(phoneValue);
    
    if (phoneValue === "") {
      setPhoneError("");
      setIsPhoneValid(false);
    } else if (!validatePhone(phoneValue)) {
      setPhoneError("Please enter a valid phone number");
      setIsPhoneValid(false);
    } else {
      setPhoneError("");
      setIsPhoneValid(true);
    }
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    // Validate all fields are filled
    if (!userName || userName.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (!contact || contact.trim() === "") {
      setPhoneError("Please enter your contact number");
      return;
    }

    // Check if phone is valid before submitting
    if (!validatePhone(contact) || contact === "") {
      setPhoneError("Enter a valid phone number");
      return;
    }

    // Check if email is valid before submitting
    if (!email || email.trim() === "") {
      setEmailError("Please enter your email address");
      return;
    }

    if (!validateEmail(email) || email === "") {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (!message || message.trim() === "") {
      alert("Please enter your message");
      return;
    }

    const data = {
      userName,
      contact,
      email,
      message,
    };
    try{
      const response = await fetch("https://api.shriradheagrofoods.com/add",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'omit',
        mode: 'cors',
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        setSubmitStatus({
          type: 'danger',
          message: `Failed to send message. Error: ${response.status} - ${errorText || 'Please try again later.'}`
        })
        return;
      }
      
      const result = await response.text();
      setSubmitStatus({
        type: 'success',
        message: result || 'Your message has been sent successfully.'
      })
      
      // Clear form on success
      setUsername("");
      setContact("");
      setEmail("");
      setMessage("");
      setEmailError("");
      setPhoneError("");
    }
    catch(error){
      setSubmitStatus({
        type: 'danger',
        message: "Network error. Please check your connection and try again."
      })
    }
  };

  useEffect(()=>{
    document.title="Contact Us - Shri Radhe Agro Foods";
    
    // Add meta tags for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Shri Radhe Agro Foods for premium potato flakes and milled products. Located in Mathura, India. Call +91-7500054446 or email sragrofoods2021@gmail.com');
    }
    
    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://shriradheagrofoods.com/contact';
  })
  return (
    <><section id="contact" className="contact section">

      <div className="container section-title" >
        <h2>Contact</h2>
        <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
      </div>

      <div className="container" >

        {/* <div className="mb-5">
          <iframe 
            style={{width: "100%", height: "400px"}} 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" 
            frameBorder="0" 
            allowFullScreen=""
            title="Shri Radhe Agro Foods Location Map"
          ></iframe>
        </div> */}

        <div className="row gy-4">

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Shahpur Gosna, NH-530B, Mathura - 281204</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 7500054446</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" >
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>sragrofoods2021@gmail.com</p>
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
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                value={userName} 
                onChange={(e)=>{setUsername(e.target.value)}} 
                placeholder="Your Name *" 
                required
              />
            </div>

            <div className="col-md-6 ">
              <input  
                type="text" 
                inputMode="numeric"  
                pattern="[0-9]*"  
                className={`form-control ${phoneError ? 'is-invalid' : isPhoneValid ? 'is-valid' : ''}`}
                value={contact} 
                onChange={handlePhoneChange}
                name="contact" 
                placeholder="Your Contact *" 
                maxLength="10"
                required
              />
              {phoneError && (
                <div className="invalid-feedback" style={{display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem'}}>
                  {phoneError}
                </div>
              )}
              {isPhoneValid && !phoneError && (
                <div className="valid-feedback" style={{display: 'block', color: '#198754', fontSize: '0.875rem', marginTop: '0.25rem'}}>
                  ✓ Valid phone number
                </div>
              )}
              
            </div>

            <div className="col-md-12">
              <input 
                type="email" 
                className={`form-control ${emailError ? 'is-invalid' : isEmailValid ? 'is-valid' : ''}`}
                value={email} 
                onChange={handleEmailChange}
                name="email" 
                placeholder="Your Email *" 
                style={{color:'gray'}} 
                required
              />
              {emailError && (
                <div className="invalid-feedback" style={{display: 'block', color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem'}}>
                  {emailError}
                </div>
              )}
            </div>

            <div className="col-md-12">
              <textarea 
                className="form-control" 
                name="message" 
                value={message} 
                onChange={(e)=>{setMessage(e.target.value)}} 
                rows="6" 
                placeholder="Message *" 
                required
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              {submitStatus.message && (
                <div className={`alert alert-${submitStatus.type}`} role="alert">
                  {submitStatus.message}
                </div>
              )}
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