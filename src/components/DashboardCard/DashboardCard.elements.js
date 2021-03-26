import styled from "styled-components";
import { colors } from "../../Themes/themes";

//Card
export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.cardBackground};
  width: 100%;
  border-radius: 0.5rem;
  position: relative;
  border-top: 6px solid ${({ borderTopColor }) => borderTopColor};
  margin-bottom: 2rem;

  &::after {
    position: absolute;
    top: -6px;
    left: 0;
    width: 100%;
    height: 6.444px;
    background: ${({
      isBorderGradient,
      borderTopColorFrom,
      borderTopColorTo,
    }) =>
      isBorderGradient &&
      `linear-gradient(
      101deg,
      ${borderTopColorFrom} 15%,
      ${borderTopColorTo} 72%
    )`};
    content: "";
    border-radius: 0.3rem 0.3rem 0 0;
    opacity: ${({ isBorderGradient }) => (isBorderGradient === true ? 1 : 0)};
  }

  /* Media for tablettes */
  @media screen and (min-width: 768px) {
    width: 48%;
  }

  /* Media for Desktop */
  @media screen and (min-width: 992px) {
    width: 23%;
  }
`;

//Social Account
export const SocialAccount = styled.a`
  display: flex;
  align-items: flex-end;
  margin: 3rem 0 2rem;
`;

//Social Icon
export const SocialIcon = styled.img`
  width: 25px;
  margin-right: 0.6rem;
`;

//Account Name
export const AccountName = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 700;
`;

//Social Numbers
export const SocialNumbers = styled.span`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

//Social Title
export const SocialTitle = styled.span`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.4rem;
`;

//Social UpDown
export const SocialUpDown = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0;
`;

//Arrow Icon
export const ArrowIcon = styled.img`
  width: 1rem;
  height: 0.6rem;
`;

//Social Daily
export const SocialDaily = styled.span`
  margin-left: 0.5rem;
  color: ${({ isSocialTodayDown }) =>
    isSocialTodayDown ? colors.brightRed : colors.limeGreen};
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: -2px;
`;
