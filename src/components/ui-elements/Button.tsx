import React from 'react';
import './button.less';

type Props = {
  buttonType?: string | undefined;
  buttonText?: string;
  buttonLink: string | undefined;
};

const Button: React.FC<Props> = (props) => {
  return (
    <a
      className={`carrier-card-btn ${props.buttonType}`}
      href={props.buttonLink}
      target="_blank"
    >
      {props.buttonType === 'buy' ? <Bolt /> : <ArrowDown />}
      <p>
        {props.buttonText || props.buttonType === 'buy'
          ? 'Buy Now'
          : 'Get Quote'}
      </p>
    </a>
  );
};

const Bolt = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 23.65 32.82">
      <path
        d="M7.1,32.82,10.64,21.1H0L16.55,0,13,11.72H23.65Z"
        fill="#fff"
      />
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg width="11px" height="14px" viewBox="0 0 11 14">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(6.000000, 7.000000) rotate(-90.000000) translate(-6.000000, -7.000000) translate(-1.000000, 1.000000)"
          fill="#fff"
        >
          <path d="M6.08,0.61 C6.06926826,0.757523774 6.00529945,0.896122863 5.9,1 L2.07,4.89 L13.37,4.89 C13.7068937,4.89 13.98,5.1631063 13.98,5.5 C13.98,5.8368937 13.7068937,6.11 13.37,6.11 L2.07,6.11 L5.9,10 C6.04748502,10.1764639 6.08318589,10.4208783 5.99233695,10.6321549 C5.90148801,10.8434315 5.69953328,10.985654 5.47,11 C5.29452425,11.0117825 5.12271449,10.945983 5,10.82 L0.18,5.93 C-0.0564451293,5.69208883 -0.0564451293,5.30791117 0.18,5.07 L0.18,5.07 L5,0.18 C5.17646389,0.0325149829 5.42087828,-0.00318588572 5.63215489,0.0876630545 C5.84343149,0.178511995 5.98565398,0.380466722 6,0.61 L6.08,0.61 Z" />
        </g>
      </g>
    </svg>
  );
};

export default Button;
