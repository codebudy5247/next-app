import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import useWindowResize from "../hooks/useWindowResize";

const DomesticRelocationPage: NextPage = () => {
  const router = useRouter();

  const onCompanyText1Click = useCallback(() => {
    router.push("/about-page");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-us-page");
  }, [router]);

  const windowSize = useWindowResize();

  return (
    <>
      <div className="relative bg-white w-full h-[7774px] overflow-hidden text-left text-xl text-gray-1700 font-fedra-sans-std">
      <img
        className="absolute top-[161px] left-[0px] w-[1920px] h-[500px] object-cover"
        alt=""
        src="../rectangle-51@2x.png"
      />
      <img
        className="absolute top-[95px] left-[758.87px] w-[1723.22px] h-[477.93px] hidden"
        alt=""
        src="../group-781.svg"
      />
      <div className="absolute top-[7109px] left-[0px] w-[1920px] h-[665px] text-sm text-white">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[665px]" />
        <img
          className="absolute h-[87.76%] w-[31.36%] top-[911.25%] right-[59.73%] bottom-[-899.01%] left-[8.91%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="../group-545.svg"
        />
        <img
          className="absolute top-[135px] left-[337.1px] w-[1246.79px] h-[496px]"
          alt=""
          src="../world-map-bg6.svg"
        />
        <div className="absolute top-[544.59px] left-[300px] w-[1319px] h-[69px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-1400 w-[1319px] h-[1px]" />
          <div className="absolute top-[31px] left-[0px] w-[1319px] h-[38px]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[30px]">
              <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                <div className="relative inline-block">Privacy Policy</div>
              </div>
              <div className="flex flex-row p-[10px_0px] box-border items-center justify-start">
                <div className="relative inline-block">{`Terms & Conditions`}</div>
              </div>
            </div>
            <div className="absolute top-[10px] left-[491px] inline-block">
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
                    src="../whatsapp8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[100px] left-[300px] w-[1069px] h-[404px] text-xl">
          <div className="absolute top-[0px] left-[477px] w-[592px] h-[284px] text-gray-1200">
            <div className="absolute top-[0px] left-[497px] w-[95px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                Company
              </div>
              <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] text-white inline-block">
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
            <div className="absolute top-[0px] left-[0px] w-[133px] h-[284px]">
              <div className="absolute top-[0px] left-[0px] w-[133px] h-[117px]">
                <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                  Our Divisions
                </div>
                <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] text-white inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    White Glove
                  </p>
                  <p className="m-[0]">FLITTE Logistics</p>
                </div>
              </div>
              <div className="absolute top-[167px] left-[0px] w-[110px] h-[117px]">
                <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                  Contact Us
                </div>
                <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] text-white inline-block">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Get In Touch
                  </p>
                  <p className="m-[0]">Global Network</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[229px] w-[170px] h-[222px]">
              <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                Services
              </div>
              <div className="absolute top-[47px] left-[0px] text-sm leading-[250%] text-white inline-block">
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
              <div className="absolute top-[44px] left-[0px] leading-[150%] inline-block w-[255px]">
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
                  <span className="text-gray-1200">Toll Free:</span>
                  <span> 1800 1209 7225</span>
                </p>
                <p className="m-[0]">
                  <span className="text-gray-1200">Email:</span>
                  <span> inquiry@whiteglove.co.in</span>
                </p>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-[200px] h-[81.59px] overflow-hidden"
              alt=""
              src="../frame13.svg"
            />
          </div>
          <div className="absolute top-[314px] left-[477px] rounded-[20px] bg-gray-1500 w-[589px] flex flex-row p-[20px_30px] box-border items-center justify-center gap-[25px] text-base">
            <div className="relative leading-[140%] font-medium inline-block w-[132px] shrink-0">
              Subscribe to our Newsletter
            </div>
            <div className="w-[354px] shrink-0 flex flex-row items-center justify-start gap-[20px] text-sm text-gray-1200">
              <div className="rounded-[10px] bg-gray-1700 [border:1px_solid_#22567f] box-border relative w-[197px] shrink-0 overflow-hidden flex flex-row p-[16px] items-center justify-start">
                <div className="relative inline-block">Email Id</div>
              </div>
              <div className="rounded-[10px] bg-gold flex flex-row p-[16px] box-border items-center justify-center gap-[16px] text-gray-1700">
                <div className="relative font-medium inline-block">
                  Subscribe
                </div>
                <img
                  className="relative w-[21.84px] h-[14px] shrink-0"
                  alt=""
                  src="../group-6918.svg"
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
      <div className="absolute top-[836px] left-[555px] rounded-[20px] hidden flex-row p-[0px_30px] box-border items-center justify-center gap-[70px]">
        <img
          className="relative w-[136.8px] h-[40px] shrink-0 object-cover"
          alt=""
          src="../group-522@2x.png"
        />
        <img
          className="relative w-[133.15px] h-[35px] shrink-0 object-cover"
          alt=""
          src="../mask-group9@2x.png"
        />
        <img
          className="relative w-[133.39px] h-[45px] shrink-0 object-cover"
          alt=""
          src="../mask-group10@2x.png"
        />
        <img
          className="relative w-[135.78px] h-[45px] shrink-0 object-cover"
          alt=""
          src="../mask-group11@2x.png"
        />
      </div>
      <div className="absolute top-[1487px] left-[137px] w-[1483px] h-[471px] text-teal-100">
        <img
          className="absolute top-[-85px] left-[-90px] w-[1072px] h-[644px]"
          alt=""
          src="../vector1.svg"
        />
        <div className="absolute top-[0px] left-[992px] flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-center gap-[20px]">
            <div className="relative font-medium inline-block">
              Domestic Relocation
            </div>
            <b className="relative text-3xl leading-[130%] inline-block text-gray-1700 w-[424px]">
              Count on our hassle-free moving experience.
            </b>
          </div>
          <div className="relative leading-[130%] text-gray-1000 inline-block w-[491px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Count on our hassle-free moving experience. All we need you to do, is to share your requirements with us. Rest assured that our fleet of container vehicles are fully equipped to handle just about any volumes. `}</p>
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              &nbsp;
            </p>
            <p className="m-[0]">
              Basis your bespoke requirements, we offer you an instant,
              cost-effective, tailor-made proposal. We are only your
              confirmation away in relocating your household articles to their
              new home! Our professionals work hard to ensure that you enjoy
              complete peace of mind through this process.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-[3343px] left-[500px] flex flex-col items-center justify-start gap-[100px] text-center text-5xl font-poppins">
        <b className="relative leading-[130%] inline-block">How it Works</b>
        <div className="flex flex-row items-center justify-start gap-[100px] text-3xl text-white">
          <img
            className="relative w-[516px] h-[517px] shrink-0"
            alt=""
            src="../group-752.svg"
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
      <div className="absolute top-[2158px] left-[0px] w-[1920px] h-[990px] text-3xl">
        <div className="absolute top-[442px] left-[0px] bg-gold w-[1920px] h-[548px]" />
        <div className="absolute top-[0px] left-[300px] rounded-[30px] bg-white [border:2px_solid_#f7c600] box-border flex flex-col p-[80px] items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-center">
            <b className="relative leading-[130%] inline-block">Why we are?</b>
          </div>
          <div className="relative text-xl leading-[130%] text-gray-1000 inline-block w-[491px]">
            <p className="[margin-block-start:0] [margin-block-end:0px]">
              A one-stop solution for all your relocation requirements, at White
              Glove, we have brought in the much-needed standardization in
              safety, accountability, professionalism and an unmatched service
              experience. Zero downtime and damage free delivery are the
              hallmarks of our service.  
            </p>
            <p className="m-[0]">
              Here are some of the other advantages we have on offer, making us
              a preferred choice when it comes to selecting packers and movers:
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-[10px] text-sm">
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../payments.svg"
                />
                <div className="relative inline-block">Pay on Delivery</div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../package.svg"
                />
                <div className="relative inline-block">
                  Free Damage Liability Package
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../health-and-safety.svg"
                />
                <div className="relative inline-block">Free Insurance</div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../history-toggle-off.svg"
                />
                <div className="relative inline-block">
                  Free Luxurious stay for delayed delivery
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../quiz.svg"
                />
                <div className="relative leading-[130%] inline-block">
                  Not-to-Exceed Quote
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../mode-of-travel.svg"
                />
                <div className="relative leading-[130%] inline-block">
                  Real Time Tracking
                </div>
              </div>
            </div>
            <div className="rounded-[10px] bg-gray-200 [border:1px_solid_#c9e3f4] box-border relative flex flex-row p-[10px_16px] items-center justify-start gap-[20px]">
              <div className="w-[20px] h-[20px] shrink-0 flex flex-col items-center justify-center">
                <img
                  className="relative w-[15.58px] h-[12px] shrink-0"
                  alt=""
                  src="../check-small.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../space-dashboard.svg"
                />
                <div className="relative leading-[130%] inline-block">
                  Dedicated Used Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-[130px] left-[1094px] w-[627px] h-[860px] object-cover"
          alt=""
          src="../edition-1@2x.png"
        />
      </div>
      <div className="absolute top-[4202px] left-[0px] w-[1920px] h-[1329px] text-gray-1300">
        <div className="absolute top-[306px] left-[0px] bg-gray-200 w-[1920px] h-[1023px]" />
        <img
          className="absolute top-[1035px] left-[1194px] w-[139.07px] h-[131.65px] overflow-hidden"
          alt=""
          src="../frame14.svg"
        />
        <div className="absolute top-[661px] left-[632px] rounded-[20px] bg-white flex flex-col p-[60px] box-border items-start justify-center gap-[50px]">
          <div className="relative w-[399px] h-[140px] shrink-0">
            <div className="absolute top-[9px] left-[190px] w-[209px] h-[121px]">
              <div className="absolute top-[0px] left-[0px] w-[209px] h-[73px]">
                <div className="absolute top-[0px] left-[0px] font-medium inline-block">
                  Mainak Chakraborty
                </div>
                <div className="absolute top-[37px] left-[0px] text-sm inline-block w-[148px]">{`Co-founder & CEO, GPS Renewables`}</div>
              </div>
              <div className="absolute top-[85px] left-[0px] text-sm text-gray-1100 inline-block w-[173px]">
                Relocated from Bangalore to Hyderabad
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-[20px] w-[140px] h-[140px] object-cover"
              alt=""
              src="../rectangle-11@2x.png"
            />
          </div>
          <div className="relative text-base leading-[150%] text-gray-1700 inline-block w-[537px]">
            I moved from Whitefield, Bangalore to Hyderabad with Pikkol
            recently. I had been in Bangalore for many years, so, had
            considerable number of items. My Whitefield house was a duplex villa
            (without a lift) with many of these items in the first floor.
          </div>
          <img
            className="relative w-[128px] h-[12px] shrink-0"
            alt=""
            src="../group-15.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[470px] w-[981px] h-[461px] text-2xl text-gray-1700 font-open-sans">
          <div className="absolute top-[150px] left-[0px] w-[981px] h-[311px]">
            <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-white [border:2px_solid_#f5fafd] box-border flex flex-col p-[30px] items-start justify-center gap-[40px]">
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative font-semibold inline-block">
                  Frindly
                </div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Enjoy custom-tailored moving help that meets your needs, and
                    receive thoughtful support every step of the way.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[339px] rounded-[20px] bg-white [border:2px_solid_#f5fafd] box-border flex flex-col p-[30px] items-start justify-center gap-[40px]">
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative font-semibold inline-block">
                  Professional
                </div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    Our White Glove pros move quickly but carefully from start
                    to finish. We believe attitude matters as much as muscle.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[678px] rounded-[20px] bg-white [border:2px_solid_#f5fafd] box-border flex flex-col p-[30px] items-start justify-center gap-[40px]">
              <img
                className="relative w-[58.67px] h-[48px] shrink-0"
                alt=""
                src="../sticky-note-2.svg"
              />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative font-semibold inline-block">
                  Efficient
                </div>
                <div className="relative text-base text-gray-1100 inline-block w-[243px]">
                  Reserve your service without the need for an in-home estimate.
                  Manage your entire experience digitally on your online
                  dashboard.
                </div>
              </div>
            </div>
          </div>
          <b className="absolute top-[0px] left-[52px] text-5xl inline-block font-fedra-sans-std text-center">
            It’s time to expect more from your movers.
          </b>
        </div>
      </div>
      <div className="absolute top-[5531px] left-[0px] bg-gray-100 w-[1920px] flex flex-col p-[100px] box-border items-center justify-start gap-[100px] text-center text-5xl">
        <b className="relative leading-[130%] inline-block w-[587px]">
          Search Packers and Movers Services By Location
        </b>
        <div className="flex flex-row items-start justify-start gap-[30px] text-left text-base">
          <div className="relative w-[370px] h-[486px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-start">
              <div className="relative inline-block">
                Packers and Movers Services in Delhi
              </div>
            </div>
            <div className="absolute top-[62px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Gurgaon
              </div>
            </div>
            <div className="absolute top-[124px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Hyderabad
              </div>
            </div>
            <div className="absolute top-[186px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Mumbai
              </div>
            </div>
            <div className="absolute top-[248px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Chennai
              </div>
            </div>
            <div className="absolute top-[310px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Pune
              </div>
            </div>
            <div className="absolute top-[372px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Bangalore
              </div>
            </div>
            <div className="absolute top-[434px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Noida
              </div>
            </div>
          </div>
          <div className="relative w-[370px] h-[486px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-start">
              <div className="relative inline-block">
                Packers and Movers Services in Jaipur
              </div>
            </div>
            <div className="absolute top-[62px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Chandigarh
              </div>
            </div>
            <div className="absolute top-[124px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#439fd9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center text-teal-100">
              <div className="relative inline-block">
                Packers and Movers Services in Amritsar
              </div>
            </div>
            <div className="absolute top-[186px] left-[0px] rounded-[10px] bg-white [border:1px_solid_#d9d9d9] box-border w-[370px] flex flex-col p-[16px] items-start justify-center">
              <div className="relative inline-block">
                Packers and Movers Services in Ahmedabad
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
      <div className="absolute top-[6621px] left-[300px] rounded-[20px] bg-gray-1700 w-[1321px] flex flex-row p-[100px] box-border items-center justify-between text-5xl text-white">
        <div className="rounded-[20px] flex flex-col items-start justify-center gap-[10px]">
          <div className="relative leading-[130%] font-medium inline-block">
            Are you planning to relocate?
          </div>
          <div className="relative text-xl leading-[130%] font-medium text-gray-1000 inline-block">
            Let’s discuss further with our expert.
          </div>
        </div>
        <div className="rounded-[10px] bg-gold flex flex-row p-[20px_40px] box-border items-center justify-start gap-[20px] text-xl text-gray-1700 font-open-sans">
          <div className="relative font-semibold inline-block">Let’s Talk</div>
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt8.svg"
          />
          <img
            className="relative w-[21.84px] h-[14px] shrink-0"
            alt=""
            src="../group-6919.svg"
          />
        </div>
      </div>
      <div className="absolute top-[561px] left-[197px] rounded-[20px] bg-white [border:2px_solid_#f1f1f1] box-border flex flex-row p-[100px] items-start justify-start gap-[167px]">
        <div className="rounded-[20px] bg-white flex flex-col p-[50px] box-border items-start justify-start gap-[10px]">
          <div className="flex flex-col items-start justify-start gap-[50px]">
            <b className="relative text-6xl inline-block w-[539px]">
              White Glove Domestic Relocation
            </b>
            <div className="flex flex-row items-start justify-start gap-[50px]">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative font-medium inline-block">Safety</div>
                <div className="relative text-base text-gray-1000 inline-block">
                  Conscious drivers
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative font-medium inline-block">
                  Real-time
                </div>
                <div className="relative text-base text-gray-1000 inline-block">
                  Online tracking
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative font-medium inline-block">{`Dedicated `}</div>
                <div className="relative text-base text-gray-1000 inline-block">
                  Moving services
                </div>
              </div>
            </div>
            <div className="relative w-[462px] h-[102px] shrink-0 text-3xl font-poppins">
              <div className="absolute top-[-119px] left-[0px] leading-[130%] font-medium hidden w-[383px] h-[89px]">{`Secure Sifting for small & big moves`}</div>
              <div className="absolute top-[0px] left-[0px] text-2xl leading-[140%] font-fedra-sans-std text-gray-1100 inline-block w-[462px]">{`Receive fixed-price, individualized plans and reserve your move without having to worry about hidden fees. `}</div>
            </div>
            <div className="rounded-[10px] bg-gold hidden flex-row p-[20px_40px] box-border items-center justify-start gap-[20px]">
              <div className="relative font-medium inline-block">Order Now</div>
              <img
                className="relative w-[20.84px] h-[12px] shrink-0"
                alt=""
                src="../group-6920.svg"
              />
            </div>
          </div>
          <div className="relative w-[603px] h-[523px] shrink-0 hidden">
            <img
              className="absolute top-[0px] left-[72.84px] w-[530.16px] h-[523px] object-cover"
              alt=""
              src="../delivery--3d-sale--marketing-illustration-pack-front-1@2x.png"
            />
            <img
              className="absolute top-[250.75px] left-[0px] w-[237.62px] h-[183.89px] object-cover"
              alt=""
              src="../shipping-box-1@2x.png"
            />
          </div>
        </div>
        <div className="rounded-[20px] bg-white [border:2px_solid_#f5fafd] box-border relative flex flex-col p-[50px] items-start justify-center gap-[40px] font-open-sans">
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
            <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] hidden flex-row p-[16px_0px] items-center justify-start">
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
              src="../arrow-right-alt9.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] flex flex-row p-[10px_300px] box-border items-center justify-between text-lg">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[145.71px] h-[60px] shrink-0 overflow-hidden"
            alt=""
            src="../frame15.svg"
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
                onClick={onCompanyText1Click}
              >
                Company
              </div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right18.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px] text-teal-100">
              <div className="relative font-medium inline-block">Services</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right19.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start">
              <div className="relative inline-block">Careers</div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[10px]">
              <div
                className="relative inline-block cursor-pointer"
                onClick={onContactTextClick}
              >
                Contact
              </div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right20.svg"
                />
              </div>
            </div>
          </div>
          <div className="rounded-[10px] bg-gray-200 flex flex-row p-[16px] box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../location-on6.svg"
            />
            <div className="relative font-medium inline-block">
              Track Your Order
            </div>
          </div>
          <img
            className="relative w-[32px] h-[32px] shrink-0"
            alt=""
            src="../menu6.svg"
          />
        </div>
      </div>
      <div className="absolute top-[97px] left-[0px] bg-gray-1700 w-[1920px] flex flex-row p-[0px_300px] box-border items-center justify-between text-base text-white">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <div className="flex flex-row p-[20px_16px] box-border items-center justify-start text-teal-100">
            <div className="relative font-medium inline-block">
              Domestic Relocation
            </div>
          </div>
          <div className="flex flex-row p-[20px_16px] box-border items-center justify-start">
            <div className="relative inline-block">Vehicle Relocation</div>
          </div>
          <div className="flex flex-row p-[20px_16px] box-border items-center justify-start">
            <div className="relative inline-block">
              International Relocation
            </div>
          </div>
          <div className="flex flex-row p-[20px_16px] box-border items-center justify-start">
            <div className="relative inline-block">Corporate Relocation</div>
          </div>
          <div className="flex flex-row p-[20px_16px] box-border items-center justify-start">
            <div className="relative inline-block">Storage</div>
          </div>
        </div>
        <div className="bg-teal-100 flex flex-row p-[20px] box-border items-center justify-start gap-[10px]">
          <img
            className="relative w-[24px] h-[24px] shrink-0"
            alt=""
            src="../download.svg"
          />
          <div className="relative font-medium inline-block">
            Download Brochure
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DomesticRelocationPage;
