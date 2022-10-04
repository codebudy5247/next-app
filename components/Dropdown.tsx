import React, { useCallback } from "react";
import styles from "./dropdown.module.css";
import { useRouter } from "next/router";

const Dropdown = (props: any) => {
  const router = useRouter();
  const onClickHandler = useCallback(
    (val: any) => {
      router.push(val);
    },
    [router]
  );
  return (
    <div className={styles.dropdown}>
      <button className={styles.name}>
        {props.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform`}
          fill="none"
          viewBox="0 0 24 14"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {props?.company_dropdown_options?.length > 0 ? (
        <div className={styles.dropdowncontent}>
          {props?.company_dropdown_options?.map((item: any, i: any) => (
            <>
              <div
                key={item.id}
                className={styles.singleItem}
                onClick={() => onClickHandler(item?.href)}
              >
                {item?.name}
              </div>
            </>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdown;
