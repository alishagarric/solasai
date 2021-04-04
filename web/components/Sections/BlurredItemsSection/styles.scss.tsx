/**
 *
 * BlurredItemsSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website BlurredItemsSection Styles. To be used in horizontal loop
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

export const BlurredItemsSectionClassName = `blurred-items-section`;

export const BlurredItemsSectionStyle = styled.section`
  &.${BlurredItemsSectionClassName} {
    position: relative;
  
  // Removing section space because the way its placed in design
  // If we expand on this, I'd add a field that would toggle the 
  // on a case by case bases instead
  //  margin-top: calc(${Root.Size} * 4);
  //  margin-bottom: calc(${Root.Size} * 4);

    .${BlurredItemsSectionClassName}__headline {
      padding-bottom: calc(${Root.Size} * 2);
      text-align: center;
      width: 100%;
    }

    .${BlurredItemsSectionClassName}__content {
      display: flex;
      flex-direction: row;
      width: 80%;
      margin: 0 auto;
      align-items: center;

      &__body {
        padding-left: calc(${Root.Size} * 2) ;
        flex: 4;

        > * {
          max-width: 310px;
        }
      }

      &__blurred-items {
        flex: 4;
        position: relative;
        padding-top: 50%;

        &__focused, &__blurred {
          position: absolute;
          border-radius: 50%;
          padding-bottom: 0;

          span {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            top: 50%;
            color: ${Theme.Color.Background};
            text-align: center;
            transform: translateY(-50%);
            padding: ${Root.Size};
          }
        }

        &__focused {
          height: 50%;
          width: 50%;
          top: 50%;
          left: 50%;
          background-color: ${Theme.Color.Orange1};
          transform: translate(-50%, -50%);

          &:after {
            content: "";
            display: block;
            position: absolute;
            background: ${Theme.Color.Orange1};
            width: 50%;
            right: -50%;
            top: 50%;
            transform: translateY(-50%);
            height: 2px;
          }

        }

        &__blurred {
          height: 32%;
          width: 32%;
          left: 0;
          top: 5%;
          background-color: ${Theme.Color.Red1};
          filter: blur(2px);
          opacity: .8;
        }

        &:after, &:before {
          content: "";
          position: absolute;
          border-radius: 50%;
        }

        &:after {
          background: ${Theme.Color.Orange2};
          height: 25%;
          width: 25%;
          top: 0%;
          right: 15%;
          filter: blur(8px);
          opacity: .4;
        }

        &:before {
          background: ${Theme.Color.Orange3};
          height: 25%;
          width: 25%;
          bottom: 5%;
          right: 2%;
          filter: blur(2px);
          opacity: .6;
        }

      }
    }

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
