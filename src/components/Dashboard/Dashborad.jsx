import React from "react";
import {
  Container,
  HeaderWrapper,
  Header,
  HeaderCol,
  HeaderTitle,
  HeaderSubtitle,
  DashboardCards,
  ThemeTitle,
} from "./Dashboard.elements";

import Toggle from "../Toggle/Toggle";
import DashboardCard from "../DashboardCard/DashboardCard";
import cards from "../../components/Dashboard/DashboardCards.data";

const Dashborad = ({ theme, toggleTheme }) => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header>
            <HeaderCol>
              <HeaderTitle>Social Media Dashboard</HeaderTitle>

              <HeaderSubtitle>Total Followers: 23,004</HeaderSubtitle>
            </HeaderCol>

            <HeaderCol>
              <ThemeTitle>
                {theme === "light" ? "Dark Mode" : "Light Mode"}{" "}
              </ThemeTitle>

              <Toggle toggleTheme={toggleTheme} />
            </HeaderCol>
          </Header>
        </Container>
      </HeaderWrapper>
      <Container>
        <DashboardCards>
          {cards.map((card) => {
            return <DashboardCard {...card} />;
          })}
        </DashboardCards>
      </Container>
    </>
  );
};

export default Dashborad;
