import React from 'react';
import PropTypes from 'prop-types';
//import "@material/image-list/mdc-image-list";
//import "@material/image-list/mdc-image-list";

const ImageList = ({src, height, width}) => {
  return (
    <div>
            <img class="mdc-image-list__image" src={src} height={height} width={width} />
    </div>
      )
    }


    export default ImageList;

