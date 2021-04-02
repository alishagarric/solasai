// Core
import React from "react";
import { Inner } from "../../Inner";
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
        {headline && <h1>{headline}</h1>}
        {logo && <Logotype />}
        {guide_text && <p>{guide_text}</p>}
      </Inner>
    </SimpleHeroStyle>
  );
};

// End Component
// __________________________________________________________________________________________
