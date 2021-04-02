// Core
import React from "react";

// Types
import { NextPage } from "next";
import { LargeText } from "../components/Sections/LargeText";

// Begin Component
// __________________________________________________________________________________________

type HomePage = {};

export const HomePageClassName = "homepage";

/**
 *
 * @name HomePage
 * @author Alisha Garric
 *
 */
const HomePage: NextPage<HomePage> = () => {
  return (
    <div className={`${HomePageClassName}`}>
      <LargeText text={`Starting point for Solas Ai`} />
    </div>
  );
};

export default HomePage;
