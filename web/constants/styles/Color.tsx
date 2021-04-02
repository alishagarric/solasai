// Color.js:
// This is the sitewide palette.

// Imports
// _______________________________________________________

import React from "react";
import { createGlobalStyle, css } from "styled-components";

// Begin Component
// _______________________________________________________

export type ColorTheme = {
  name?:
    | "default"
    | "alternate";
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  overlayMode: string;
  setTheme?: (theme: ColorTheme) => void;
};

export const Color = {
  // Color Variables
  varPrimary: "var(--clrPrimary)",
  varSecondary: "var(--clrSecondary)",
  varBackground: "var(--clrBackground)",
  varForeground: "var(--clrForeground)",

  // Core Colors
  Primary: "#000000",
  Secondary: "#FFB4A3",
  Background: "#FFFDEB",
  Text: "#000000",

  // Grayscale Palette
  Black: "#000000",
  White: "#FFF6EE",

};


/**
 *
 * @name ColorContext
 * @description Our context to provide color themes
 * @see https://medium.com/@0n3z3r0n3/react-usecontext-how-to-update-context-from-child-component-8fa2894eee3d
 *
 */

/**
 *
 * @name Palette
 * @description Global CSS Variables for palette
 *
 */
export const Palette = createGlobalStyle`
  ::-moz-selection { background: ${Color.varForeground}; color: ${Color.varBackground} }
  ::selection { background: ${Color.varForeground}; color: ${Color.varBackground} }

  :root {
    --clrPrimary: ${Color.Primary};
    --clrSecondary: ${Color.Secondary};
    --clrBackground: ${Color.Background};
    --clrForeground: ${Color.Text};
  }
`;

//////////////////////////////////////////////////////////////////////
// End Component


export class ColorUtils {

  static SetThemeFromServer = (serverTheme: ColorTheme) => {
    return createGlobalStyle`      
      :root {
        --clrPrimary: ${serverTheme.primary};
        --clrSecondary: ${serverTheme.secondary};
        --clrBackground: ${serverTheme.background};
        --clrForeground: ${serverTheme.foreground};
        --overlayMode: ${serverTheme.overlayMode};
      }
    `;
  }
}