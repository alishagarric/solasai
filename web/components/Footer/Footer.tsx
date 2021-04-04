/**
 *
 * Footer.js
 * @author Alisha Garric
 * @description The website footer.
 *
 */

// Core
import React from "react";
import { Inner } from "../Inner";
import { Bird } from "../_svg/Bird/Bird";

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
      <Bird />
      <Inner>
        <div>
          <h2>Contact Us</h2>
          <h3>Reach Us Directly</h3>
          <p>info@solas.ai</p>
          <p>
            1608 Walnut St. 
            <br/>
            Suite 1108
            <br/>
            Philadelphia, PA 19103
          </p>
        </div>
      </Inner>
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
