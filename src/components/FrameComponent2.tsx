import { FunctionComponent } from "react";
import NamePhoneFields from "./NamePhoneFields";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <footer
      className={`flex flex-row items-start justify-start pt-[142px] pb-44 pl-[247px] pr-[23px] box-border relative gap-[51px] max-w-full text-left text-481xl text-white font-aclonica mq925:gap-[25px] mq925:pl-[61px] mq925:pt-[92px] mq925:pb-[114px] mq925:box-border mq1350:pl-[123px] mq1350:box-border mq1825:flex-wrap ${className}`}
    >
      <h1 className="!m-[0] h-full w-[2113px] absolute top-[0px] left-[-104px] text-inherit font-normal font-[inherit] text-gray-200 inline-block whitespace-nowrap mq925:text-181xl mq450:text-106xl">
        CONTACT
      </h1>
      <div className="h-[272px] w-[337px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border max-w-full text-29xl">
        <div className="flex-1 bg-gray-300 border-gold-100 border-[1px] border-solid flex flex-col items-start justify-start py-[54px] pl-[41px] pr-[29px] gap-[17px] z-[1]">
          <div className="w-[259px] h-[246px] relative bg-gray-300 border-gold-100 border-[1px] border-solid box-border hidden" />
          <div className="flex flex-row items-start justify-start py-0 pl-2 pr-[3px]">
            <h1 className="m-0 relative text-inherit font-normal font-[inherit] [text-shadow:1px_0_0_#fffefe,_0_1px_0_#fffefe,_-1px_0_0_#fffefe,_0_-1px_0_#fffefe] z-[2] mq925:text-19xl mq450:text-10xl">{`WHEEL `}</h1>
          </div>
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] z-[2] mq925:text-19xl mq450:text-10xl">
            WATCH
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-16 px-0 pb-0 box-border max-w-full text-13xl">
        <div className="relative z-[1] mq925:text-7xl mq450:text-lgi">
          <p className="m-0 whitespace-pre-wrap">Kolkata | India</p>
          <p className="m-0">+91-952365426</p>
          <p className="m-0">wheelwatch@gmail.com</p>
        </div>
      </div>
      <form className="m-0 w-[886px] flex flex-row items-start justify-start gap-4 max-w-full mq925:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[26.5px] min-w-[283px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-4 px-[43px] relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro mix-blend-soft-light z-[1]" />
            <input
              className="w-[77px] [border:none] [outline:none] font-aclonica text-13xl bg-[transparent] h-[38px] relative text-gray-100 text-left inline-block p-0 z-[2] mq925:text-7xl mq450:text-lgi"
              placeholder="Name"
              type="text"
            />
          </div>
          <NamePhoneFields email="Email" />
          <NamePhoneFields
            propPadding="0px 0px 0px 2px"
            propPadding1="15px 41px 17px"
            email="Phone"
            propMinWidth="84px"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[26px] min-w-[283px] max-w-full">
          <div className="self-stretch h-[167px] flex flex-row items-start justify-start py-[27px] px-[33px] box-border relative">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro mix-blend-soft-light z-[1]" />
            <div className="relative text-13xl font-aclonica text-gray-100 text-left inline-block min-w-[113px] z-[2] mq925:text-7xl mq450:text-lgi">
              Message
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-5 bg-gold-200 self-stretch flex flex-row items-start justify-center box-border max-w-full z-[1] hover:bg-goldenrod">
            <img
              className="h-[70px] w-[434px] relative hidden max-w-full"
              alt=""
              src="/rectangle-16.svg"
            />
            <div className="relative text-13xl font-aclonica text-white text-left inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] min-w-[77px] z-[2] mq925:text-7xl mq450:text-lgi">
              SEND
            </div>
          </button>
        </div>
      </form>
    </footer>
  );
};

export default FrameComponent2;
