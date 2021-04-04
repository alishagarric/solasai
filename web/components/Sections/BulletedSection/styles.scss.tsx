/**
 *
 * BulletedSection.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website BulletedSection Styles. To be used in horizontal loop
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

export const BulletedSectionClassName = `bulleted-section`;

export const BulletedSectionStyle = styled.section`
  &.${BulletedSectionClassName} {
    position: relative;
    margin-top: calc(${Root.Size} * 4);
    margin-bottom: calc(${Root.Size} * 4);

    .${BulletedSectionClassName}__container {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      .${BulletedSectionClassName}__headline {
        padding-bottom: calc(${Root.Size} * 1.5);
      }

      .${BulletedSectionClassName}__content {
        display: flex;
        flex-direction: row;

        &__body, &__children {
          flex: 1;
        }

        &__body {
          &__html {
            padding-bottom: calc(${Root.Size} * 1.5);
          }

          &__bullets {
            li {
              display: flex;
              align-items: flex-start;
              padding-bottom: ${Root.Size};

              .${CheckmarkClassName} {
                margin-right: calc(${Root.Size} / 2);
                flex: 0 0 22px;
              }
            }
          }

          + .${BulletedSectionClassName}__content__children {
            margin-left: calc(${Root.Size} * 3);
          }
        }
      }
    }

    
    @media (max-width: ${Base.Media.Width.Sm + "px"}), (max-width: ${Base.Media.Width.Md + "px"}) and (orientation: landscape) and (max-height: ${Base.Media.Height.Md + "px"}) {

    }
  }
`;
