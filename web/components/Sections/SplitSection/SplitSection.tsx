// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";

// Styles
import {
  SplitSectionClassName,
  SplitSectionStyle,
} from "./styles.scss";

//Components
import Link from "next/link";
import { RedBird } from "../../_svg/RedBird/RedBird";
import { Button } from "../Button";


// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_SplitSection = {

};

/**
 *
 * @name SplitSection
 * @author Alisha Garric
 * @requires /studio/sections/SplitSection
 *
 */
export const SplitSection: React.FunctionComponent<LMNTS_Section_SplitSection> = ({

}) => {

  return (
    <SplitSectionStyle className={`${SplitSectionClassName}`}>
        <div className={`${SplitSectionClassName}__left`}></div>
        <div className={`${SplitSectionClassName}__right`}></div>
    </SplitSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
