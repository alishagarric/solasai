// Core
import React from "react";

// Types
import { NextPage } from "next";
import { SimpleHero } from "../components/Sections/SimpleHero/SimpleHero";

// Begin Component
// __________________________________________________________________________________________

type SuccessPage = {};

export const SuccessPageClassName = "success";

/**
 *
 * @name Success
 * @author Alisha Garric
 *
 */
const SuccessPage: NextPage<SuccessPage> = () => {
  return (
    <div className={`${SuccessPageClassName}`}>
      <SimpleHero 
        headline="Thank you for reaching out. We'll respond soon."  
        logo={false}
        cta= {{
          label: "Go back home",
          link: "/"
        }}
      />

    </div>
  );
};

export default SuccessPage;
