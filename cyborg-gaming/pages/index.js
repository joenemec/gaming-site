import { Fragment } from "react";

import Section from "../components/ui/Section";

import HeroHome from "../components/home-components/HeroHome";

const HomePage = () => {
  return (
    <Section>
      <Fragment>
        <HeroHome />
      </Fragment>
    </Section>
  );
};

export default HomePage;
