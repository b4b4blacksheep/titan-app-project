import React from 'react';
import PropTypes from 'prop-types';

import '../assets/customBlkButton/styles.css'

const CustomBlkButton = ({ label, onClick, type, disabled, variant, customClass }) => {
  return (
    <button
      className={`custom-button ${variant} ${customClass}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};


CustomBlkButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
};

CustomBlkButton.defaultProps = {
  type: 'button',
  disabled: false,
  variant: 'default',
};

export default CustomBlkButton;
