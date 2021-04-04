/**
 *
 * Footer.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Footer Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { Theme } from "../../constants/Theme";
import { BirdClassName } from "../_svg/Bird/Bird";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const FooterClassName = "footer";

export const FooterStyle = styled.footer`
  &.${FooterClassName} {
    background: ${Theme.Color.Text};
    color: ${Theme.Color.White};
    padding-top: calc(${Root.Size} * 4);
    padding-bottom: calc(${Root.Size} * 4);
    min-height: 40vh;
    position: relative;
    overflow: hidden;

    .${BirdClassName} {
      opacity: .05;
      position: absolute;
      top: 0;
      width: 50%;
      left: -20%;
      height: auto;
    }
  }
`;
