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
import { ButtonClassName } from "../Button/styles.scss";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const InteractiveCardsClassName = `interactive-cards`;

export const InteractiveCardsStyle = styled.section`
  &.${InteractiveCardsClassName} {
    position: relative;

    .${BirdClassName} {
      position: absolute;
      right: 0;
      top: 25%;
      z-index: 0;
    }

    .${InteractiveCardsClassName}__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;

      &__card-sets-nav {
        display: flex;

        .${ButtonClassName} div {
          padding-left: ${Root.Size};
          padding-right: ${Root.Size};
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
