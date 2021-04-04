/**
 *
 * SplitSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website SplitSection Styles. To be used in horizontal loop
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled, { keyframes } from "styled-components";
import { Root } from "../../../constants/Root";
import { Base } from "../../../constants/styles/Base";
import { Theme } from "../../../constants/Theme";
import { RedBirdClassName } from "../../_svg/RedBird/RedBird";

// Constants

// Helpers

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const SplitSectionClassName = `split-section`;

export const SplitSectionStyle = styled.section`
  &.${SplitSectionClassName} {
      display: flex;
      margin-top: calc(${Root.Size} * 4);
      margin-bottom: calc(${Root.Size} * 4);

      > div {
        flex: 50%;
        height: 80vh;

        &:first-of-type {
          background: black;
          opacity: .7;
        }

        &:last-of-type {
          background: ${Theme.Color.Background};
        }
      }
    
    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
