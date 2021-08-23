import React from 'react';
import FooterLink from '../Footer/FooterLink';
import Header from '../Header/Header';

import './Contact.css'
import contactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import instagram from './../../assets/in.png'
import medium from './../../assets/me.png'
import web from './../../assets/web.png'


const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Get in touch"
                details="Intrested to collaborate? Feel free to drop me an email"
            />
            {/* form */}
            <div className="contact-form-container">
                <form className="contact-form"
                    action="https://formspree.io/f/mrgrojvj"
                    method="POST" >

                    <input type="email"
                        placeholder="Your Email id"
                        name="_replyto"
                        className="input-box email-input"
                         />

                    <textarea type="text"
                        placeholder="Your Message"
                        name="message"
                        className="input-box body-input">
                    </textarea>

                    <button type="submit" className="contact-btn">
                        Send Email
                    </button>


                </form>
            </div>







            <div className="social-icons-container">
                <a href="https://github.com/aniket787" className="social-icon">
                    <img src={github} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/aniket-gaikwad-7379111a9/" className="social-icon">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/aniket787" className="social-icon">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="https://github.com/aniket787" className="social-icon">
                    <img src={medium} alt="medium" />
                </a>
                <a href="https://github.com/aniket787" className="social-icon">
                    <img src={web} alt="web" />
                </a>
            </div>


            <FooterLink
                phrase="Read more " toAddress="/about" link="about me   "
            />

            <div className="vector-frame">
                <img src={contactVector} alt="contact" className="about-vector" />

            </div>
        </div>
    )
}
export default Contact;