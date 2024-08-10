import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-[1672px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-left text-29xl text-white font-aclonica ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[105px] max-w-full mq925:gap-[52px] mq450:gap-[26px]">
        <div className="w-[692px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] z-[1] mq925:text-19xl mq450:text-10xl">
            NEW LAUNCHES
          </h1>
        </div>
        <div className="self-stretch h-[1061px] relative text-5xl font-abeezee">
          <button className="cursor-pointer border-gold-200 border-[1px] border-solid pt-[29px] px-[77px] pb-[30px] bg-gray-400 absolute top-[285px] left-[1219px] rounded-sm flex flex-row items-start justify-start hover:bg-dimgray-200 hover:border-goldenrod hover:border-[1px] hover:border-solid hover:box-border">
            <div className="h-[90px] w-[274px] relative rounded-sm bg-gray-400 border-gold-200 border-[1px] border-solid box-border hidden" />
            <div className="relative text-5xl font-aclonica text-white text-left inline-block min-w-[116px] z-[1] mq450:text-lgi">
              EXPLORE
            </div>
          </button>
          <div className="absolute top-[531px] left-[1314px] inline-block w-[334px] h-[58px] mq450:text-lgi">
            <p className="m-0 whitespace-pre-wrap">{`                2995 cc `}</p>
            <p className="m-0 whitespace-pre-wrap"> ENGINE DISPLACEMENT</p>
          </div>
          <div className="absolute top-[633px] left-[1305px] inline-block w-[334px] h-[58px] mq450:text-lgi">
            <p className="m-0 whitespace-pre-wrap">{`               250 kmph `}</p>
            <p className="m-0 whitespace-pre-wrap"> TOP SPEED</p>
          </div>
          <div className="absolute top-[837px] left-[1326px] inline-block w-[334px] h-[79px] mq450:text-lgi">
            <p className="m-0 whitespace-pre-wrap">{`               Hybrid `}</p>
            <p className="m-0 whitespace-pre-wrap"> FUEL TYPE</p>
          </div>
          <div className="absolute top-[735px] left-[1305px] inline-block w-[334px] h-[58px] mq450:text-lgi">
            <p className="m-0 whitespace-pre-wrap">{`         344 bhp & 500 Nm`}</p>
            <p className="m-0 whitespace-pre-wrap"> POWER AND TORQUE</p>
          </div>
          <h1 className="m-0 absolute top-[134px] left-[1131px] text-77xl font-normal font-aclonica whitespace-pre-wrap [text-shadow:1px_0_0_#fffbfb,_0_1px_0_#fffbfb,_-1px_0_0_#fffbfb,_0_-1px_0_#fffbfb] z-[2] mq925:text-29xl mq450:text-10xl">
            AUDI R8
          </h1>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[1182px]">
            <div className="absolute top-[84px] left-[1027px] bg-gold-200 w-[155px] h-[401px] z-[1]" />
            <img
              className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[1105px] object-cover [mix-blend-mode:linear-dodge] z-[2]"
              loading="lazy"
              alt=""
              src="/download-2-1@2x.png"
            />
          </div>
          <div className="absolute top-[425px] left-[1233px] text-13xl whitespace-nowrap mq925:text-7xl mq450:text-lgi">
            $182,900
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
