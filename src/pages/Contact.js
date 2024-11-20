import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Okapi via email @ hi@maeltha.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch via PR</p>
        <p>(infrasound will only work for top-notchers)</p>
      </div>
      <ContactIcons />
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/images/infra.png`} alt="Infra" />
      </div>
    </article>
  </Main>
);

export default Contact;
