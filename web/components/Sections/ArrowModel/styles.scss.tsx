/**
 *
 * ArrowModel.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website ArrowModel Styles. To be used in horizontal loop
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

export const ArrowModelClassName = `arrow-model`;

export const ArrowModelStyle = styled.section`
  &.${ArrowModelClassName} {

    p {
      font-size: 16.5vh;
    }

    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

      p {
        font-size: 9vw;
      }
    }
  }
`;
