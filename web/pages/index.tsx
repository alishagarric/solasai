// Core
import React from "react";

// Types
import { NextPage } from "next";
import { SimpleHero } from "../components/Sections/SimpleHero/SimpleHero";
import { ArrowModel } from "../components/Sections/ArrowModel";
import { BulletedSection } from "../components/Sections/BulletedSection";
import { CtaRow } from "../components/Sections/CtaRow";
import { ColumnIconBlocks } from "../components/Sections/BiColumnIcons";
import { Illuminate } from "../components/_svg/Icons/Illuminate";
import { OffsetImageSection } from "../components/Sections/OffsetImageSection";
import { Button } from "../components/Sections/Button";
import { PuzzleSection } from "../components/Sections/PuzzleSection";
import { BlurredItemsSection } from "../components/Sections/BlurredItemsSection";
import { BracketSection } from "../components/Sections/BracketSection";
import { MagnifyingGlass } from "../components/_svg/Icons/MagnifyingGlass";
import { WarningSection } from "../components/Sections/WarningSection";
import { InteractiveCards } from "../components/Sections/InteractiveCards";
import { SplitSection } from "../components/Sections/SplitSection";

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
      <SimpleHero 
        headline="Reduce your regulatory, legal, and reputational risk with" 
        guide_text="Learn More" 
        logo={true}
      />

      <OffsetImageSection 
        image="/img/graph.png"
        alt={"Understand and Resolve Disparity while Preserving Predictive Value of Your Model"}
        headline={"Understand and Resolve Disparity while Preserving Predictive Value of Your Model"}
      >
        <ColumnIconBlocks 
          icons={[
            { icon: <Illuminate/>, label: "Illuminate drivers of discrimination" },
            { icon: <Illuminate/>, label: "Illuminate drivers of discrimination" },
            { icon: <Illuminate/>, label: "Clarify drivers of predictive value" },
            { icon: <Illuminate/>, label: "Auto-generate fairer alternatives" },
          ]}
        />
        <Button label="Download Whitepaper" link="/" />
      </OffsetImageSection>


      <InteractiveCards 
        headline="How The SolasAI Platform Works"
        cta= {{
          label: "Download whitepaper",
          link: "/"
        }}
        card_sets={[
          {
            label: "Modeler",
            cards: [
              { front_text: "You are the best at building models for your company - We don’t ask you to change", back_text: "back text" },
              { front_text: "We take testing for discrimination off your plate so you can focus on predictive value for your company", back_text: "back text" },
              { front_text: "We provide you additional insight to make your model better", back_text: "back text" },
              { front_text: "We preserve and expand the great work you have done", back_text: "back text" },
              { front_text: "We generate the documentation and insights you need to choose the best, fair alternative for you business", back_text: "back text" }
            ]
          },
          {
            label: "Compliance / Legal",
            cards: [
              { front_text: "You are the best at building models for your company - We don’t ask you to change", back_text: "back text" },
              { front_text: "We take testing for discrimination off your plate so you can focus on predictive value for your company", back_text: "back text" },
              { front_text: "We provide you additional insight to make your model better", back_text: "back text" },
              { front_text: "We preserve and expand the great work you have done", back_text: "back text" },
              { front_text: "We generate the documentation and insights you need to choose the best, fair alternative for you business", back_text: "back text" }
            ]
          },
          {
            label: "Chief data officer",
            cards: [
              { front_text: "You are the best at building models for your company - We don’t ask you to change", back_text: "back text" },
              { front_text: "We take testing for discrimination off your plate so you can focus on predictive value for your company", back_text: "back text" },
              { front_text: "We provide you additional insight to make your model better", back_text: "back text" },
              { front_text: "We preserve and expand the great work you have done", back_text: "back text" },
              { front_text: "We generate the documentation and insights you need to choose the best, fair alternative for you business", back_text: "back text" }
            ]
          }
        ]}
      />

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

      <PuzzleSection 
        headline="Why SolasAI Is Different"
        sub_headline="SolasAI goes beyond Data Science"
        body={{__html: "We approach the problem from multiple sides, and which makes us a one-stop shop for fairer model reconstruction."}}
        puzzle_pieces={[
          "Business Needs",
          "Data Science & Technology",
          "Regulatory Requirements",
          "Legal Application"
        ]}
      />

      <BlurredItemsSection 
        body={{__html: "Competitors focus on one area of expertise, which leaves other important areas overlooked"}}
        focus_text="Data Science & Technology"
        blurred_text="Business Needs"
      />

      <BracketSection 
        headline="SolasAI leverages your existing models and production pipeline"
        icons={[
          { icon: <MagnifyingGlass/>, label: "Configurable Business Rules and Objectives" },
          { icon: <MagnifyingGlass/>, label: "Optimized, Fast, & Fair Search" },
          { icon: <MagnifyingGlass/>, label: "CRegulatory Expertise" },
          { icon: <MagnifyingGlass/>, label: "Explainable AI" },
        ]}
      />

      <WarningSection text="We don’t set out with the intention of reinventing or replacing your modeling process. We are not trying to be AutoML" />
      <SplitSection />
    </div>
  );
};

export default HomePage;
