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
import { Base } from "../../../constants/styles/Base";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SimpleHeroClassName = `large-text`;

export const SimpleHeroStyle = styled.section`
  &.${SimpleHeroClassName} {

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
