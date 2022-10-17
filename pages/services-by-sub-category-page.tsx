import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import ServicesDesktopView from "../components/Layouts/ServicesDesktopView";
import ServicesMobileView from "../components/Layouts/ServicesMobileView";
const ServicesBySubCategoryPage: NextPage = () => {
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
    {mobileView ? <ServicesMobileView /> : <ServicesDesktopView />}
    </>
  );
};

export default ServicesBySubCategoryPage;
