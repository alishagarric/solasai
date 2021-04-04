// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";
import { Button } from "../Button";

// Styles
import {
  InteractiveCardsClassName,
  InteractiveCardsStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_InteractiveCards = {
  headline?: string;
  cta?: {
    link: string;
    label: string;
    target?: string;
  }
  card_sets: {
    label: string;
    cards: {
      front_text: string;
      back_text: string;
    }[];
  }[];
};

/**
 *
 * @name InteractiveCards
 * @author Alisha Garric
 * @requires /studio/sections/InteractiveCards
 *
 */
export const InteractiveCards: React.FunctionComponent<LMNTS_Section_InteractiveCards> = ({
  cta,
  card_sets,
  headline
}) => {

  return (
    <InteractiveCardsStyle className={`${InteractiveCardsClassName}`}>
      <Inner>
        <Bird />
        <h2 className={`${InteractiveCardsClassName}__headline`}>{headline}</h2>

        <div className={`${InteractiveCardsClassName}__header`}>
          {card_sets && card_sets.length > 0 &&
            <nav className={`${InteractiveCardsClassName}__header__card-sets-nav`}>
              {card_sets.map((set, idx) => {
                return (
                  <div key={idx} className={`${InteractiveCardsClassName}__header__card-sets-nav__item`}>
                    <Button label={set.label} />
                  </div>
                );
              })}
            </nav>
          }
          {cta &&
            <>{/*<Button link={cta.link} label={cta.label} target={cta.target} />*/}</>
          }
        </div>

        {card_sets && card_sets.length > 0 &&
          <div className={`${InteractiveCardsClassName}__card-sets`}>
            {card_sets.map((set, idx) => {
              return (
                <div key={idx} className={`${InteractiveCardsClassName}__card-sets__cards`}>
                  {set.cards && set.cards.length > 0 && set.cards.map((card, idxx) => {
                    return (
                      <div key={idxx} className={`${InteractiveCardsClassName}__card-sets__cards__card`}>
                        <div>Step</div>
                        <div>{idxx}</div>
                        <p>{card.front_text}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        }
      </Inner>
    </InteractiveCardsStyle>
  );
};

// End Component
// __________________________________________________________________________________________
