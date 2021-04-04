// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  ButtonClassName,
  ButtonStyle,
} from "./styles.scss";

//Components
import Link from "next/link";

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
        <Link href={link}>
          <a target={target ? target : "_self"} className="txt-caption">
            {label}
          </a>
        </Link>
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
