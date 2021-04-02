// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  SimpleHeroClassName,
  SimpleHeroStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_SimpleHero = {
  text: string;
};

/**
 *
 * @name SimpleHero
 * @author Alisha Garric
 * @requires /studio/sections/SimpleHero
 *
 */
export const SimpleHero: React.FunctionComponent<LMNTS_Section_SimpleHero> = ({
  text,
}) => {

  return (
    <SimpleHeroStyle className={`${SimpleHeroClassName}`}>
      <Inner className={`${SimpleHeroClassName}__inner`}>
        <p>{text}</p>
      </Inner>
    </SimpleHeroStyle>
  );
};

// End Component
// __________________________________________________________________________________________
