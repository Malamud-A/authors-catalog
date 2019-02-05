import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({ size, className }) => (
  <svg className={className} version="1.1" height={size} width={size} viewBox="0 0 100 100">
    <line x1="25" x2="75" y1="0" y2="50" vectorEffect="non-scaling-stroke" />
    <line x1="25" x2="75" y1="100" y2="50" vectorEffect="non-scaling-stroke" />
  </svg>
);

Chevron.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

Chevron.defaultProps = {
  className: '',
  size: 10,
};

export default Chevron;
