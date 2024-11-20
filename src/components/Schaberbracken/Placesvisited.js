import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Placesvisited/Degree';

const Placesvisited = ({ data }) => (
  <div className="placesvisited">
    <div className="link-to" id="placesvisited" />
    <div className="title">
      <h3>Places visited</h3>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.school} />
    ))}
  </div>
);

Placesvisited.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.number,
    }),
  ),
};

Placesvisited.defaultProps = {
  data: [],
};

export default Placesvisited;
