import { FunctionComponent } from "react";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1904px] flex flex-row items-start justify-center pt-0 px-5 pb-[370px] box-border max-w-full text-left text-29xl text-white font-aclonica mq450:pb-60 mq450:box-border ${className}`}
    >
      <div className="w-[1650px] flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border max-w-full">
          <h1 className="m-0 relative text-inherit font-normal font-[inherit] mq925:text-19xl mq450:text-10xl">
            SPECIAL CARS
          </h1>
        </div>
        <div className="w-[898px] flex flex-row items-start justify-start gap-[101px] max-w-full text-xl font-abhaya-libre mq925:flex-wrap mq925:gap-[50px] mq450:gap-[25px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border min-w-[289px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="relative inline-block min-w-[35px] mq450:text-base">
                  SUV
                </div>
              </div>
              <div className="w-[70px] relative inline-block mq450:text-base">
                LUXURY
              </div>
              <div className="relative inline-block min-w-[94px] mq450:text-base">
                SUPERCAR
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-gold-200 border-[1px] border-solid pt-[30px] px-[78px] pb-[33px] bg-gray-400 w-[352px] rounded-sm box-border flex flex-row items-start justify-start whitespace-nowrap max-w-full hover:bg-dimgray-200 hover:border-goldenrod hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="h-[90px] w-[352px] relative rounded-sm bg-gray-400 border-gold-200 border-[1px] border-solid box-border hidden max-w-full" />
            <div className="relative text-xl font-aclonica text-white text-left z-[1]">
              VIEW ALL CARDS
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Content;
