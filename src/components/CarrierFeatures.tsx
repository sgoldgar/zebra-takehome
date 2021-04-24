import React from 'react';
import DetailsIcon from './asset-components/DetailsIcon';
import './carrier-features.less';

type Props = {
  featureList: string[];
};

const CarrierFeatures: React.FC<Props> = (props) => {
  return (
    <div className="carrier-features">
      <span className="title">
        <DetailsIcon />
        <p>Features</p>
      </span>
      <hr></hr>
      <div className="feature-list">
        <ul>
          {props.featureList.map((feature, i) => {
            return <li key={feature + i}>{feature}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CarrierFeatures;
