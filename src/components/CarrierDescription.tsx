import React from 'react';
import DescriptionIcon from './asset-components/DescriptionIcon';
import './carrier-description.less';

const CarrierDescription = (props) => {
  return (
    <div className="carrier-description">
      <span className="title">
        <DescriptionIcon />
        <p>Why {props.carrierName}?</p>
      </span>
      <hr></hr>
      <p className="description-text">{props.description}</p>
    </div>
  );
};

export default CarrierDescription;
