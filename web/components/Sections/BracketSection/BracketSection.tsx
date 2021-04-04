// Core
import React from "react";
import { Inner } from "../../Inner";

// Styles
import {
  BracketSectionClassName,
  BracketSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_BracketSection = {
  headline: string;
  icons: {
    icon: any;
    label?: string;
  }[];
};

/**
 *
 * @name BracketSection
 * @author Alisha Garric
 * @requires /studio/sections/BracketSection
 *
 */
export const BracketSection: React.FunctionComponent<LMNTS_Section_BracketSection> = ({
  icons,
  headline
}) => {

  return (
    <BracketSectionStyle className={`${BracketSectionClassName}`}>
      <Inner>
        <h2 className={`${BracketSectionClassName}__headline`}>{headline}</h2>
        {icons && icons.length > 0 &&
          <div className={`${BracketSectionClassName}__blocks`}>
            {icons.map((block, idx) => {
              return (
                <div key={idx} className={`${BracketSectionClassName}__blocks__block`}>
                  {block.icon}
                  {block.label && <p className={`${BracketSectionClassName}__block__label`} >{block.label}</p>}
                </div>
              );
            })}
          </div>
        }
      </Inner>
    </BracketSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
