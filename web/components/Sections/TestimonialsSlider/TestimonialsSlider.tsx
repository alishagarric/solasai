// Core
import React from "react";
import { Inner } from "../../Inner";
import { Bird } from "../../_svg/Bird/Bird";
import { Checkmark } from "../../_svg/Checkmark/Checkmark";
import { Fire } from "../../_svg/Fire/Fire";
import { Logotype } from "../../_svg/Logotype/Logotype";
import { Anchor } from "../Anchor";

// Styles
import {
  TestimonialsSliderClassName,
  TestimonialsSliderStyle,
} from "./styles.scss";

// Begin Component
// __________________________________________________________________________________________

export type LMNTS_Section_TestimonialsSlider = {
  headline?: string;
  testimonials: {
    testimonial: string;
    author?: string;
  }[];
};

/**
 *
 * @name TestimonialsSlider
 * @author Alisha Garric
 * @requires /studio/sections/TestimonialsSlider
 *
 */
export const TestimonialsSlider: React.FunctionComponent<LMNTS_Section_TestimonialsSlider> = ({
  headline,
  testimonials,
}) => {

  return (
    <TestimonialsSliderStyle className={`${TestimonialsSliderClassName}`}>
      <Inner>
        <div className={`${TestimonialsSliderClassName}__container`}>
          {headline && <h2 className={`${TestimonialsSliderClassName}__headline h3`}>{headline}</h2>}

          <div className={`${TestimonialsSliderClassName}__slider`}>
            {testimonials && testimonials.length > 0 && 
              testimonials.map((testimonial, idx) => {
                return (
                  <div key={idx} className={`${TestimonialsSliderClassName}__slider__slide`}>
                    <p className="h4">{testimonial.testimonial}</p>
                    {testimonial.author && 
                      <p className="h4"><i>—{testimonial.author}</i></p>
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </Inner>
    </TestimonialsSliderStyle>
  );
};

// End Component
// __________________________________________________________________________________________
