import React from 'react';
import PropTypes from 'prop-types';

const UserName = ({ userName, handleChange }) => (
  <div>
    <input value={userName} onChange={handleChange} />
  </div>
);


UserName.propTypes = {
  userName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default UserName;
