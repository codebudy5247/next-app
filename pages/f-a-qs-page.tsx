import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FAQsPage: NextPage = () => {
  const router = useRouter();

  const onCompanyTextClick = useCallback(() => {
    router.push("/about-page");
  }, [router]);

  const onFrameContainer7Click = useCallback(() => {
    router.push("/contact-us-track-your-order");
  }, [router]);

  const onAboutUsOurClick = useCallback(() => {
    router.push("/f-a-qs-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[3494px] overflow-hidden text-left text-5xl text-gray-1700 font-poppins">
      <div className="absolute top-[100px] left-[0px] bg-gray-200 w-[1920px] h-[500px]" />
      <img
        className="absolute h-[23.91%] w-[31.72%] top-[0%] right-[12.45%] bottom-[76.09%] left-[55.83%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-544.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] flex flex-row p-[10px_300px] box-border items-center justify-between text-lg font-fedra-sans-std">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[145.71px] h-[60px] shrink-0 overflow-hidden"
            alt=""
            src="../frame9.svg"
          />
        </div>
        <div className="flex flex-row p-[10px_3px] box-border items-center justify-start gap-[60px]">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <div className="flex flex-row p-[16px] box-border items-center justify-start">
              <div className="relative inline-block">Home</div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px] text-teal-100">
              <div
                className="relative font-medium inline-block cursor-pointer"
                onClick={onCompanyTextClick}
              >
                Company
              </div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right5.svg"
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
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[10px]">
              <div className="relative inline-block">Contact</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right13.svg"
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
              src="../location-on4.svg"
            />
            <div className="relative inline-block">Track Your Order</div>
          </div>
          <img
            className="relative w-[32px] h-[32px] shrink-0"
            alt=""
            src="../menu4.svg"
          />
        </div>
      </div>
      <div className="absolute top-[297px] left-[300px] rounded-[20px] bg-white [border:2px_solid_#f1f1f1] box-border w-[1321px] flex flex-row p-[100px] items-start justify-between text-3xl text-gray-400">
        <div className="w-[1121px] shrink-0 flex flex-col items-start justify-start">
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">01</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block">
                When is the best time to relocate?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios5.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-col p-[30px_0px] items-start justify-start gap-[20px]">
            <div className="w-[1121px] flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start gap-[20px]">
                <b className="relative inline-block">02</b>
                <div className="relative text-xl font-semibold font-open-sans text-teal-100 inline-block">
                  When should I contact relocation companies for estimates?
                </div>
              </div>
              <img
                className="relative w-[40px] h-[40px] shrink-0"
                alt=""
                src="../arrow-forward-ios6.svg"
              />
            </div>
            <div className="relative text-base leading-[150%] font-open-sans text-gray-1100 inline-block w-[1023px]">
              Try to provide moving companies with as much notice as possible,
              especially if you are moving during the summer months (mid-May to
              mid-September) or at the beginning or end of a month (regardless
              of the season). We recommend making arrangements at least four to
              six weeks before your desired moving date. This will increase your
              likelihood of securing the pickup and delivery dates you desire.
              Add even more time to make a decision if you are obligated by your
              employer to submit estimates for approval.
            </div>
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">03</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block">
                How could your company's prices differ from others?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios7.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="w-[1024px] shrink-0 flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">04</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[1015px] shrink-0">
                There are major differences between the movers’ estimated
                volumes. How do I deal with this?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios8.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">05</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                What are the do’s and dont’s when it comes to moving?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios9.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">06</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                How are transportation charges calculated?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios10.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">07</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                How should I pay and what are the payment methods?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios11.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">08</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                What is an inventory?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios12.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">10</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                Can I pack anything in the drawers of my dresser or desk?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios13.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">11</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                Will the relocators pack all the boxes?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios14.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">12</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                What should I do with my jewellery and other valuable items?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios15.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">13</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                How do I prepare my appliances for moving?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios16.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">14</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[883px] shrink-0">
                How will white glove packers and movers protect my upholstered
                furniture?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios17.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">15</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                Am I protected against loss or damage while my goods are in
                transit?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios18.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">16</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                How do I prepare my home and myself for move day?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios19.svg"
            />
          </div>
          <div className="border-t-[0px_solid_#f4f4f4] border-r-[0px_solid_#f4f4f4] border-b-[2px_solid_#f4f4f4] border-l-[0px_solid_#f4f4f4] box-border relative w-[1121px] flex flex-row p-[30px_0px] items-center justify-between">
            <div className="flex flex-row items-center justify-start gap-[20px]">
              <b className="relative inline-block">17</b>
              <div className="relative text-xl font-semibold font-open-sans text-gray-1300 inline-block w-[718px] shrink-0">
                How will I know where my shipment is once it leaves my home?
              </div>
            </div>
            <img
              className="relative w-[40px] h-[40px] shrink-0"
              alt=""
              src="../arrow-forward-ios20.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[147px] left-[589px] flex flex-row items-center justify-start gap-[50px]">
        <img
          className="relative w-[114.07px] h-[100px] shrink-0"
          alt=""
          src="../group-67.svg"
        />
        <div className="flex flex-col items-start justify-center">
          <b className="relative leading-[130%] inline-block">
            Frequently Asked Questions
          </b>
        </div>
      </div>
      <div className="absolute top-[2441px] left-[300px] rounded-[20px] bg-gray-1700 w-[1321px] flex flex-row p-[100px] box-border items-center justify-between text-white">
        <div className="rounded-[20px] flex flex-col items-start justify-center gap-[10px]">
          <div className="relative leading-[130%] font-medium inline-block">
            Any Questions?
          </div>
          <div className="relative text-xl leading-[130%] font-medium text-gray-1000 inline-block">
            Consult with an Expert
          </div>
        </div>
        <div className="rounded-[10px] bg-gold flex flex-row p-[20px_40px] box-border items-center justify-start gap-[20px] text-xl text-gray-1700 font-open-sans">
          <div className="relative font-semibold inline-block">Let’s Talk</div>
          <img
            className="relative w-[24px] h-[24px] shrink-0 hidden"
            alt=""
            src="../arrow-right-alt7.svg"
          />
          <img
            className="relative w-[21.84px] h-[14px] shrink-0"
            alt=""
            src="../group-6912.svg"
          />
        </div>
      </div>
      <div className="absolute top-[2829px] left-[0px] w-[1920px] h-[665px] text-sm text-white font-open-sans">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[665px]" />
        <img
          className="absolute h-[118.6%] w-[31.36%] top-[609.5%] right-[59.73%] bottom-[-628.1%] left-[8.91%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
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
              src="../frame10.svg"
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
    </div>
  );
};

export default FAQsPage;
