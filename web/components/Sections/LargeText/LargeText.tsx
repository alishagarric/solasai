// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  LargeTextClassName,
  LargeTextStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_LargeText = {
  text: string;
};

/**
 *
 * @name LargeText
 * @author Alisha Garric
 * @requires /studio/sections/LargeText
 *
 */
export const LargeText: React.FunctionComponent<LMNTS_Section_LargeText> = ({
  text,
}) => {

  return (
    <LargeTextStyle className={`${LargeTextClassName}`}>
      <Inner className={`${LargeTextClassName}__inner`}>
        <p>{text}</p>
      </Inner>
    </LargeTextStyle>
  );
};

// End Component
// __________________________________________________________________________________________
