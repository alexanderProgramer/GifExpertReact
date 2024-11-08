import PropTypes from 'prop-types';
import React from 'react';

export const GifItem = ({title, url}) => {
    //console.log({title, url});
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GifItem.prototypes = {
  title: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired
}
