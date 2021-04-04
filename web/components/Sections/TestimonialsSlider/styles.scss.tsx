/**
 *
 * TestimonialsSlider.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website TestimonialsSlider Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { CheckmarkClassName } from "../../_svg/Checkmark/Checkmark";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const TestimonialsSliderClassName = `bulleted-section`;

export const TestimonialsSliderStyle = styled.section`
  &.${TestimonialsSliderClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 6);
    margin-bottom: calc(${Root.Size} * 6);

    .${TestimonialsSliderClassName}__container {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      .${TestimonialsSliderClassName}__headline {
        padding-bottom: calc(${Root.Size} * 3);
        text-align: center;
      }

      .${TestimonialsSliderClassName}__slider {
        &__slide {
          text-align: center;
          display: none;
          padding-left: 10%;
          padding-right: 10%;

          &:first-of-type {
            display: block;
          }
        }
      }
    }

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
