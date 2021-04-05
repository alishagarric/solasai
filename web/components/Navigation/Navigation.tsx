/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */

// Core
import React from "react";
import { Button } from "../Sections/Button";
import { ContactInfo } from "../Sections/ContactInfo";
import { BlueBird } from "../_svg/Birds/BlueBird";
import { RedBird } from "../_svg/Birds/RedBird";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Exit } from "../_svg/Icons/Exit";
import { Hamburger } from "../_svg/Icons/Hamburger";
import { Logo } from "../_svg/Logos/Logo";

// Styles
import { NavigationClassName, NavigationOverlayClassName, NavigationOverlayStyle, NavigationStyle } from "./styles.scss";


// Begin Component
//////////////////////////////////////////////////////////////////////

export type NavigationData = {
  //
};

 export type NavigationState = {
  overlayActive: boolean;
 }
 
 /**
  *
  * @name Navigation
  * @author Alisha Garric
  * @requires /studio/sections/Navigation
  *
  */
 
 export class Navigation extends React.PureComponent<
   NavigationData,
   NavigationState
 > {
    constructor(props: Navigation) {
        super(props);
    
        this.state = {
          overlayActive: false,
        };

      this.updateOverlayNav = this.updateOverlayNav.bind(this);
    }

    updateOverlayNav( toggle: boolean) {
      this.setState({
        overlayActive: toggle,
      });
    }


  render() {

    return (
      <>
        <NavigationStyle className={`${NavigationClassName}`}>
          <div className={`${NavigationClassName}__logo`}>
            <Logo />
            <div className={`${NavigationClassName}__logo__menu-toggle`} onClick={() => this.updateOverlayNav(true)}>
              <Hamburger />
            </div>
            <Brandmark />
          </div>

          <div className={`${NavigationClassName}__links`}>
            <ul className={`${NavigationClassName}__links__list`}>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><a href="#product">Our Product</a></p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><a href="#how">How It Works</a></p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><a href="#why-now">Why Now</a></p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><a href="#why-solasai">Why SolasAI</a></p>
              </li>
            </ul>
            <Button link="#contact" label="Contact Us" />
          </div>
        </NavigationStyle>

        <NavigationOverlayStyle className={`${NavigationOverlayClassName} ${this.state.overlayActive == true ? "__active" : ""}`}>

          <BlueBird />

          <div 
            className={`${NavigationOverlayClassName}__exit`}
            onClick={() => this.updateOverlayNav(false)}
          >
            <Exit />
          </div>

          <div className={`${NavigationOverlayClassName}__links`}>
            <ul className={`${NavigationOverlayClassName}__links__list`}>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href="#product">What</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href="#how">How</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href="#why-now">Why</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href="#why-solasai">About Us</a>
              </li>
              <li className={`${NavigationOverlayClassName}__links__list__item`}>
                <a onClick={() => this.updateOverlayNav(false)} href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <ContactInfo />
        </NavigationOverlayStyle>
      </>
    );
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
