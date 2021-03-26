import React from "react";
import {
  OverviewCardContainer,
  OverviewCardHeader,
  OverviewCardTitle,
  OverviewCardImg,
  OverviewCardContent,
  OverviewCardNumber,
  PercentContainer,
  OverviewArrow,
  OverviewPercent,
} from "./OverviewCard.elements";

const OverviewCard = ({ title, icon, number, arrow, percent, isArrowDown }) => {
  return (
    <>
      <OverviewCardContainer>
        <OverviewCardHeader>
          <OverviewCardTitle>{title}</OverviewCardTitle>
          <OverviewCardImg src={icon} />
        </OverviewCardHeader>

        <OverviewCardContent>
          <OverviewCardNumber>{number}</OverviewCardNumber>
          <PercentContainer>
            <OverviewArrow src={arrow}></OverviewArrow>
            <OverviewPercent isArrowDown={isArrowDown}>
              {percent}
            </OverviewPercent>
          </PercentContainer>
        </OverviewCardContent>
      </OverviewCardContainer>
    </>
  );
};

export default OverviewCard;
