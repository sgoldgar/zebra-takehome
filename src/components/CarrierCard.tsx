import React, { useState } from 'react';
import './carrier-card.less';
import VerifiedPriceBadge from './asset-components/VerifiedPriceBadge';
import IconStarGold from './asset-components/IconStarGold';
import IconChevron from './asset-components/IconChevron';
import CarrierFeatures from './CarrierFeatures';
import CarrierDescription from './CarrierDescription';
import Button from './ui-elements/Button';
import FeatureIcons from './ui-elements/FeatureIcons';
import { FeatureIcon } from './asset-components/FeatureIcons';

type Props = {
  featureList: string[];
  description: string;
  stars: number | null;
  carrierName: string;
  tag: string | null;
  featureIcons: FeatureIcon[] | null;
  showButton: boolean;
  price?: number | null;
  buttonType?: string | undefined;
  buttonLink?: string;
  buttonText?: string;
};

const CarrierCard: React.FC<Props> = (props) => {
  const canExpand = props.featureList || props.description;
  const [expandCard, setExpandCard] = useState<boolean>(false);
  const stars = [];
  if (props.stars) {
    for (var i = 0; i < props.stars; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      stars.push(<IconStarGold key={i} />);
    }
  }

  return (
    <div
      className="carrier-card"
      id={props.carrierName}
      onClick={() => (canExpand ? setExpandCard(!expandCard) : null)}
    >
      <div className="carrier-main-info">
        {props.tag &&
          props.tag.toLowerCase() === 'verified price' && (
            <VerifiedPriceBadge />
          )}
        <div className="carrier-info-container">
          <img
            src="../assets/logo-carrier-sm-default.png"
            alt={props.carrierName}
            className="carrier-logo"
          />
          <div className="name-and-rating">
            <p>{props.carrierName}</p>
            <div className="icons">
              {props.stars && stars}
              {props.featureIcons && (
                <FeatureIcons iconList={props.featureIcons} />
              )}
            </div>
          </div>
        </div>
        <div className="price-and-buy">
          <div className="price-container">
            {props.tag && <p className="price-tag">{props.tag}</p>}
            {props.price && (
              <React.Fragment>
                <p className="dollar-sign">$</p>
                <p className="price-amount">
                  {Math.round(props.price)}
                </p>
                <p className="per-month">/ mo</p>
              </React.Fragment>
            )}
          </div>
          {props.showButton && (
            <Button
              buttonType={props.buttonType}
              buttonLink={props.buttonLink}
              buttonText={props.buttonText}
            />
          )}
        </div>
      </div>
      {expandCard && (
        <div className="carrier-additional-details">
          {props.featureList && props.featureList.length > 0 && (
            <CarrierFeatures featureList={props.featureList} />
          )}
          {props.description && (
            <CarrierDescription
              description={props.description}
              carrierName={props.carrierName}
            />
          )}
        </div>
      )}
      {canExpand && <IconChevron up={expandCard === true} />}
    </div>
  );
};

export default CarrierCard;
