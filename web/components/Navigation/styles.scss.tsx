/**
 *
 * Navigation.js/styles.scss.tsx
 * @author Alisha Garric
 * @description The website Navigation Styles.
 *
 */

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import styled from "styled-components";
import { Root } from "../../constants/Root";
import { ButtonClassName } from "../Sections/Button/styles.scss";

// Begin Styles
//////////////////////////////////////////////////////////////////////

export const NavigationClassName = `nav`;

export const NavigationStyle = styled.nav`
  &.${NavigationClassName} {
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    padding: 0 ${Root.Size};
    align-items: center;

    .${NavigationClassName}__links {
      display: flex;
      align-items: center;

      &__list {
        display: flex;
        align-items: center;
        padding-right: ${Root.Size};

        &__item {
          padding-right: calc(${Root.Size} * 1.5);
          p {
            padding-bottom: 0;

            a {
              height: 90px;
              display: block;
              display: flex;
              align-items: center;
            }
          }
        }
      }

      .${ButtonClassName} {
        margin-top: 0;
      }
    }
  }
`;
