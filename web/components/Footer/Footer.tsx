/**
 *
 * Footer.js
 * @author Alisha Garric
 * @description The website footer.
 *
 */

// Core
import React from "react";

// Styles
import { FooterClassName, FooterStyle } from "./styles.scss";

// Begin Component
//////////////////////////////////////////////////////////////////////

export type Footer = {
  //
};

export const Footer: React.FunctionComponent<Footer> = ({ }) => {
  return (
    <FooterStyle className={`${FooterClassName}`}>
      <div className={`${FooterClassName}__inner`} />
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
