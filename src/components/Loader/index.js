import React from 'react';
import loadersrc from '../../assets/giphy.gif';

const Loader = props => (
  <div>
    <img
      style={{width: 100}}
      alt='Loader icon'
      src={loadersrc}
      />
  </div>
);

export default Loader;
