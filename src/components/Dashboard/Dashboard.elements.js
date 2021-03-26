import styled from "styled-components";
import { colors } from "../../Themes/themes";

//Container
export const Container = styled.div`
  width: 100%;
  max-width: 88%;
  margin: 0 auto;
  padding: 3rem 0 8rem;
`;

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.topBackgroundPattern};
  border-radius: 0 0 1.5rem 1.5rem;
`;

//Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const HeaderCol = styled.div`
  flex: 1;
  flex-basis: 50%;
  display: flex;
  flex-direction: column;

  &:nth-child(1) {
    border-bottom: 1px solid ${({ theme }) => theme.textSecondary};
    padding-bottom: 3rem;
  }

  &:nth-child(2) {
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    padding: 2rem 0;
  }

  @media screen and (max-width: 768px) {
    &:nth-child(2) {
      justify-content: space-between;
    }
  }

  @media screen and (min-width: 768px) {
    &:nth-child(1) {
      border-bottom: none;
    }
  }
`;

//Header Title
export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

//Header Subtitle
export const HeaderSubtitle = styled.h3`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1.3rem;
`;

//Theme Title
export const ThemeTitle = styled(HeaderSubtitle)`
  margin-right: 1.5rem;
`;

//Dashboard Cards
export const DashboardCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  top: -8rem;
`;
