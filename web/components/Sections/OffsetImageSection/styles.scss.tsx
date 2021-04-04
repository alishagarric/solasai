/**
 *
 * OffsetImageSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website OffsetImageSection Styles. To be used in horizontal loop
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

export const OffsetImageSectionClassName = `bulleted-section`;

export const OffsetImageSectionStyle = styled.section`
  &.${OffsetImageSectionClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);

    .${OffsetImageSectionClassName}__headline {
      padding: calc(${Root.Size} * 1.5) 0 ${Root.Size} 0;
      width: 70%;
      margin-left: 30%;
      position: relative;
      z-index: 3;
    }

    .${OffsetImageSectionClassName}__content {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      &__children {
        flex: 0 0 50%;
        position: relative;
        z-index: 2;
      }

      &__image {
        position: absolute;
        left: 0;
        right: 50%;
        top: 0;
        bottom: 0;
        background: ${Theme.Color.Background};
        z-index: 1;

        img {
          position: absolute;
          width: 80%;
          height: 80%;
          object-fit: contain;
          right: 5%;
          top: 10%;
        }
      }


    }

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
