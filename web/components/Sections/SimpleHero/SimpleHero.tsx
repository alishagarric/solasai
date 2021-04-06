// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Birds/Bird";
import { Fire } from "../../_svg/Icons/Fire";
import { Logotype } from "../../_svg/Logos/Logotype";
import { Button } from "../Button";

// Styles
import {
  SimpleHeroClassName,
  SimpleHeroStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_SimpleHero = {
  headline?: string;
  logo?: boolean;
  guide_text?: string;
  cta?: {
    link: string;
    label: string;
    target?: string;
  }
};

/**
 *
 * @name SimpleHero
 * @author Alisha Garric
 * @requires /studio/sections/SimpleHero
 *
 */
export const SimpleHero: React.FunctionComponent<LMNTS_Section_SimpleHero> = ({
  headline,
  logo,
  guide_text,
  cta
}) => {

  return (
    <SimpleHeroStyle className={`${SimpleHeroClassName}`} id="top">
      <Inner className={`${SimpleHeroClassName}__inner`}>
        <Bird />

        <div className={`${SimpleHeroClassName}__grid`}>
          <div className={`${SimpleHeroClassName}__grid__text`}>
            <Fire />
            {headline && <h1 className={`${SimpleHeroClassName}__grid__text__headline`}>{headline}</h1>}
            {logo && <Logotype />}
          </div>

          { (guide_text || cta) && 
            <p className={`${SimpleHeroClassName}__grid__guide txt-caption`}>
              <span>{guide_text}</span>
              {cta &&
                <Button link={cta.link} label={cta.label} target={cta.target} />
              }
            </p>
          }
        </div>
      </Inner>
    </SimpleHeroStyle>
  );
};

// End Component
// __________________________________________________________________________________________
