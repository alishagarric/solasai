// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";

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
      {items.map((item, idx) => {
        return (
          <div key={idx} className={`${ArrowModelClassName}__item`}>
            <p>{item}</p>
          </div>
        )
      })}
    </ArrowModelStyle>
  );
};

// End Component
// __________________________________________________________________________________________

