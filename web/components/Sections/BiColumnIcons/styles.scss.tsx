/**
 *
 * BiColumnIcons.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website BiColumnIcons Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Base } from "../../../constants/styles/Base";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const BiColumnIconsClassName = `large-text`;

export const BiColumnIconsStyle = styled.section`
  &.${BiColumnIconsClassName} {


    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
