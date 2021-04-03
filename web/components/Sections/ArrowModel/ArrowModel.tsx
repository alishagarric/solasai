// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  ArrowModelClassName,
  ArrowModelStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_ArrowModel = {
  items: string[];
};

/**
 *
 * @name ArrowModel
 * @author Alisha Garric
 * @requires /studio/sections/ArrowModel
 *
 */
export const ArrowModel: React.FunctionComponent<LMNTS_Section_ArrowModel> = ({
  items,
}) => {

  return (
    <ArrowModelStyle className={`${ArrowModelClassName}`}>
      <Inner className={`${ArrowModelClassName}__inner`}>
        {items.map((item, idx) => {
          return (
            <p key={idx}>{item}</p>
          )
        })}
      </Inner>
    </ArrowModelStyle>
  );
};

// End Component
// __________________________________________________________________________________________
