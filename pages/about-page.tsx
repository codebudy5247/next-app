import type { NextPage } from "next";
import { useCallback, useState,useEffect } from "react";

import useWindowResize from "../hooks/useWindowResize";
import NavPopup from "../components/NavPopup"
import AboutMobileView from "../components/Layouts/AboutMobileView";
import AboutDesktopView from "../components/Layouts/AboutDesktopView";
const AboutPage: NextPage = () => {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView} = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 450
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  
  

  return (
   <>
    {mobileView ? (
       <AboutMobileView />
    ):(
      <AboutDesktopView />
    )}
   </>
  );
};

export default AboutPage;
