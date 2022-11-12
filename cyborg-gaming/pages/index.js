import { Fragment } from "react";

import Section from "../components/ui/Section";

import HeroHome from "../components/home-components/HeroHome";
import PopularHome from "../components/home-components/PopularHome";

const HomePage = () => {
  return (
    <Section>
      <Fragment>
        <HeroHome />
        <PopularHome />
      </Fragment>
    </Section>
  );
};

export default HomePage;
