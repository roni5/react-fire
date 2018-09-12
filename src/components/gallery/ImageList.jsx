import React from 'react';
//import PropTypes from 'prop-types';


const ImageList = ({src, height, width}) => {
  return (
    <div>
            <img class="mdc-image-list__image" src={src} height={height} width={width} />
    </div>
      )
    }


    export default ImageList;

