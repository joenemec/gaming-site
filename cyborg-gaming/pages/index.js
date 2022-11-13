import { Fragment } from "react";

import Section from "../components/ui/Section";

import HeroHome from "../components/home-components/HeroHome";
import PopularHome from "../components/home-components/PopularHome";

import LibraryHome from "../components/home-components/LibraryHome";

const HomePage = () => {
  return (
    <Section>
      <Fragment>
        <HeroHome />
        <PopularHome />
        <LibraryHome />
      </Fragment>
    </Section>
  );
};

export default HomePage;
