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
            In the heart of the forest, where shadows play, <br />
            Lives the elusive okapi, hidden away. <br />
            It has great stripes, something on the ball <br />
            it changed the F-Scale of Kirkpatrick for Big Wall
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome and do not hesitate {' '} to help improve <br />
        <Link to="/about"> - about </Link> <br />   {' '}
        <Link to="/schaberbracken"> - schaberbracken</Link><br />
        <Link to="/okapi"> - okapi</Link>{' '} <br />
        <Link to="/stats"> - site statistics</Link>
      </p>
      <p>
        {' '}
        Source code available{' '}
        <a href="https://github.com/maeltha/website">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
