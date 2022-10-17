import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HomeMobileView from "../components/Layouts/HomeMobileView";
import HomeDesktopView from "../components/Layouts/HomeDesktopView";

const HomePage: NextPage = () => {
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
      {mobileView ? <HomeMobileView /> : <HomeDesktopView />}
    </>
  );
};

export default HomePage;
