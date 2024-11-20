import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Okapi World</h2>
        <p>
          <a href="mailto:okapi@maeltha.com">okapi@maeltha.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I like {' '}
        <a href="https://de.wikipedia.org/wiki/Okapi">Okapis</a> but
        not to same extend
        Tapirs esp. <a href="https://de.wikipedia.org/wiki/Schabrackentapir">Schabrackentapirs</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/schaberbracken') ? (
            <Link to="/schaberbracken" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Okapis
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
