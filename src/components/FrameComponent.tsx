import { FunctionComponent } from "react";
import ExploreButtonContainer from "./ExploreButtonContainer";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-end justify-start pt-0 pb-[168.2px] pl-[956px] pr-1 box-border gap-1.5 max-w-full text-left text-77xl text-white font-aclonica mq925:pl-[239px] mq925:pb-[46px] mq925:box-border mq450:pl-5 mq450:box-border mq1350:pl-[478px] mq1350:pb-[71px] mq1350:box-border mq1825:flex-wrap mq1825:justify-center ${className}`}
    >
      <div className="ml-[-966px] w-[960px] flex flex-col items-start justify-start gap-[146px] shrink-0 max-w-full mq925:gap-9 mq1350:gap-[73px]">
        <ExploreButtonContainer />
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <img
            className="h-[1248.8px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-lighten z-[1]"
            loading="lazy"
            alt=""
            src="/0ee1e189120741a731547a35b702b15f-1@2x.png"
          />
          <div className="h-[313px] w-[155px] absolute !m-[0] right-[-77px] bottom-[120.8px] bg-gold-200 z-[2]" />
        </div>
      </div>
      <div className="h-[1763.8px] w-[960px] flex flex-col items-start justify-start max-w-full shrink-0">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <h1 className="!m-[0] h-[113px] w-[462px] absolute bottom-[109px] left-[-53px] text-inherit font-normal font-[inherit] inline-block [text-shadow:1px_0_0_#fffbfb,_0_1px_0_#fffbfb,_-1px_0_0_#fffbfb,_0_-1px_0_#fffbfb] z-[3] mq925:text-29xl mq450:text-10xl">
            McLaren P1
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start gap-[246.2px] shrink-0 max-w-full mq925:gap-[62px] mq1350:gap-[123px]">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <img
                className="h-[1248.8px] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-lighten z-[3]"
                loading="lazy"
                alt=""
                src="/75dfbe0572b0c00fef4d0e84e4b655c6-1@2x.png"
              />
              <div className="h-[313px] w-[155px] absolute !m-[0] top-[102px] left-[-84px] bg-gold-200 z-[4]" />
              <div className="h-[113px] w-[675px] absolute !m-[0] top-[158px] left-[-642px] inline-block [text-shadow:1px_0_0_#fffbfb,_0_1px_0_#fffbfb,_-1px_0_0_#fffbfb,_0_-1px_0_#fffbfb] z-[5] mq925:text-29xl mq450:text-10xl">
                Porsche 911 GT2 
              </div>
            </div>
            <ExploreButtonContainer propWidth="534px" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
