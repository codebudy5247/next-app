import { Icon } from "@iconify/react";
import { useCallback } from "react";
import { useRouter } from "next/router";
export default function MenuPopup(props: any) {
  const router = useRouter();
  return (
    <>
      {props?.showModal ? (
        <>
          <div className="flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div>
                  <div
                    onClick={() => props?.setShowModal(false)}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      margin: "20px",
                      padding: "3px",
                    }}
                  >
                    <Icon icon="ci:close-small" width="40" height="40" />
                  </div>
                </div>
                {/*body*/}
                <div className="relative p-10">
                  <div className="px-10 py-4 cursor-pointer">
                    <div className="mb-2 cursor-pointer font-black">Home</div>
                  </div>
                  <hr />

                  <div className="px-10 py-2">
                    <div className="mb-2 cursor-pointer font-black">
                      Company
                    </div>
                    <br />
                    <span
                      className="mb-3 p-2"
                      onClick={() => router.push("/about-page")}
                    >
                      About US
                    </span>{" "}
                    <br />
                    <span className="mb-3 p-2" onClick={() => router.push("/")}>
                      Our Client
                    </span>{" "}
                    <br />
                    <span
                      className="mb-3 p-2"
                      onClick={() => router.push("/f-a-qs-page")}
                    >
                      FAQs
                    </span>{" "}
                    <br />
                    <span className="mb-3 p-2" onClick={() => router.push("/")}>
                      Blogs
                    </span>
                  </div>
                  <hr />
                  <div className="px-10 py-4 cursor-pointer">
                    <div className="mb-2 cursor-pointer font-black">
                      Services
                    </div>
                    <br />
                    <span
                      className="mb-3 p-2"
                      onClick={() =>
                        router.push("/services-by-sub-category-page")
                      }
                    >
                      Services Category
                    </span>{" "}
                    <br />
                    <span
                      className="mb-3 p-2"
                      onClick={() => router.push("/domestic-relocation-page")}
                    >
                      Domestic Relocation
                    </span>{" "}
                    <br />
                  </div>
                  <hr />
                  <div className="px-10 py-4 cursor-pointer">
                    <div className="mb-2 cursor-pointer font-black">
                      Contact US
                    </div>
                    <br />
                    <span
                      className="mb-3 p-2"
                      onClick={() => router.push("/contact-us-page")}
                    >
                      Contact Us
                    </span>
                    <br />
                    <span
                      className="mb-1 p-2"
                      // onClick={() =>
                      //   router.push("/contact-us-track-your-order")
                      // }
                      onClick={() => router.push("/contact-us-page")}
                    >
                      Contact Us(Track order)
                    </span>{" "}
                    <br />
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
