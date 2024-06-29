// YourComponentFile.js
import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, age, des, src }) { 

  return (
    <div className="card">
      <img src={src} alt="card-img" height='250px'></img>
      <h1>{name}</h1>
      <h3>{des}</h3>
      <h1>{age}</h1>
    </div>
  );
}

// Define the board component
function Board() {
  return (
    <div className="card">
      <p>Done</p>
    </div>
  );
}

Card.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    des: PropTypes.string,
    src: PropTypes.string,
}

Card.defaultProps = {
    name: 'User Unknown',
    age: '0',
    des: 'not provided',
    src: 'https://cdn4.sharechat.com/compressed_gm_40_img_524534_160d2cdb_1694323521978_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=978_sc.jpg',
}

export { Card, Board };
