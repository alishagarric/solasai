/**
 *
 * InteractiveCards.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website InteractiveCards Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { BirdClassName } from "../../_svg/Bird/Bird";
import { CircleDecorClassName } from "../../_svg/CircleDecor/CircleDecor";
import { ButtonClassName } from "../Button/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const InteractiveCardsClassName = `interactive-cards`;

export const InteractiveCardsStyle = styled.section`
  &.${InteractiveCardsClassName} {
    position: relative;
    background: ${Theme.Color.Background};
    padding-top: calc(${Root.Size} * 4);
    padding-bottom: calc(${Root.Size} * 4);
    overflow: hidden;

    .${BirdClassName} {
      position: absolute;
      right: 0;
      top: 50%;
      height: 90%;
      width: auto;
      z-index: 0;
      transform: translate(50%, -50%);
    }

    .${CircleDecorClassName} {
      position: absolute;
      bottom:  0;
      left: 0;
      z-index: 0;
      width: 50%;
      height: auto;
    }

    .${InteractiveCardsClassName}__content {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      .${InteractiveCardsClassName}__headline {
        padding-bottom: calc(${Root.Size} * 1.5);
        width: 100%;
      }

      .${InteractiveCardsClassName}__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 1;
        padding-bottom: calc(${Root.Size} * 1.5);

        &__card-sets-nav {
          display: flex;

          .${ButtonClassName} {
            margin-top: 0;
            margin-right: ${Root.Size};

            div {
              padding-left: ${Root.Size};
              padding-right: ${Root.Size};  
            }
          }
        }
      }

      .${InteractiveCardsClassName}__card-sets {
        width: 100%;

        &__cards {
          display: none;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8%;
          position: relative;
          z-index: 1;
          width: 100%;
          
          &__card {
            background: ${Theme.Color.White};
            aspect-ratio: 1;
            position: relative;
            padding: 5% 20% 20% 10%;

            &__label {
              opacity: 0.5;
            }

            &:after {
              content: "";
              position: absolute;
              height: 19px;
              width: 19px;
              background: ${Theme.Color.Secondary};
              opacity: 0.43;
            }

            &:nth-of-type(1):after, &:nth-of-type(3):after {
              top: 50%;
              left: calc(100% + calc(${Root.Size} * 1.5));
              transform: translate(-50%, -50%);
            }

            &:nth-of-type(2):after, &:nth-of-type(4):after {
              left: calc(${Root.Size} * 1.5);
              top: calc(100% + calc(${Root.Size} * 1.5));
              transform: translate(-50%, -50%);
            }

            &:last-of-type:after {
              content: none;
            }

            &:nth-of-type(3){
              grid-row: 2 / 3;
              grid-column: 2 / 3;
            }

            &:nth-of-type(4){
              grid-row: 2 / 3;
              grid-column: 3 / 4;
            }

            &:nth-of-type(5){
              grid-row: 3 / 4;
              grid-column: 3 / 4;
            }

          }

          &.__active {
            display: grid;
          }
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
