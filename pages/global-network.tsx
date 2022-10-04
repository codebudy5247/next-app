import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const GlobalNetwork: NextPage = () => {
  const router = useRouter();

  const onCompanyTextClick = useCallback(() => {
    router.push("/about-page");
  }, [router]);

  const onFrameContainer7Click = useCallback(() => {
    router.push("/contact-us-track-your-order");
  }, [router]);

  const onAboutUsOurClick = useCallback(() => {
    router.push("/global-network");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[3494px] overflow-hidden text-left text-base text-gray-1700 font-fedra-sans-std">
      <div className="absolute top-[100px] left-[0px] bg-gray-200 w-[1920px] h-[196px]" />
      <img
        className="absolute top-[100px] left-[0px] w-[1920px] h-[196px]"
        alt=""
        src="../mask-group8.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] flex flex-row p-[10px_300px] box-border items-center justify-between text-lg">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[145.71px] h-[60px] shrink-0 overflow-hidden"
            alt=""
            src="../frame11.svg"
          />
        </div>
        <div className="flex flex-row p-[10px_3px] box-border items-center justify-start gap-[60px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-row p-[16px] box-border items-center justify-start">
              <div className="relative inline-block">Home</div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px]">
              <div
                className="relative inline-block cursor-pointer"
                onClick={onCompanyTextClick}
              >
                Company
              </div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right13.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[10px]">
              <div className="relative inline-block">Services</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right13.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start">
              <div className="relative inline-block">Careers</div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[10px] text-teal-100">
              <div className="relative font-medium inline-block">Contact</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right5.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="rounded-[10px] bg-gray-200 flex flex-row p-[16px] box-border items-center justify-center gap-[10px] cursor-pointer"
            onClick={onFrameContainer7Click}
          >
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../location-on5.svg"
            />
            <div className="relative inline-block">Track Your Order</div>
          </div>
          <img
            className="relative w-[32px] h-[32px] shrink-0"
            alt=""
            src="../menu5.svg"
          />
        </div>
      </div>
      <div className="absolute top-[146px] left-[587px] flex flex-row items-center justify-start gap-[30px] text-5xl font-poppins">
        <img
          className="relative w-[109.03px] h-[100px] shrink-0"
          alt=""
          src="../group-104.svg"
        />
        <div className="flex flex-col items-start justify-center">
          <b className="relative leading-[130%] inline-block">
            White Glove’s Global Network
          </b>
        </div>
      </div>
      <div className="absolute top-[2829px] left-[0px] w-[1920px] h-[665px] text-sm text-white font-open-sans">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[665px]" />
        <img
          className="absolute top-[135px] left-[337.1px] w-[1246.79px] h-[496px]"
          alt=""
          src="../world-map-bg1.svg"
        />
        <div className="absolute top-[544.59px] left-[300px] w-[1319px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-1400 w-[1319px] h-[1px]" />
          <div className="absolute top-[31px] left-[0px] w-[1319px] h-[39px]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[30px]">
              <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                <div className="relative font-semibold inline-block">
                  Privacy Policy
                </div>
              </div>
              <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                <div className="relative font-semibold inline-block">{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className="absolute top-[10px] left-[491px] font-semibold inline-block">
              Copyright © 2022 White Glove, All Rights Reserved
            </div>
            <div className="absolute top-[4px] left-[1161px] flex flex-row items-center justify-center">
              <div className="flex flex-row items-start justify-start gap-[10px]">
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row p-[10px] items-center justify-center">
                  <img
                    className="relative w-[9.08px] h-[16px] shrink-0"
                    alt=""
                    src="../facebook3.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[16px] h-[16px] shrink-0"
                    alt=""
                    src="../instagram1.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col p-[10px] items-center justify-center">
                  <img
                    className="relative w-[18px] h-[16px] shrink-0"
                    alt=""
                    src="../twitter1.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#22567f] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col items-center justify-center">
                  <img
                    className="relative w-[16px] h-[16px] shrink-0"
                    alt=""
                    src="../linkedin7.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 hidden flex-col items-center justify-center">
                  <img
                    className="relative w-[16.09px] h-[16px] shrink-0"
                    alt=""
                    src="../whatsapp6.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[100px] left-[300px] w-[1066px] h-[405px] text-xl">
          <div className="absolute top-[0px] left-[477px] w-[589px] h-[284px] text-gray-1200">
            <div className="absolute top-[0px] left-[497px] w-[92px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                Company
              </div>
              <div
                className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block cursor-pointer"
                onClick={onAboutUsOurClick}
              >
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  About Us
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Our Clients
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  FAQs
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Careers
                </p>
                <p className="m-[0]">Blogs</p>
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[129px] h-[284px]">
              <div className="absolute top-[0px] left-[0px] w-[129px] h-[117px]">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                  Our Divisions
                </div>
                <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    White Glove
                  </p>
                  <p className="m-[0]">FLITTE Logistics</p>
                </div>
              </div>
              <div className="absolute top-[167px] left-[0px] w-[106px] h-[117px]">
                <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                  Contact Us
                </div>
                <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Get In Touch
                  </p>
                  <p className="m-[0]">Global Network</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[229px] w-[168px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-semibold inline-block">
                Services
              </div>
              <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] font-semibold text-white inline-block">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Domestic Relocation
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Vehicle shifting
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  International Relocation
                </p>
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  Corporate Relocation
                </p>
                <p className="m-[0]">Storage</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[255px] h-[344.59px] text-sm">
            <div className="absolute top-[161.59px] left-[0px] w-[255px] h-[183px]">
              <div className="absolute top-[44px] left-[0px] leading-[150%] font-semibold inline-block w-[255px]">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  22/18, 2nd Floor, Row B1,Opp. C2 Gate, Near Ansal Corporate
                  Plaza,
                </p>
                <p className="m-[0]">Gurgaon, India, 122017</p>
              </div>
              <b className="absolute top-[0px] left-[0px] text-base leading-[150%] inline-block">
                Head Office
              </b>
              <div className="absolute top-[127px] left-[0px] leading-[200%] inline-block">
                <p className="[margin-block-start:0] [margin-block-end:0px]">
                  <span className="font-semibold font-open-sans">
                    <span className="text-gray-1200">Toll Free:</span>
                  </span>
                  <span>
                    <span className="font-semibold font-open-sans">{` `}</span>
                    <span>1800 1209 7225</span>
                  </span>
                </p>
                <p className="m-[0]">
                  <span className="font-semibold">
                    <span className="text-gray-1200">Email:</span>
                    <span> inquiry@whiteglove.co.in</span>
                  </span>
                </p>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[200px] h-[81.59px] overflow-hidden"
              alt=""
              src="../frame12.svg"
            />
          </div>
          <div className="absolute top-[314px] left-[477px] rounded-[20px] bg-gray-1500 w-[589px] flex flex-row p-[20px_30px] box-border items-center justify-center gap-[25px] text-base">
            <div className="relative font-semibold inline-block w-[132px] shrink-0">
              Subscribe to our Newsletter
            </div>
            <div className="w-[354px] shrink-0 flex flex-row items-center justify-start gap-[20px] text-sm text-gray-1200">
              <div className="rounded-[10px] bg-gray-1700 [border:1px_solid_#22567f] box-border relative w-[197px] shrink-0 overflow-hidden flex flex-row p-[16px] items-center justify-start">
                <div className="relative font-semibold inline-block">
                  Email Id
                </div>
              </div>
              <div className="rounded-[10px] bg-gold flex flex-row p-[16px] box-border items-center justify-center gap-[16px] text-gray-1700">
                <div className="relative font-semibold inline-block">
                  Subscribe
                </div>
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-693.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[457px] left-[1571px] rounded-[10px] bg-gold w-[48px] h-[48px] flex flex-row items-center justify-center">
          <img
            className="relative w-[16px] h-[16px] shrink-0"
            alt=""
            src="../arrow-upward.svg"
          />
        </div>
      </div>
      <div className="absolute top-[405px] left-[556px] flex flex-row p-[10px_0px] box-border items-center justify-start gap-[20px] text-xl">
        <div className="relative inline-block">West Europe</div>
        <img
          className="relative w-[21.84px] h-[14px] shrink-0"
          alt=""
          src="../group-693.svg"
        />
      </div>
      <div className="absolute top-[405px] left-[825px] flex flex-row p-[10px_0px] box-border items-center justify-start gap-[10px] text-xl">
        <div className="relative inline-block">Middle East</div>
        <img
          className="relative w-[21.84px] h-[14px] shrink-0"
          alt=""
          src="../group-693.svg"
        />
      </div>
      <div className="absolute top-[405px] left-[1113px] flex flex-row p-[10px_0px] box-border items-center justify-start gap-[10px] text-xl">
        <div className="relative inline-block">Asia Pacific</div>
        <img
          className="relative w-[21.84px] h-[14px] shrink-0"
          alt=""
          src="../group-693.svg"
        />
      </div>
      <div className="absolute top-[466px] left-[556px] leading-[250%] inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">France</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">Germany</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          Netherlands
        </p>
        <p className="m-[0]">Ireland</p>
      </div>
      <div className="absolute top-[466px] left-[825px] leading-[250%] inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          United Arab Emirates
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">Turkey</p>
        <p className="m-[0]">Saudi Arabia</p>
      </div>
      <div className="absolute top-[466px] left-[1113px] leading-[250%] inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          Australia
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          Indonesia
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          New Zealand
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          Singapore
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">China</p>
        <p className="m-[0]">Thailand</p>
      </div>
      <div className="absolute top-[466px] left-[1276px] leading-[250%] inline-block">
        <p className="[margin-block-start:0] [margin-block-end:0px]">Japan</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">Korea</p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">
          Malaysia
        </p>
        <p className="[margin-block-start:0] [margin-block-end:0px]">India</p>
        <p className="m-[0]">Hong Kong</p>
      </div>
    </div>
  );
};

export default GlobalNetwork;
