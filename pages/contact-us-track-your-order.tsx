import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ContactUsTrackYourOrder: NextPage = () => {
  const router = useRouter();

  const onCompanyTextClick = useCallback(() => {
    router.push("/about-page");
  }, [router]);

  const onAboutUsOurClick = useCallback(() => {
    router.push("/f-a-qs-page");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[2777px] overflow-hidden text-left text-sm text-gray-1700 font-open-sans">
      <div className="absolute top-[100px] left-[0px] bg-gray-200 w-[1920px] h-[500px]" />
      <img
        className="absolute h-[23.91%] w-[31.72%] top-[0%] right-[12.45%] bottom-[76.09%] left-[55.83%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../group-54.svg"
      />
      <img
        className="absolute top-[1612px] left-[0px] w-[1920px] h-[500px] object-cover"
        alt=""
        src="../rectangle-15@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-white w-[1920px] flex flex-row p-[10px_300px] box-border items-center justify-between text-lg font-fedra-sans-std">
        <div className="flex flex-row items-center justify-start">
          <img
            className="relative w-[145.71px] h-[60px] shrink-0 overflow-hidden"
            alt=""
            src="../frame2.svg"
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
                  src="../chevron-right3.svg"
                />
              </div>
            </div>
            <div className="flex flex-row p-[16px] box-border items-center justify-start gap-[5px]">
              <div className="relative inline-block">Services</div>
              <div className="w-[20px] h-[20px] shrink-0 flex flex-row items-center justify-center [transform:rotate(90deg)] [transform-origin:0_0]">
                <img
                  className="relative w-[10.6px] h-[10.6px] shrink-0"
                  alt=""
                  src="../chevron-right3.svg"
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
          <div className="rounded-[10px] bg-gold flex flex-row p-[16px] box-border items-center justify-center gap-[10px]">
            <img
              className="relative w-[24px] h-[24px] shrink-0"
              alt=""
              src="../location-on1.svg"
            />
            <div className="relative font-medium inline-block">
              Track Your Order
            </div>
          </div>
          <img
            className="relative w-[32px] h-[32px] shrink-0"
            alt=""
            src="../menu1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[296px] left-[300px] rounded-[20px] bg-white [border:2px_solid_#f1f1f1] box-border w-[1321px] flex flex-row p-[100px] items-start justify-between text-4xl font-poppins">
        <div className="rounded-[20px] bg-white flex flex-col items-start justify-center gap-[50px]">
          <div className="relative leading-[130%] font-medium inline-block">
            Get in touch with us
          </div>
          <div className="flex flex-row items-start justify-start gap-[50px] text-base text-teal-100 font-open-sans">
            <div className="flex flex-col items-start justify-start gap-[50px]">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="w-[24px] h-[24px] shrink-0 flex flex-row p-[5px] box-border items-center justify-center">
                    <img
                      className="relative w-[14px] h-[17px] shrink-0"
                      alt=""
                      src="../pin-drop.svg"
                    />
                  </div>
                  <b className="relative leading-[150%] inline-block">
                    Address
                  </b>
                </div>
                <div className="relative leading-[150%] text-gray-1300 inline-block w-[266px]">
                  <p className="[margin-block-start:0] [margin-block-end:0px]">
                    22/18, 2nd Floor, Row B1,Opp. C2 Gate, Near Ansal Corporate
                    Plaza,
                  </p>
                  <p className="m-[0]">Gurgaon, India, 122017</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="w-[24px] h-[24px] shrink-0 flex flex-col items-center justify-center">
                    <img
                      className="relative w-[20px] h-[16px] shrink-0"
                      alt=""
                      src="../mail.svg"
                    />
                  </div>
                  <b className="relative leading-[150%] inline-block">Email</b>
                </div>
                <div className="relative leading-[150%] text-gray-1300 inline-block">
                  inquiry@whiteglove.co.in
                </div>
              </div>
            </div>
            <div className="h-[214px] flex flex-col items-start justify-between">
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <div className="w-[24px] h-[24px] shrink-0 flex flex-row items-center justify-center">
                    <img
                      className="relative w-[18px] h-[18px] shrink-0"
                      alt=""
                      src="../call.svg"
                    />
                  </div>
                  <b className="relative leading-[150%] inline-block">
                    Toll Free
                  </b>
                </div>
                <div className="relative text-xl font-semibold text-gray-1300 inline-block">
                  1800 547 6842
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="relative font-semibold inline-block">
                  Follow us on
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row p-[10px] items-center justify-center">
                    <img
                      className="relative w-[9.08px] h-[16px] shrink-0"
                      alt=""
                      src="../facebook2.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 flex flex-row items-center justify-center">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0"
                      alt=""
                      src="../instagram.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col p-[10px] items-center justify-center">
                    <img
                      className="relative w-[18px] h-[16px] shrink-0"
                      alt=""
                      src="../twitter.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 flex flex-col items-center justify-center">
                    <img
                      className="relative w-[16px] h-[16px] shrink-0"
                      alt=""
                      src="../linkedin2.svg"
                    />
                  </div>
                  <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 hidden flex-col items-center justify-center">
                    <img
                      className="relative w-[16.09px] h-[16px] shrink-0"
                      alt=""
                      src="../whatsapp2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[50px] text-xl text-gray-500 font-open-sans">
          <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
            <div className="relative font-semibold inline-block">Your Name</div>
          </div>
          <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
            <div className="relative font-semibold inline-block">
              Email Address
            </div>
          </div>
          <div className="border-t-[0px_solid_#ddd] border-r-[0px_solid_#ddd] border-b-[2px_solid_#ddd] border-l-[0px_solid_#ddd] box-border relative w-[420px] flex flex-row p-[16px_0px] items-center justify-start">
            <div className="relative font-semibold inline-block">
              What are you want to say?
            </div>
          </div>
          <div className="rounded-[10px] bg-gold flex flex-row p-[20px_40px] box-border items-center justify-start gap-[20px] text-gray-1700">
            <div className="relative font-semibold inline-block">Send Now</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt1.svg"
            />
            <img
              className="relative w-[25.32px] h-[16px] shrink-0"
              alt=""
              src="../group-692.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1090px] left-[300px] w-[1320px] h-[322px] text-2xl">
        <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-white flex flex-col p-[30px] box-border items-start justify-center gap-[40px]">
          <img
            className="relative w-[58.67px] h-[48px] shrink-0"
            alt=""
            src="../sticky-note-2.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="relative font-semibold inline-block w-[191px]">
              Convenient Booking
            </div>
            <div className="relative text-base text-gray-1100 inline-block w-[243px]">
              Book on your schedule and get estimates instantly with the help of
              our dedicated customer service agents.
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[339px] rounded-[20px] bg-white flex flex-col p-[30px] box-border items-start justify-center gap-[40px]">
          <img
            className="relative w-[58.67px] h-[48px] shrink-0"
            alt=""
            src="../sticky-note-2.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="relative font-semibold inline-block w-[202px]">
              A Non-to-Exceed quote
            </div>
            <div className="relative text-base text-gray-1100 inline-block w-[243px]">
              Receive fixed-price, individualized plans and reserve your move
              without having to worry about hidden fees.
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[678px] rounded-[20px] bg-white flex flex-col p-[30px] box-border items-start justify-center gap-[40px]">
          <img
            className="relative w-[58.67px] h-[48px] shrink-0"
            alt=""
            src="../sticky-note-2.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="relative font-semibold inline-block w-[220px]">{`Precise Pickup & Delivery`}</div>
            <div className="relative text-base text-gray-1100 inline-block w-[243px]">
              There's no need to get held up by service windows. With White
              Glove Packers and Movers, you can relax.
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[1017px] rounded-[20px] bg-white flex flex-col p-[30px] box-border items-start justify-center gap-[40px]">
          <img
            className="relative w-[58.67px] h-[48px] shrink-0"
            alt=""
            src="../sticky-note-2.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="relative font-semibold inline-block w-[155px]">
              Dedicated Trucks
            </div>
            <div className="relative text-base text-gray-1100 inline-block w-[243px]">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Don't worry about sharing your truck space or move-day with
                anyone else.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[147px] left-[589px] flex flex-row items-center justify-start gap-[50px] text-xl">
        <img
          className="relative w-[141.17px] h-[100px] shrink-0"
          alt=""
          src="../group-561.svg"
        />
        <div className="flex flex-col items-start justify-center gap-[20px]">
          <div className="relative font-semibold inline-block">Contact Us</div>
          <b className="relative text-5xl leading-[130%] inline-block font-poppins">
            We’d love to hear from you
          </b>
        </div>
      </div>
      <div className="absolute top-[87px] left-[1307px] rounded-[10px] bg-gray-1700 w-[251px] flex flex-col p-[35px_16px] box-border items-center justify-center gap-[20px] text-center text-white">
        <div className="relative text-base font-semibold inline-block w-[174px]">
          Keep Track of your Packages
        </div>
        <div className="flex flex-col items-start justify-start gap-[16px] text-left">
          <div className="rounded-[10px] [border:1px_solid_#22567f] box-border relative w-[174px] flex flex-row p-[16px] items-center justify-center gap-[20px]">
            <div className="relative font-semibold inline-block">
              Tracker ID
            </div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt2.svg"
            />
          </div>
          <div className="rounded-[10px] bg-gold w-[174px] flex flex-row p-[16px] box-border items-center justify-center gap-[20px] text-gray-1700">
            <div className="relative font-semibold inline-block">{`Track & Trace`}</div>
            <img
              className="relative w-[24px] h-[24px] shrink-0 hidden"
              alt=""
              src="../arrow-right-alt3.svg"
            />
          </div>
        </div>
        <div className="relative font-semibold inline-block">Need Help?</div>
      </div>
      <div className="absolute top-[2112px] left-[0px] w-[1920px] h-[665px] text-white">
        <div className="absolute top-[0px] left-[0px] bg-gray-1700 w-[1920px] h-[665px]" />
        <img
          className="absolute h-[118.6%] w-[31.36%] top-[501.68%] right-[59.73%] bottom-[-520.28%] left-[8.91%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
        />
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
                    src="../linkedin3.svg"
                  />
                </div>
                <div className="rounded-[5px] [border:1px_solid_#d9d9d9] box-border relative w-[32px] h-[32px] shrink-0 hidden flex-col items-center justify-center">
                  <img
                    className="relative w-[16.09px] h-[16px] shrink-0"
                    alt=""
                    src="../whatsapp1.svg"
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
              src="../frame3.svg"
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
    </div>
  );
};

export default ContactUsTrackYourOrder;
