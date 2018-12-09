import React from 'react';
import PropTypes from 'prop-types';

const CollapsedInput = ({ value, onChange }) => {
  return (
    <input value={value} onChange={onChange} /> 
  );
};

CollapsedInput.propTypes = {
  
};

export default CollapsedInput;