/**
 *
 * SimpleHero.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website SimpleHero Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SimpleHeroClassName = `simple-hero`;

export const SimpleHeroStyle = styled.section`
  &.${SimpleHeroClassName} {
    position: relative;
    background-color: ${Theme.Color.Background};

    .${SimpleHeroClassName}__grid {
      display: grid;
      grid-template-rows: 1fr auto 1fr;
      min-height: 100vh;
      max-height: 1000px;
      text-align: center;
      width: 100%;
      position: relative;
      z-index: 2;

      &__text {
        grid-row: 2 / 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        &__headline {
          max-width: 820px;
          margin: calc(${Root.Size} * 2);
        }
      }

      &__guide {
        grid-row: 3 / 4;
        color: ${Theme.Color.Secondary};
        display: flex; 
        flex-direction: column;
        align-items: center;
        margin-top: calc(${Root.Size} * 2);

        &:after {
          content: "";
          width: 1px;
          display: block;
          opacity: 0.5;
          background: ${Theme.Color.Black};
          flex: 1;
          margin: calc(${Root.Size} * 2);
        }
      }
    }

    .svg-bird {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 0;
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
