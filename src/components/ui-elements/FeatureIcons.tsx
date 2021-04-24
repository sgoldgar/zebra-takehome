import React from 'react';
import './feature-icons.less';
import {
  FeatureIcon,
  featureIconList,
} from '../asset-components/FeatureIcons';

type Props = {
  iconList: FeatureIcon[];
};

const FeatureIcons: React.FC<Props> = (props) => {
  return (
    <div className="feature-icons-container">
      {props.iconList.map((icon) => {
        return (
          <div
            key={featureIconList[icon]}
            dangerouslySetInnerHTML={{
              __html: featureIconList[icon],
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FeatureIcons;
