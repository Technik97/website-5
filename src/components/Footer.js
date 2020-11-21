import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="footer-input"
                        />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/sign-up">Investors</Link>
                        <Link to="/sign-up">Terms of Service</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/sign-up">Sponsorships</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/sign-up">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/sign-up">Youtube</Link>
                        <Link to="/sign-up">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            SPACE
                            <i class="fas fa-meteor" />
                        </Link>
                    </div>
                    <small className="website-rights">SPACE © 2020</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i class = "fab fa-facebook" />
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i class = "fab fa-instagram" />
                        </Link>
                        <Link 
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i class = "fab fa-youtube" />
                        </Link>
                        <Link 
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i class = "fab fa-twitter" />
                        </Link>
                        <Link 
                            className="social-icon-link github"
                            to="/https://github.com/Technik97"
                            target="_blank"
                            aria-label="Github"
                        >
                            <i class = "fab fa-github" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
