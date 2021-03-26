import styled from "styled-components";
import { colors } from "../../Themes/themes";
//Overview Card
export const OverviewCardContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.cardBackground};
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;

  /* Media for tablettes */
  @media screen and (min-width: 768px) {
    width: 48%;
  }

  /* Media for Desktop */
  @media screen and (min-width: 992px) {
    width: 23%;
  }
`;

//Overview Card Header
export const OverviewCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

//Overview Card Title
export const OverviewCardTitle = styled.h3`
  color: ${({ theme }) => theme.textSecondary};
`;

//Overview Card Img
export const OverviewCardImg = styled.img`
  width: 2rem;
`;

//Overview Card Content
export const OverviewCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

//Overview Card Number
export const OverviewCardNumber = styled.span`
  font-size: 3rem;
  font-weight: 700;
`;

//Percent Container
export const PercentContainer = styled.div`
  display: flex;
  align-items: center;
`;

//Overview Arrow
export const OverviewArrow = styled.img`
  width: 0.8rem;
  height: 0.5rem;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
`;

//Overview Percent
export const OverviewPercent = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ isArrowDown }) =>
    isArrowDown ? colors.brightRed : colors.limeGreen};
`;
