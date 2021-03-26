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
  OverviewCards,
  OverviewTitle,
  OverviewCol,
} from "./Dashboard.elements";

import Toggle from "../Toggle/Toggle";
import DashboardCard from "../DashboardCard/DashboardCard";
import cards from "../../components/Dashboard/DashboardCards.data";
import {
  overviewCardsCol1,
  overviewCardsCol2,
} from "../../components/Dashboard/OverviewCards.data";
import OverviewCard from "../OverviewCard/OverviewCard";

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
          {cards.map((card, i) => {
            return <DashboardCard key={i.toString()} {...card} />;
          })}
        </DashboardCards>
      </Container>

      <Container>
        <OverviewCards>
          <OverviewTitle>Overview - Today</OverviewTitle>
          <OverviewCol>
            {overviewCardsCol1.map((overviewCard, i) => {
              return <OverviewCard key={`${i}`} {...overviewCard} />;
            })}
          </OverviewCol>

          <OverviewCol>
            {overviewCardsCol2.map((overviewCard, i) => {
              return <OverviewCard key={`${i}`} {...overviewCard} />;
            })}
          </OverviewCol>
        </OverviewCards>
      </Container>
    </>
  );
};

export default Dashborad;
