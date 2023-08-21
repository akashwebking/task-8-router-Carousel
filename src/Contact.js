import React from 'react'
import './contact.css';
function Contact(){
    return(
    <div>
        <h1>Contact</h1>
        <div className='box'>
            <div className="contact">
                <form action="">
                    <label><input type="text" placeholder='Enter Your Name'/></label>
                    <label><input type="text" placeholder='Enter Your Email' /></label>
                    <label><input type="text"  placeholder='Enter your mobile number'/></label>
                    {/* <input type="submit" value="submit" /> */}
                    <button>submit</button>
                    
                </form>

            </div>
        </div>
    </div>       
    )

}

export default Contact;