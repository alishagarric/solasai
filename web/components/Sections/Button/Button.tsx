// Core
import React from "react";

// Styles
import {
  ButtonClassName,
  ButtonStyle,
} from "./styles.scss";

//Components
import Link from "next/link";
import AnchorLink from 'react-anchor-link-smooth-scroll'


// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_Button = {
  link?: string;
  label: string;
  target?: string;
};

/**
 *
 * @name Button
 * @author Alisha Garric
 * @requires /studio/sections/Button
 *
 */
export const Button: React.FunctionComponent<LMNTS_Section_Button> = ({
  link,
  label,
  target
}) => {

  if (link){
    return (
      <ButtonStyle className={`${ButtonClassName}`}>
        <AnchorLink href={link} target={target ? target : "_self"} className="txt-caption">
          {label}
        </AnchorLink>
      </ButtonStyle>
    );
  } else {
    return (
      <ButtonStyle className={`${ButtonClassName}`}>
        <div className="txt-caption">
          {label}
        </div>
      </ButtonStyle>
    );
  }

};

// End Component
// __________________________________________________________________________________________
