import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Okapi/Cell';
import data from '../data/okapi';

const Okapi = () => (
  <Main title="Okapi" description="Learn about okapis.">
    <article className="post" id="okapi">
      <header>
        <div className="title">
          <h2>
            <Link to="/okapi">Okapi</Link>
          </h2>
          <p>Nur eins findet Kekulé zum koooo...</p>
        </div>
      </header>
      {data.map((okapi) => (
        <Cell data={okapi} key={okapi.title} />
      ))}
    </article>
  </Main>
);

export default Okapi;
