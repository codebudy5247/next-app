import type { NextPage } from "next";
import { useState,useEffect } from "react";
import Header from "../components/Header";
import useWindowResize from "../hooks/useWindowResize";
import ContactUSDesktopView from "../components/Layouts/ContactUSDesktopView";
import ContactUsMobileView from "../components/Layouts/ContactUsMobileView";
const ContactUsPage: NextPage = () => {
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
      {mobileView ? <ContactUsMobileView /> : <ContactUSDesktopView />}
    </>
  );
};

export default ContactUsPage;
