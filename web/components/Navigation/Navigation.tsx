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
import { Logo } from "../_svg/Logo/Logo";

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
 
      //this.function = this.function.bind(this);
   }
 
   /*
   function() {
     this.setState({});
   }
   */

  componentDidMount(){

  }


  render() {

    return (
      <NavigationStyle className={`${NavigationClassName}`}>
        <div className={`${NavigationClassName}__logo`}>
          <Logo />
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
              <p><a href="#why-solasai">Why Choose SolasAI</a></p>
            </li>
          </ul>
          <Button link="/" label="Contact Us" />
        </div>
        
      </NavigationStyle>
    );
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
