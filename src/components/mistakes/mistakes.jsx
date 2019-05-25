import React from 'react';
import PropTypes from 'prop-types';

const Mistakes = ({mistakes}) => <div className="game__mistakes">
  {[...new Array(mistakes)].map((it, i) => <div className="wrong" key={`life-${i}`} />)}
</div>;

Mistakes.propTypes = {
  mistakes: PropTypes.number.isRequired,
};

export default Mistakes;
