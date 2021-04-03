// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  BiColumnIconsClassName,
  BiColumnIconsStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_BiColumnIcons = {

};

/**
 *
 * @name BiColumnIcons
 * @author Alisha Garric
 * @requires /studio/sections/BiColumnIcons
 *
 */
export const BiColumnIcons: React.FunctionComponent<LMNTS_Section_BiColumnIcons> = ({

}) => {

  return (
    <BiColumnIconsStyle className={`${BiColumnIconsClassName}`}>
      <Inner className={`${BiColumnIconsClassName}__inner`}>

      </Inner>
    </BiColumnIconsStyle>
  );
};

// End Component
// __________________________________________________________________________________________
