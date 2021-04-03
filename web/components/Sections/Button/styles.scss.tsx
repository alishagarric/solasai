/**
 *
 * Button.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Button Styles. To be used in horizontal loop
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

export const ButtonClassName = `btn`;

export const ButtonStyle = styled.div`
  &.${ButtonClassName} {
    margin-top: calc(${Root.Size} * 2);

    a {
      padding: ${Root.Size} calc(${Root.Size} * 3);
      color: ${Theme.Color.Secondary};
      border: 1px solid ${Theme.Color.Secondary};
      display: block;
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
