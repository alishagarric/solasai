// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";
import { Fire } from "../../_svg/Fire/Fire";
import { Logotype } from "../../_svg/Logotype/Logotype";

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
  guide_text
}) => {

  return (
    <SimpleHeroStyle className={`${SimpleHeroClassName}`}>
      <Inner className={`${SimpleHeroClassName}__inner`}>
        <Bird />

        <div className={`${SimpleHeroClassName}__grid`}>
          <div className={`${SimpleHeroClassName}__grid__text`}>
            <Fire />
            {headline && <h1 className={`${SimpleHeroClassName}__grid__text__headline`}>{headline}</h1>}
            {logo && <Logotype />}
          </div>

          {guide_text && <p className={`${SimpleHeroClassName}__grid__guide txt-caption`}><span>{guide_text}</span></p>}
        </div>
      </Inner>
    </SimpleHeroStyle>
  );
};

// End Component
// __________________________________________________________________________________________
