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
import { Anchor } from "../Sections/Anchor";
import { ContactInfo } from "../Sections/ContactInfo";
import { ContactInfoStyle } from "../Sections/ContactInfo/styles.scss";
import { BlueBird } from "../_svg/Birds/BlueBird";
import { Email } from "../_svg/Icons/Email";
import { Location } from "../_svg/Icons/Location";
import { Logo } from "../_svg/Logos/Logo";

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
      <Anchor id="contact" />
      <BlueBird />
      <Inner>
          <h2 className={`${FooterClassName}__headline h3`}>Contact Us</h2>
          <div className={`${FooterClassName}__container`}>

            <div className={`${FooterClassName}__details`}>
              <h3 className={`${FooterClassName}__details__subheadline h4`}>Reach Us Directly</h3>
              <ContactInfo />
            </div>

            <div className={`${FooterClassName}__form`}>
              <p><i>Fill out the form below and our team will contact you</i></p>
              <form
                action="https://formspree.io/f/mdoyogdw"
                method="POST"
              >
                <fieldset>
                  <input type="text" placeholder="Name" name="Name" required/>
                  <input type="text" placeholder="Email" name="_replyto" required/>
                  <input type="text" placeholder="Company Name" name="Company Name"/>
                </fieldset>

                <fieldset>
                  <textarea placeholder="Type us a message" name="Message" required></textarea>
                  <input type="submit" value="Submit"/>
                </fieldset>
              </form>
            </div>
          </div>

          <div className={`${FooterClassName}__bottom`}>
            <Logo />
            <p>© 2021 SolasAI</p>
          </div>
        
      </Inner>
    </FooterStyle>
  );
};

// End Component
//////////////////////////////////////////////////////////////////////
