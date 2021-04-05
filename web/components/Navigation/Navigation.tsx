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
import { RedBird } from "../_svg/Birds/RedBird";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Logo } from "../_svg/Logos/Logo";

// Styles
import { NavigationClassName, NavigationStyle } from "./styles.scss";


// Begin Component
//////////////////////////////////////////////////////////////////////

export type NavigationData = {
  //
};

 export type NavigationState = {
  //
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
      };
   }

  componentDidMount(){

  }


  render() {

    return (
      <NavigationStyle className={`${NavigationClassName}`}>
        <div className={`${NavigationClassName}__logo`}>
          <Logo />
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
    );
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
