import { FunctionComponent } from "react";
import PageHeader from "../components/PageHeader";
import Content from "../components/Content";
import FrameComponent from "../components/FrameComponent";
import PopularCarsContainer from "../components/PopularCarsContainer";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";

const MacBookPro16: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-400 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[121px] box-border leading-[normal] tracking-[normal]">
      <section className="w-[2697px] h-[472px] absolute !m-[0] top-[3354px] right-[-793px] text-381xl font-aclonica text-gray-200 text-left inline-block mq925:text-141xl mq450:text-81xl">
        WHEEL WATCH
      </section>
      <section className="w-[2697px] h-[472px] absolute !m-[0] bottom-[1688px] left-[-752px] text-381xl font-aclonica text-gray-200 text-left inline-block whitespace-nowrap mq925:text-141xl mq450:text-81xl">
        WHEEL WATCH
      </section>
      <PageHeader />
      <Content />
      <section className="w-[2697px] h-[472px] absolute !m-[0] top-[1251px] right-[-633px] text-381xl font-aclonica text-gray-200 text-left inline-block whitespace-nowrap z-[2] mq925:text-141xl mq450:text-81xl">
        WHEEL WATCH
      </section>
      <FrameComponent />
      <section className="w-[1600px] !m-[0] absolute top-[4681px] left-[150px] flex flex-row items-start justify-start max-w-full text-left text-5xl text-white font-abeezee">
        <div className="h-[90px] w-[274px] absolute !m-[0] top-[395px] left-[285px] rounded-sm bg-gray-400 border-gold-200 border-[1px] border-solid box-border" />
        <div className="h-[401px] w-[155px] absolute !m-[0] top-[136px] left-[93px] bg-gold-200" />
        <div className="h-[79px] w-[334px] absolute !m-[0] bottom-[229px] left-[248px] inline-block z-[1] mq450:text-lgi">
          <p className="m-0 whitespace-pre-wrap">{`      759.01bhp@8500rpm `}</p>
          <p className="m-0 whitespace-pre-wrap"> MAX POWER</p>
        </div>
        <img
          className="h-[970px] flex-1 relative max-w-full overflow-hidden z-[2]"
          alt=""
          src="/group-2.svg"
        />
      </section>
      <img
        className="w-[800px] h-[970px] absolute !m-[0] bottom-[3097px] left-[153px] object-cover mix-blend-hard-light z-[3]"
        loading="lazy"
        alt=""
        src="/389538687592bd06712f79aa25f54e4c-1@2x.png"
      />
      <PopularCarsContainer />
      <FrameComponent1 />
      <FrameComponent2 />
    </div>
  );
};

export default MacBookPro16;
