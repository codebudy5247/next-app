import type { NextPage } from "next";
import { useEffect, useState } from "react";
import DomesticRelocationDesktopView from "../components/Layouts/DomesticRelocationDesktopView";
import DomesticRelocationMobileView from "../components/Layouts/DomesticRelocationMobileView";
const DomesticRelocationPage: NextPage = () => {
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
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
        <DomesticRelocationMobileView />
      ) : (
        <DomesticRelocationDesktopView />
      )}
    </>
  );
};

export default DomesticRelocationPage;
