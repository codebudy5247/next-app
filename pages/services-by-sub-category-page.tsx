import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

const ServicesBySubCategoryPage: NextPage = () => {
  const router = useRouter();

  const onAboutUsOurClick = useCallback(() => {
    router.push("/f-a-qs-page");
  }, [router]);

  const onCompanyText1Click = useCallback(() => {
    router.push("/about-page");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-us-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[8130px] overflow-hidden text-left text-5xl text-gray-1700 font-fedra-sans-std">
      <div className="absolute top-[692px] left-[883px] hidden flex-col p-[0px_20px] box-border items-center justify-center gap-[20px] text-center text-xl text-teal-100 font-open-sans">
        <div className="relative font-semibold inline-block">Scroll Down</div>
        <img
          className="relative w-[24.32px] h-[14px] shrink-0"
          alt=""
          src="../group-694.svg"
        />
      </div>
      <div className="absolute top-[7465px] left-[0px] w-[1920px] h-[665px] text-sm text-white font-open-sans">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[665px]" />
        <img
          className="absolute h-[91.78%] w-[31.36%] top-[996.63%] right-[59.73%] bottom-[-988.41%] left-[8.91%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="../group-543.svg"
        />
        <img
          className="absolute top-[135px] left-[337.1px] w-[1246.79px] h-[496px]"
          alt=""
          src="../world-map-bg.svg"
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
                    src="../facebook1.svg"
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
                    src="../linkedin5.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 hidden flex-col items-center justify-center">
                  <img
                    className="relative w-[16.09px] h-[16px] shrink-0"
                    alt=""
                    src="../whatsapp5.svg"
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
              src="../frame7.svg"
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
                  src="../group-691.svg"
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
      <div className="absolute top-[2502px] left-[6px] bg-gray-200 w-[1920px] h-[2772px] hidden" />
      <img
        className="absolute top-[97px] left-[0px] w-[1920px] h-[500px] object-cover"
        alt=""
        src="../rectangle-5@2x.png"
      />
      <div className="absolute top-[197px] left-[604px] flex flex-row items-center justify-start gap-[50px] text-base text-white">
        <img
          className="relative w-[90.38px] h-[102px] shrink-0"
          alt=""
          src="../group-58.svg"
        />
        <div className="flex flex-col items-start justify-center gap-[20px]">
          <div className="relative font-medium inline-block">
            Home / Domestic Relocation / Packers and movers in Delhi
          </div>
          <b className="relative text-5xl inline-block">
            Packers and Movers in Delhi
          </b>
        </div>
      </div>
      <div className="absolute top-[3480px] left-[298px] flex flex-col items-start justify-start gap-[100px]">
        <div className="w-[1322px] flex flex-row items-center justify-between">
          <div className="relative font-medium inline-block">
            Fulfillment Services Pricing
          </div>
          <div className="relative w-[192px] h-[56px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-gray-200 flex flex-row p-[20px] box-border items-center justify-start">
              <img
                className="relative w-[46px] h-[16px] shrink-0"
                alt=""
                src="../arrow-upward4.svg"
              />
            </div>
            <div className="absolute top-[0px] left-[106px] rounded-[10px] bg-gray-200 flex flex-row p-[20px] box-border items-center justify-start">
              <img
                className="relative w-[46px] h-[16px] shrink-0"
                alt=""
                src="../arrow-upward5.svg"
              />
            </div>
          </div>
        </div>
        <div className="relative w-[1810px] h-[502px] shrink-0 text-xs text-gray-1000">
          <div className="absolute top-[-1px] left-[-1px] rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[30px_40px] box-border items-center justify-start gap-[20px] text-3xl text-gray-1700">
              <img
                className="relative w-[116.43px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../neo-website1bhksmart-245-revised-1@2x.png"
              />
              <div className="relative font-medium inline-block">1 BHK</div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="absolute top-[-1px] left-[309px] rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[30px_40px] box-border items-center justify-start gap-[20px] text-3xl text-gray-1700">
              <img
                className="relative w-[138.1px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../2bhk-1@2x.png"
              />
              <div className="relative font-medium inline-block">2 BHK</div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="absolute top-[-1px] left-[619px] rounded-[20px] bg-gray-100 [border:1px_solid_#439fd9] box-border w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[30px_40px] box-border items-center justify-start gap-[20px] text-3xl text-teal-100">
              <img
                className="relative w-[132.44px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../independent3bhkapartment-1@2x.png"
              />
              <div className="relative font-medium inline-block">3 BHK</div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="absolute top-[-1px] left-[929px] rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[30px_40px] box-border items-center justify-start gap-[20px] text-3xl text-gray-1700">
              <img
                className="relative w-[139.37px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../3bhkduplex-1@2x.png"
              />
              <div className="relative font-medium inline-block">
                4 BHK/Villa
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="absolute top-[-1px] left-[1239px] rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[30px_40px] box-border items-center justify-start gap-[20px] text-3xl text-gray-1700">
              <img
                className="relative w-[178.04px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../hero-electric-family-1596104873135-1596104887977-1604409644620-1@2x.png"
              />
              <div className="relative font-medium inline-block">2 Wheeler</div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
          <div className="absolute top-[-1px] left-[1549px] rounded-[20px] bg-gray-100 [border:1px_solid_#d9d9d9] box-border w-[262px] flex flex-col items-start justify-center">
            <div className="rounded-[20px] bg-white w-[260px] flex flex-col p-[30px_40px] box-border items-center justify-start gap-[20px] text-3xl text-gray-1700">
              <img
                className="relative w-[189.9px] h-[100px] shrink-0 object-cover"
                alt=""
                src="../0-uzl7ckayiwzicwr9-1@2x.png"
              />
              <div className="relative font-medium inline-block">4 Wheeler</div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Within City
              </div>
              <div className="relative text-right inline-block">
                5000 - 8000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Upto 350km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                350 - 750km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                {" "}
                750 - 1200km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                1200 - 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
            <div className="rounded-[0px_0px_20px_20px] bg-white w-[260px] flex flex-row p-[16px_20px] box-border items-start justify-between">
              <div className="relative font-medium inline-block">
                Above 1700km
              </div>
              <div className="relative text-right inline-block">
                9500 - 22000
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[1320px] h-[5px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-gray-200 w-[1320px] h-[5px]" />
          <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-teal-100 w-[900px] h-[5px]" />
        </div>
      </div>
      <div className="absolute top-[1519px] left-[500px] flex flex-col items-center justify-start gap-[100px] text-center font-poppins">
        <b className="relative leading-[130%] inline-block w-[625px]">
          How White Glove Packers and Movers Works in Delhi
        </b>
        <div className="flex flex-row items-center justify-start gap-[100px] text-3xl text-white">
          <img
            className="relative w-[516px] h-[517px] shrink-0"
            alt=""
            src="../group-751.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[40px]">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-[20px] bg-teal-100 w-[68px] shrink-0 flex flex-col p-[10px] box-border items-center justify-center">
                <b className="relative inline-block">01</b>
              </div>
              <b className="relative text-2xl leading-[130%] inline-block text-teal-100 text-left w-[196px] shrink-0">
                Share your Requirement
              </b>
            </div>
            <div className="relative text-xl leading-[130%] font-semibold font-open-sans text-gray-1100 text-left inline-block w-[314px]">
              White Glove specializes in offering corporate shifting services,
              tailor-made for specific categories of goods. Share your
              requirements.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[397px] left-[200px] rounded-[20px] bg-white [border:2px_solid_#f1f1f1] box-border w-[1520px] flex flex-row p-[100px] items-start justify-between">
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-center">
            <b className="relative leading-[130%] inline-block w-[506px]">
              Best packers and movers services in Delhi
            </b>
          </div>
          <div className="relative rounded-[20px] bg-gray-600 w-[641px] h-[350px] shrink-0" />
          <div className="relative text-xl leading-[130%] text-gray-1000 inline-block w-[641px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Relocating your home or office in Delhi? Worried about potential damage?
Want to avoid the possibility of delays? White Glove is your one-stop
solution, having emerged as a preferred packer and mover in Delhi. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-[0]">
              We follow robust protocols around safety and timely delivery. Our
              end-to-end services and professional teams ensure that you
              experience a hassle-free transition
            </p>
          </div>
        </div>
        <div className="rounded-[20px] [border:2px_solid_#d9d9d9] box-border relative flex flex-col p-[50px] items-start justify-center gap-[40px] text-xl font-open-sans">
          <b className="relative text-3xl leading-[130%] inline-block font-poppins">
            Quicly Inquiry
          </b>
          <div className="flex flex-col items-start justify-start gap-[30px] text-gray-500">
            <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
              <div className="relative font-semibold inline-block">
                Your Name
              </div>
            </div>
            <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
              <div className="relative font-semibold inline-block">
                Mobile Number
              </div>
            </div>
            <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
              <div className="relative font-semibold inline-block">
                Email Address
              </div>
            </div>
            <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
              <div className="relative font-semibold inline-block">
                What do you want to Move?
              </div>
            </div>
          </div>
          <div className="rounded-[10px] bg-gold flex flex-row p-[20px_40px] box-border items-center justify-start gap-[20px]">
            <div className="relative font-semibold inline-block">
              Send Inquiry
            </div>
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-69.svg"
            />
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt5.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[2430px] left-[0px] w-[1920px] h-[850px] text-3xl text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[850px] object-cover"
          alt=""
          src="../rectangle-13@2x.png"
        />
        <div className="absolute top-[163px] left-[970px] flex flex-col items-start justify-start gap-[50px]">
          <b className="relative leading-[130%] inline-block w-[424px]">
            Choose Professional Service with White Glove
          </b>
          <div className="relative text-xl leading-[130%] inline-block w-[635px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`For hassle-free domestic relocation, it's crucial to hire professional packers and movers for house shifting in Delhi. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`It requires meticulous planning and execution, as there might be entry restrictions for bigger trucks; especially in areas that are home to embassies and government establishments. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Additionally, it’s impossible to arrange a large truck in certain societies and neighborhoods due to area restrictions. In such cases, we might have to use a shuttle. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-[0]">
              At White Glove, our well-trained team helps you create a detailed
              and affordable shifting plan, tailor-made to your needs. We handle
              all your needs with the utmost care and safety best practices so
              that you can relax and enjoy the move.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[5553px] left-[0px] bg-gray-1700 flex flex-col p-[200px_0px_100px] box-border items-center justify-center gap-[100px] text-center text-3xl text-white">
        <div className="flex flex-col items-center justify-start gap-[30px]">
          <b className="relative inline-block">We are trusted by many</b>
          <div className="relative text-xl leading-[130%] font-semibold font-open-sans inline-block w-[855px]">
            With our mission to make every relocation a happy experience,
            coupled with our company-wide institutionalized best practices,
            White Glove has emerged as a preferred choice for your domestic
            relocation requirements.
          </div>
        </div>
        <div className="relative w-[1923px] h-[426px] shrink-0">
          <div className="absolute top-[-0.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[171px] h-[50px] shrink-0 object-cover"
              alt=""
              src="../group-52@2x.png"
            />
          </div>
          <div className="absolute top-[212.5px] left-[-0.5px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[175px] h-[58px] shrink-0 object-cover"
              alt=""
              src="../mask-group@2x.png"
            />
          </div>
          <div className="absolute top-[-0.5px] left-[384.1px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[92px] h-[70px] shrink-0 object-cover"
              alt=""
              src="../mask-group1@2x.png"
            />
          </div>
          <div className="absolute top-[212.5px] left-[384.1px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[193px] h-[58px] shrink-0 object-cover"
              alt=""
              src="../mask-group2@2x.png"
            />
          </div>
          <div className="absolute top-[-0.5px] left-[768.7px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[175px] h-[46px] shrink-0 object-cover"
              alt=""
              src="../mask-group3@2x.png"
            />
          </div>
          <div className="absolute top-[212.5px] left-[768.7px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[171px] h-[50px] shrink-0 object-cover"
              alt=""
              src="../group-521@2x.png"
            />
          </div>
          <div className="absolute top-[-0.5px] left-[1153.3px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-row p-[50px] items-center justify-center">
            <img
              className="relative w-[55px] h-[63px] shrink-0 object-cover"
              alt=""
              src="../mask-group4@2x.png"
            />
          </div>
          <div className="absolute top-[212.5px] left-[1153.3px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-row p-[50px] items-center justify-center">
            <img
              className="relative w-[211px] h-[48px] shrink-0 object-cover"
              alt=""
              src="../mask-group5@2x.png"
            />
          </div>
          <div className="absolute top-[-0.5px] left-[1537.9px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[166px] h-[56px] shrink-0 object-cover"
              alt=""
              src="../mask-group6@2x.png"
            />
          </div>
          <div className="absolute top-[212.5px] left-[1537.9px] [border:1px_solid_#22567f] box-border w-[385.6px] h-[214px] flex flex-col p-[50px] items-center justify-center">
            <img
              className="relative w-[212px] h-[70px] shrink-0 object-cover"
              alt=""
              src="../mask-group7@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[4443px] left-[0px] w-[1920px] h-[1110px] text-xl">
        <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] h-[1110px]" />
        <div className="absolute top-[100px] left-[555px] flex flex-col items-center justify-start gap-[100px]">
          <b className="relative text-6xl inline-block text-center">
            FAQ about Packers and Movers
          </b>
          <div className="flex flex-col items-start justify-start text-gray-1300">
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[810px] flex flex-row p-[30px_0px] items-center justify-between">
              <div className="relative font-medium inline-block">
                When is the best time to relocate?
              </div>
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../arrow-forward-ios1.svg"
              />
            </div>
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[810px] flex flex-col p-[30px_0px] items-start justify-start gap-[20px] text-teal-100">
              <div className="w-[810px] flex flex-row items-center justify-between">
                <div className="relative font-medium inline-block">
                  When should I contact relocation companies for estimates?
                </div>
                <img
                  className="relative w-[40px] h-[40px] shrink-0"
                  alt=""
                  src="../arrow-forward-ios2.svg"
                />
              </div>
              <div className="relative text-base leading-[150%] text-gray-1100 inline-block w-[748px]">
                Try to provide moving companies with as much notice as possible,
                especially if you are moving during the summer months (mid-May
                to mid-September) or at the beginning or end of a month
                (regardless of the season). We recommend making arrangements at
                least four to six weeks before your desired moving date. This
                will increase your likelihood of securing the pickup and
                delivery dates you desire. Add even more time to make a decision
                if you are obligated by your employer to submit estimates for
                approval.
              </div>
            </div>
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[810px] flex flex-row p-[30px_0px] items-center justify-between">
              <div className="relative font-medium inline-block">
                How could your company's prices differ from others?
              </div>
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../arrow-forward-ios3.svg"
              />
            </div>
            <div className="border-t-[0px_solid_#e8e8e8] border-r-[0px_solid_#e8e8e8] border-b-[2px_solid_#e8e8e8] border-l-[0px_solid_#e8e8e8] box-border relative w-[810px] flex flex-row p-[30px_0px] items-center justify-between">
              <div className="relative font-medium inline-block w-[718px] shrink-0">
                There are major differences between the movers’ estimated
                volumes. How do I deal with this?
              </div>
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../arrow-forward-ios4.svg"
              />
            </div>
          </div>
          <div className="rounded-[10px] [border:1px_solid_#439fd9] box-border relative flex flex-row p-[30px_40px] items-center justify-start gap-[20px] text-teal-100">
            <div className="relative inline-block">View all FAQs</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt6.svg"
            />
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-6911.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[6527px] left-[0px] bg-gray-100 w-[1920px] flex flex-col p-[200px_100px_100px] box-border items-center justify-start gap-[100px] text-center">
        <b className="relative leading-[130%] inline-block">
          Location we Services in Delhi
        </b>
        <div className="flex flex-row items-start justify-start gap-[30px] text-left text-base">
          <div className="relative w-[370px] h-[486px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-start">
              <div className="relative inline-block">
                Packers and Movers Services in Shahpur
              </div>
            </div>
            <div className="absolute top-[62px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Rajender Nagar
              </div>
            </div>
            <div className="absolute top-[124px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Madanpur Khadar
              </div>
            </div>
            <div className="absolute top-[186px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Yamuna Nagar
              </div>
            </div>
            <div className="absolute top-[248px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in New Ashok Nagar
              </div>
            </div>
            <div className="absolute top-[310px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Okhla
              </div>
            </div>
            <div className="absolute top-[372px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Khanpur
              </div>
            </div>
            <div className="absolute top-[434px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in South Exention Part 1
              </div>
            </div>
          </div>
          <div className="relative w-[370px] h-[486px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-start">
              <div className="relative inline-block">
                Packers and Movers Services in Madangir
              </div>
            </div>
            <div className="absolute top-[62px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Ashram
              </div>
            </div>
            <div className="absolute top-[124px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#439fd9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center text-teal-100">
              <div className="relative inline-block">
                Packers and Movers Services in Tigri
              </div>
            </div>
            <div className="absolute top-[186px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Tughlakabad
              </div>
            </div>
            <div className="absolute top-[248px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Surat
              </div>
            </div>
            <div className="absolute top-[310px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Kolkata
              </div>
            </div>
            <div className="absolute top-[372px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Hissar
              </div>
            </div>
            <div className="absolute top-[434px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Bhubaneswar
              </div>
            </div>
          </div>
          <div className="relative w-[370px] h-[486px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-start">
              <div className="relative inline-block">
                Packers and Movers Services in Jammu
              </div>
            </div>
            <div className="absolute top-[62px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Dharamshala
              </div>
            </div>
            <div className="absolute top-[124px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Indore
              </div>
            </div>
            <div className="absolute top-[186px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Jabbalpur
              </div>
            </div>
            <div className="absolute top-[248px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Goa
              </div>
            </div>
            <div className="absolute top-[310px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Guwahati
              </div>
            </div>
            <div className="absolute top-[372px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Dehradun
              </div>
            </div>
            <div className="absolute top-[434px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Ranchi
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default ServicesBySubCategoryPage;
