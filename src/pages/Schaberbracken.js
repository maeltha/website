import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Schaberbracken/Education';

import degrees from '../data/schaberbracken/degrees';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
};

const Schaberbracken = () => (
  <Main
    title="Schaberbracken"
    description="My Schaberbrackens on Planet"
  >
    <article className="post" id="schaberbracken">
      <header>
        <div className="title">
          <h2>
            <Link to="schaberbracken">Schaberbracken</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Schaberbracken;
