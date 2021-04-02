// Core
import React from "react";

// Types
import { NextPage } from "next";
import { LargeText } from "../components/Sections/LargeText";
import { SimpleHero } from "../components/Sections/SimpleHero/SimpleHero";

// Begin Component
// __________________________________________________________________________________________

type HomePage = {};

export const HomePageClassName = "homepage";

/**
 *
 * @name HomePage
 * @author Alisha Garric
 *
 */
const HomePage: NextPage<HomePage> = () => {
  return (
    <div className={`${HomePageClassName}`}>
      <SimpleHero headline="Reuce your regulatory, legal, and reputational risk with" guide_text="Learn More" logo={true}/>
    </div>
  );
};

export default HomePage;
