import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      'Oh Okapi personal space. Desert based '
      + 'co-founder of S-Tapir Detection Monitor'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About Okapi</Link>
          </h2>
          <p>
            In the heart of the forest, where shadows play,
            Lives the elusive okapi, hidden away.
            With stripes like a zebra and ears so divine,
            It roams through the trees, where the sun always shines.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/schaberbracken">schaberbracken</Link>, <Link to="/okapi">okapi</Link>,{' '}
        view <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
      <p>
        {' '}
        Source available{' '}
        <a href="https://github.com/maeltha/website">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
