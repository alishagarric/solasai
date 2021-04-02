/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */

// Core
import React from "react";

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
       
      </NavigationStyle>
    );
  }
};

// End Component
//////////////////////////////////////////////////////////////////////
