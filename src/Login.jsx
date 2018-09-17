import React from 'react';
import PropTypes from 'prop-types';

const UserName = ({ userName, handleChange }) => (
  <div>
    <p>
      User Name:
      <input type="text" value={userName} onChange={handleChange} />
    </p>
  </div>
);


UserName.propTypes = {
  userName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const Password = ({ password, handleChange }) => (
  <div>
    <p>
      Password:
      <input type="password" value={password} onChange={handleChange} />
    </p>
  </div>
);
Password.propTypes = {
  password: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default {
  UserName,
  Password,
};
