import React from 'react';
import './icon-chevron.less';

const IconChevron = (props) => {
  return (
    <div className={`chevron ${props.up ? 'up' : 'down'}`}>
      <svg width="20" height="10" viewBox="0 0 11.67 6.04">
        <polygon
          points="5.89 6.04 0 0.74 0.67 0 5.88 4.69 11 0 11.67 0.74 5.89 6.04"
          fill="#959595"
        />
      </svg>
    </div>
  );
};

export default IconChevron;
