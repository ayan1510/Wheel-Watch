import { FunctionComponent } from "react";

export type PageHeaderType = {
  className?: string;
};

const PageHeader: FunctionComponent<PageHeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[220px] box-border max-w-full text-left text-17xl text-white font-aclonica mq925:pb-[93px] mq925:box-border mq1350:pb-[143px] mq1350:box-border ${className}`}
    >
      <div className="w-[1863px] flex flex-row items-end justify-start py-0 pl-5 pr-0 box-border gap-[101px] max-w-full mq925:gap-[50px] mq450:gap-[25px] mq1825:flex-wrap">
        <div className="w-[569px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[569px] max-w-full mq925:min-w-full mq1825:flex-1">
          <div className="self-stretch flex flex-row items-end justify-between gap-5 mq925:flex-wrap">
            <div className="w-[194px] flex flex-col items-start justify-end pt-0 px-0 pb-[35px] box-border min-w-[194px] mq925:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[216px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[35px] pr-0">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-[5px] pb-8 relative gap-[13px]">
                    <div className="w-[155px] h-[313px] absolute !m-[0] bottom-[-115px] left-[-112px] bg-gold-200" />
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro mix-blend-soft-light z-[1]" />
                    <div className="flex flex-row items-start justify-start py-0 pl-1 pr-[13px]">
                      <a className="[text-decoration:none] relative text-[inherit] [text-shadow:1px_0_0_#fffefe,_0_1px_0_#fffefe,_-1px_0_0_#fffefe,_0_-1px_0_#fffefe] z-[2] mq925:text-10xl mq450:text-3xl">{`WHEEL `}</a>
                    </div>
                    <a className="[text-decoration:none] relative text-[inherit] [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] z-[2] mq925:text-10xl mq450:text-3xl">
                      WATCH
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[67px]">
                  <img
                    className="w-[50px] h-[50px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/facebook@2x.png"
                  />
                  <img
                    className="w-[50px] h-[50px] relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/topic@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start gap-[66px]">
                    <img
                      className="w-[50px] h-[50px] relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/instagram@2x.png"
                    />
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                      <img
                        className="h-[50px] w-[50px] relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/whatsapp@2x.png"
                      />
                    </div>
                    <img
                      className="w-[50px] h-[50px] relative object-cover"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[274px] flex flex-row items-start justify-start relative min-w-[274px] text-5xl mq925:flex-1">
              <a className="[text-decoration:none] absolute !m-[0] top-[0px] right-[-114px] text-[inherit] inline-block [text-shadow:1px_0_0_#fffcfc,_0_1px_0_#fffcfc,_-1px_0_0_#fffcfc,_0_-1px_0_#fffcfc] z-[1] mq450:text-lgi">
                COMPARE
              </a>
              <div className="flex-1 flex flex-col items-start justify-start gap-[52.8px] mq450:gap-[26px]">
                <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[568.2px] pl-[21px] pr-5 mq925:pb-[369px] mq925:box-border">
                  <a className="[text-decoration:none] relative text-[inherit] inline-block [text-shadow:1px_0_0_#fffafa,_0_1px_0_#fffafa,_-1px_0_0_#fffafa,_0_-1px_0_#fffafa] min-w-[79px] mq450:text-lgi">
                    HOME
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pl-0 pr-5 gap-[23.6px] text-13xl">
                  <div className="relative mq925:text-7xl mq450:text-lgi">
                    BMW I8 2020
                  </div>
                  <div className="h-[30.6px] relative inline-block shrink-0 min-w-[125px] whitespace-nowrap z-[1] font-abeezee mq925:text-7xl mq450:text-lgi">
                    <span>$59,989</span>
                    <span className="text-81xl font-abril-fatface">{` `}</span>
                  </div>
                </div>
                <button className="cursor-pointer border-gold-200 border-[1px] border-solid pt-7 px-[77px] pb-[31px] bg-gray-400 self-stretch rounded-sm flex flex-row items-start justify-start hover:bg-dimgray-200 hover:border-goldenrod hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="h-[90px] w-[274px] relative rounded-sm bg-gray-400 border-gold-200 border-[1px] border-solid box-border hidden" />
                  <div className="relative text-5xl font-aclonica text-white text-left inline-block min-w-[116px] z-[1] mq450:text-lgi">
                    EXPLORE
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[67px] px-[68px] pb-0 box-border relative gap-[712px] min-w-[762px] max-w-full text-81xl font-abril-fatface mq925:gap-[178px] mq925:pt-[29px] mq925:box-border mq925:min-w-full mq450:gap-[89px] mq1350:gap-[356px] mq1350:pl-[34px] mq1350:pt-11 mq1350:pr-[34px] mq1350:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] left-[0px] rounded-xl max-w-full overflow-hidden shrink-0 object-cover mix-blend-lighten"
            alt=""
            src="/a65d02f689abc1dfddb2471b153da6eb-1@2x.png"
          />
          <h1 className="!m-[0] w-[750px] absolute bottom-[330px] left-[-375px] text-inherit font-normal font-[inherit] inline-block [text-shadow:1px_0_0_#fffbfb,_0_1px_0_#fffbfb,_-1px_0_0_#fffbfb,_0_-1px_0_#fffbfb] z-[1] mq925:text-31xl mq450:text-11xl">
            <p className="m-0">{`CHOOSE YOUR `}</p>
            <p className="m-0">DREAM CAR</p>
          </h1>
          <header className="w-[963px] flex flex-row items-start justify-between gap-5 max-w-full text-left text-5xl text-white font-aclonica">
            <div className="w-[488px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border max-w-full mq925:w-0">
              <div className="self-stretch flex flex-row items-start justify-between gap-5 mq925:hidden">
                <a className="[text-decoration:none] relative text-[inherit] [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] whitespace-nowrap z-[1]">
                  ABOUT US
                </a>
                <a className="[text-decoration:none] relative text-[inherit] inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] min-w-[54px] z-[1]">
                  FAQ
                </a>
                <a className="[text-decoration:none] relative text-[inherit] [text-shadow:1px_0_0_#fffefe,_0_1px_0_#fffefe,_-1px_0_0_#fffefe,_0_-1px_0_#fffefe] z-[1]">
                  CONTACTS
                </a>
              </div>
            </div>
            <div className="w-[289px] rounded-sm bg-gold-200 flex flex-row items-start justify-start pt-[22px] px-px pb-[18px] box-border gap-1 z-[1] text-xl">
              <div className="h-[90px] w-[289px] relative rounded-sm bg-gold-200 hidden" />
              <img
                className="h-[50px] w-[50px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/call@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="relative [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] z-[2]">
                  *91-9464-5648-664
                </div>
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[29px] text-29xl font-aclonica">
            <h1 className="m-0 w-48 relative text-inherit font-normal font-[inherit] inline-block z-[1] mq925:text-19xl mq450:text-10xl">
              <span className="whitespace-pre-wrap">{`<  - `}</span>
              <span className="text-dimgray-100">- -</span>
              <span className="whitespace-pre-wrap">{`  >`}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
