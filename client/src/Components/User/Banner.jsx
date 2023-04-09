import React from 'react';

const Banner = ({ image }) => {
    return (
        <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100%',
        }}
      />
    );
};

export default Banner;
