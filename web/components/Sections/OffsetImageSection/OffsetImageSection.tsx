// Core
import React from "react";
import LazyImage from "../../../utils/lazyImage";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";
import { Checkmark } from "../../_svg/Checkmark/Checkmark";
import { Fire } from "../../_svg/Fire/Fire";
import { Logotype } from "../../_svg/Logotype/Logotype";
import { Anchor } from "../Anchor";

// Styles
import {
  OffsetImageSectionClassName,
  OffsetImageSectionStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_OffsetImageSection = {
  headline?: string;
  image: string;
  alt: string;
};

/**
 *
 * @name OffsetImageSection
 * @author Alisha Garric
 * @requires /studio/sections/OffsetImageSection
 *
 */
export const OffsetImageSection: React.FunctionComponent<LMNTS_Section_OffsetImageSection> = ({
  headline,
  image,
  children,
  alt,
}) => {

  return (
    <OffsetImageSectionStyle className={`${OffsetImageSectionClassName}`}>
      <Anchor id="product" />
      <Inner className={`${OffsetImageSectionClassName}__inner`}>
        {headline && <h2 className={`${OffsetImageSectionClassName}__headline h3`}>{headline}</h2>}

        <div className={`${OffsetImageSectionClassName}__content`}>
          <div className={`${OffsetImageSectionClassName}__content__image`}>
            <LazyImage alt={alt} src={image}/>
          </div>
          <div className={`${OffsetImageSectionClassName}__content__children`}>
            {children}
          </div>
        </div>
      </Inner>
    </OffsetImageSectionStyle>
  );
};

// End Component
// __________________________________________________________________________________________
