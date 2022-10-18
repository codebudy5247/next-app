import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import useWindowResize from "../hooks/useWindowResize";
import FAQMobileView from "../components/Layouts/FAQMobileView";
import FAQDesktopView from "../components/Layouts/FAQDesktopView";
const FAQsPage: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  console.log(mobileView, "swfdgswfbewsfb");
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

  return <>{mobileView ? <FAQMobileView /> : <FAQDesktopView />}</>;
};

export default FAQsPage;
