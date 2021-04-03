// Core
import React from "react";

// Types
import { NextPage } from "next";
import { LargeText } from "../components/Sections/LargeText";
import { SimpleHero } from "../components/Sections/SimpleHero/SimpleHero";
import { ArrowModel } from "../components/Sections/ArrowModel";
import { BulletedSection } from "../components/Sections/BulletedSection";
import { CtaRow } from "../components/Sections/CtaRow";

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
      <SimpleHero headline="Reduce your regulatory, legal, and reputational risk with" guide_text="Learn More" logo={true}/>

      <BulletedSection 
        headline="Why does your business need a robust model fairness pipeline?"
        body={{__html: "<p>Multiple forces are converging.</p><p>Enterprises must gain deep insight into their predictive models.</p>"}}
        bullets={[
          "Test for discrimination",
          "Identify opportunities to improve fairness",
          "Provide clarity on trade-off decisions between business value and maximum fairness",
        ]}
      >
        <ArrowModel 
          items={[
            "Increased Model Usage",
            "Increased Model Risks",
            "Increased societal awareness",
            "Increased focus from regulators",
            "Regulators and courts looking to make precedents"
          ]}
        />
      </BulletedSection>

      <CtaRow 
        headline="Interested in learning more? Reduce your risk with fairer AI"
        cta={{
          label: "Contact us today",
          link: "/"
        }}
      />
    </div>
  );
};

export default HomePage;
