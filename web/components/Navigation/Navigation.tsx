/**
 *
 * Navigation.js
 * @author Alisha Garric
 * @description The website Navigation.
 *
 */

// Core
import Link from "next/link";
import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Base } from "../../constants/styles/Base";
import { Theme } from "../../constants/Theme";

import { Button } from "../Sections/Button";
import { ContactInfo } from "../Sections/ContactInfo";
import { BlueBird } from "../_svg/Birds/BlueBird";
import { OverlayBird } from "../_svg/Birds/OverlayBird";
import { Brandmark } from "../_svg/Brandmark/Brandmark";
import { Exit } from "../_svg/Icons/Exit";
import { Hamburger } from "../_svg/Icons/Hamburger";
import { Logo } from "../_svg/Logos/Logo";

// Styles
import { NavigationClassName, NavigationOverlayClassName, NavigationOverlayStyle, NavigationStyle } from "./styles.scss";


// Begin Component
//////////////////////////////////////////////////////////////////////

export type NavigationData = {
  homepage: boolean;
};

 export type NavigationState = {
  overlayActive: boolean;
  navHidden: boolean;
  scrollAmount: number;
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
    constructor(props: NavigationData) {
        super(props);
    
        this.state = {
          overlayActive: false,
          navHidden: false,
          scrollAmount: 0,
        };

        if (typeof window === 'undefined') {
          //@ts-ignore
          global.window = {};
        }

      this.updateOverlayNav = this.updateOverlayNav.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
    }

    updateOverlayNav( toggle: boolean) {
      this.setState({
        overlayActive: toggle,
      });
    }

    handleScroll(event: any){

      let scrollDown = this.state.scrollAmount < window.scrollY ? true : false;

      this.setState({
        scrollAmount: window.scrollY,
      });

      if (scrollDown == true && !(this.state.scrollAmount < 50) && (window.innerWidth < Base.Media.Width.Md)) {
        this.setState({
          navHidden: true,
        });
      } else {
        this.setState({
          navHidden: false,
        });
      }

    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll, { passive: true })
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  


  render() {

    return (
      <>
        <NavigationStyle className={`${NavigationClassName} ${this.state.navHidden ? "__hidden" : ""}`}>
          <div className={`${NavigationClassName}__logo`}>
            {this.props.homepage ?
              <AnchorLink href="#top">
                <Logo />
              </AnchorLink>
            :
              <Link href="/">
                <a>
                  <Logo />
                </a>
              </Link>
            }

            <div className={`${NavigationClassName}__logo__menu-toggle`} onClick={() => this.updateOverlayNav(true)}>
              <Hamburger />
            </div>
            <Brandmark />
          </div>

          <div className={`${NavigationClassName}__links`}>
            <ul className={`${NavigationClassName}__links__list`}>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><AnchorLink href="#product">Our Product</AnchorLink></p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><AnchorLink href="#how">How It Works</AnchorLink></p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><AnchorLink href="#why-now">Why Now</AnchorLink></p>
              </li>
              <li className={`${NavigationClassName}__links__list__item`}>
                <p><AnchorLink href="#why-solasai">Why SolasAI</AnchorLink></p>
              </li>
            </ul>
            <Button link="#contact" label="Contact Us" />
          </div>
        </NavigationStyle>

        <NavigationOverlayStyle className={`${NavigationOverlayClassName} ${this.state.overlayActive == true ? "__active" : ""}`}>

          {<OverlayBird />}

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
