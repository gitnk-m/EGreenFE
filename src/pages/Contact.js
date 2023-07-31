import { useEffect, useState } from "react";
import './Contact.css'
import Alert from 'react-bootstrap/Alert';
import { ToastContainer, toast } from 'react-toastify';

export default function Contact(){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []);
      
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => {
          setWindowWidth((window.innerWidth*.8));
        };

        window.addEventListener('scroll', handleResize);

        return () => {
          window.removeEventListener('scroll', handleResize);
        };
      }, []);

      const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        location: '',
        message:''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Replace '/send-email' with your server's endpoint
          const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // console.log('Email sent successfully!');
            alert(`Our Team Will Contact You Soon...`);
            // Reset the form after successful submission
            setFormData({
              name: '',
              company: '',
              phone: '',
              email: '',
              location: '',
              message:''
            });
          } else {
            console.error('Error while sending email:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


    return(
        <>
          <div className='contactWrapper'>
            <div className='formContact'>
                <h2 className='formTitleContact'>Contact US</h2>
                <form className='contactformContainer' onSubmit={handleSubmit}>
                  <input 
                      type='text' 
                      placeholder='Name' 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                    />
                  <input 
                      type='text' 
                      placeholder='Company'
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange}
                      />
                    <input 
                      type='tel' 
                      placeholder='Phone number'
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                        />
                    <input 
                      type='email' 
                      placeholder='Email'
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      />
                    <input 
                      type='text' 
                      placeholder='Location'
                      name="location" 
                      value={formData.location} 
                      onChange={handleChange}
                      />
                    <input 
                      type='textarea' 
                      placeholder='Your Message'
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange}
                      />
                  <div className="submitContainer">
                    <input type='submit' className='submit' value='Get Connected'></input>
                  </div>
                </form> 
              </div>
          </div>
          <div className='mapContact'>
            <div className="walk">
              <h2>Our Location</h2>
            </div>
            <div className='mapConitainer'>
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2299.556671417953!2d79.1393384687387!3d12.952096376319325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47a08f26d0c1%3A0x69fe0505df1cc7cf!2sEVERGREEN%20SAFETY!5e0!3m2!1sen!2sin!4v1687852329867!5m2!1sen!2sin" 
                width={`${windowWidth}`} 
                height="500" 
                style={{border:'0'}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe> */}

              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.3088373872856!2d79.140642!3d12.952079!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47a08f26d0c1%3A0x69fe0505df1cc7cf!2sEVERGREEN%20SAFETY!5e0!3m2!1sen!2sin!4v1688636121240!5m2!1sen!2sin" 
              width={`${windowWidth}`} 
              height="500" 
              style={{border:"0"}}
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          
      </>
    );
}