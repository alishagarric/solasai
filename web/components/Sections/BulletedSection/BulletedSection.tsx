// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";
import { Checkmark } from "../../_svg/Checkmark/Checkmark";
import { Fire } from "../../_svg/Fire/Fire";
import { Logotype } from "../../_svg/Logotype/Logotype";

// Styles
import {
  BulletedSectionClassName,
  BulletedSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_BulletedSection = {
  headline?: string;
  body?: { 
    __html: string 
  };
  bullets?: string[];
};

/**
 *
 * @name BulletedSection
 * @author Alisha Garric
 * @requires /studio/sections/BulletedSection
 *
 */
export const BulletedSection: React.FunctionComponent<LMNTS_Section_BulletedSection> = ({
  headline,
  body,
  bullets,
  children
}) => {

  return (
    <BulletedSectionStyle className={`${BulletedSectionClassName}`}>
      <Inner className={`${BulletedSectionClassName}__inner`}>
        {headline && <h2 className={`${BulletedSectionClassName}__headline`}>{headline}</h2>}

        <div className={`${BulletedSectionClassName}__content`}>
          <div className={`${BulletedSectionClassName}__content__body`}>
            {body && <div className={`${BulletedSectionClassName}__content__body__html`} dangerouslySetInnerHTML={body}/>}
            {bullets && bullets.length > 0 && 
              <ul className={`${BulletedSectionClassName}__content__body__bullets`}>
                {bullets.map((bullet, idx) => {
                  return (
                    <li>
                      <Checkmark />
                      <p>{bullet}</p>
                    </li>
                  )
                })}
              </ul>
            }
          </div>
          <div className={`${BulletedSectionClassName}__content__children`}>
            {children}
          </div>
        </div>
      </Inner>
    </BulletedSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
