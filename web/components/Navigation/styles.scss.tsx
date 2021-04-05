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
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";
import { ButtonClassName } from "../Sections/Button/styles.scss";
import { RedBirdClassName } from "../_svg/Birds/RedBird";
import { BrandmarkClassName } from "../_svg/Brandmark/Brandmark";
import { LogoClassName } from "../_svg/Logos/Logo";

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
    background: ${Theme.Color.Background};

    .${NavigationClassName}__logo {
      .${BrandmarkClassName} {
        display: none;
      }
    }

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
        background: ${Theme.Color.Secondary};

        a, div {
          color: ${Theme.Color.White};
        }
        
      }
    }

    @media (max-width: ${Base.Media.Width.Lg + "px"}) {
      .${NavigationClassName}__logo {
        .${LogoClassName} {
          height: 40px;
          width: auto;
        }
      }
    }

    @media (max-width: ${Base.Media.Width.Md + "px"}) {
      padding: 0 5px 0 ${Root.Size};
      
      .${NavigationClassName}__logo {

        .${BrandmarkClassName} {
          display: block;
          height: 40px;
          margin-top: 5px;
          margin-bottom: 5px;
          width: auto;
        }

        .${LogoClassName} {
          display: none;
        }
      }

      .${NavigationClassName}__links {
        &__list {
          display: none;
        }

        .${ButtonClassName} {

          a, div {
            height: 40px;
            padding-top: 0;
            padding-bottom: 0;
            display: grid;
            place-content: center;
          }
        }
      }
    }
  }
`;
