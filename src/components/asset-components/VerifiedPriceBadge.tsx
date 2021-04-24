import React from 'react';
import './verified-price-badge.less';

const VerifiedPriceBadge = () => {
  return (
    <div className="verified-price-badge">
      <svg width="15.6" height="14.99" viewBox="0 0 15.6 14.99">
        <path
          d="M7.8,0,9.95,5.31l5.66.42-4.33,3.7L12.62,15,7.8,12,3,15,4.33,9.42,0,5.73l5.66-.42Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default VerifiedPriceBadge;