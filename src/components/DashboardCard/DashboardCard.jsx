import React from "react";
import {
  Card,
  SocialAccount,
  SocialIcon,
  AccountName,
  SocialNumbers,
  SocialTitle,
  SocialUpDown,
  ArrowIcon,
  SocialDaily,
} from "./DashboardCard.elements";

const DashboardCard = ({
  socialIcon,
  socialAccount,
  socialNumbers,
  socialTitle,
  arrow,
  socialTodayNumbers,
  borderTopColor,
  isBorderGradient,
  borderTopColorFrom,
  borderTopColorTo,
  isSocialTodayDown,
}) => {
  return (
    <>
      <Card
        borderTopColor={borderTopColor}
        borderTopColorFrom={borderTopColorFrom}
        borderTopColorTo={borderTopColorTo}
        isBorderGradient={isBorderGradient}
      >
        <SocialAccount>
          <SocialIcon src={socialIcon} alt="Social Icon" />
          <AccountName>{socialAccount}</AccountName>
        </SocialAccount>

        <SocialNumbers>{socialNumbers}</SocialNumbers>

        <SocialTitle>{socialTitle}</SocialTitle>

        <SocialUpDown>
          <ArrowIcon src={arrow} alt={"Arrow"} />
          <SocialDaily isSocialTodayDown={isSocialTodayDown}>
            {socialTodayNumbers}
          </SocialDaily>
        </SocialUpDown>
      </Card>
    </>
  );
};

export default DashboardCard;
