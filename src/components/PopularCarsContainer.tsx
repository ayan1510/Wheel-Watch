import { FunctionComponent } from "react";

export type PopularCarsContainerType = {
  className?: string;
};

const PopularCarsContainer: FunctionComponent<PopularCarsContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[196px] pl-5 pr-[30px] box-border max-w-full text-left text-29xl text-white font-aclonica mq925:pb-[54px] mq925:box-border mq1350:pb-[83px] mq1350:box-border ${className}`}
    >
      <div className="w-[1610px] flex flex-col items-start justify-start gap-[65px] max-w-full mq925:gap-8 mq450:gap-4">
        <h1 className="m-0 relative text-inherit font-normal font-[inherit] inline-block max-w-full z-[1] mq925:text-19xl mq450:text-10xl">
          POPULAR CARS
        </h1>
        <div className="self-stretch flex flex-col items-end justify-start gap-0.5 max-w-full text-5xl font-abeezee">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-2.5 box-border max-w-full">
            <div className="h-[970px] flex-1 relative max-w-full">
              <div className="absolute top-[346px] left-[1078px] rounded-sm bg-gray-400 border-gold-200 border-[1px] border-solid box-border w-[274px] h-[90px]" />
              <div className="absolute top-[377px] left-[1157px] font-aclonica inline-block min-w-[116px] z-[1] mq450:text-lgi">
                EXPLORE
              </div>
              <div className="absolute top-[0px] left-[0px] bg-gray-300 w-full h-full mix-blend-lighten z-[2]" />
              <div className="absolute top-[172px] left-[877px] bg-gold-200 w-[155px] h-[313px] z-[3]" />
              <div className="absolute top-[546px] left-[1087px] inline-block w-[269px] h-[58px] z-[3] mq450:text-lgi">
                <p className="m-0 whitespace-pre-wrap"> 375 KW/ 510 PS</p>
                <p className="m-0">{`POWER KW / POWER PS `}</p>
              </div>
              <div className="absolute top-[642px] left-[1061px] inline-block w-[334px] h-[58px] z-[3] mq450:text-lgi">
                <p className="m-0 whitespace-pre-wrap">{`                   3.4S `}</p>
                <p className="m-0">ACCELERATION 1-100 KM/H</p>
              </div>
              <div className="absolute top-[738px] left-[1157px] inline-block w-[219px] h-[58px] z-[3] mq450:text-lgi">
                <p className="m-0"> 318 KM/H</p>
                <p className="m-0">TOP SPEED</p>
              </div>
              <div className="absolute top-[214px] left-[925px] text-77xl font-aclonica [text-shadow:1px_0_0_#fffbfb,_0_1px_0_#fffbfb,_-1px_0_0_#fffbfb,_0_-1px_0_#fffbfb] z-[4] mq925:text-29xl mq450:text-10xl">
                Porsche 911 GT3
              </div>
            </div>
          </div>
          <div className="w-[1456px] flex flex-row items-end justify-start gap-[119px] max-w-full text-77xl font-aclonica mq925:gap-[59px] mq450:gap-[30px] mq1350:flex-wrap">
            <div className="w-[537px] flex flex-col items-start justify-start pt-0 px-0 pb-[132px] box-border min-w-[537px] min-h-[817px] max-w-full mq925:pb-[86px] mq925:box-border mq925:min-w-full mq450:pb-14 mq450:box-border mq1350:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq925:gap-[30px]">
                <h1 className="m-0 self-stretch h-[213px] relative text-inherit font-normal font-[inherit] inline-block shrink-0 [text-shadow:1px_0_0_#fffbfb,_0_1px_0_#fffbfb,_-1px_0_0_#fffbfb,_0_-1px_0_#fffbfb] z-[3] mq925:text-29xl mq450:text-10xl">
                  <p className="m-0">{`Lamborghini `}</p>
                  <p className="m-0">Aventador</p>
                </h1>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-7 box-border max-w-full text-5xl">
                  <div className="w-[341px] flex flex-col items-start justify-start gap-28 max-w-full mq450:gap-14">
                    <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[27px] pr-5">
                      <div className="relative inline-block min-w-[116px] z-[1] mq450:text-lgi">
                        EXPLORE
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full font-abeezee mq450:gap-[19px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[7px] pr-0 box-border max-w-full">
                        <div className="flex-1 relative inline-block max-w-full mq450:text-lgi">
                          <p className="m-0 whitespace-pre-wrap">{`       720Nm@6750rpm `}</p>
                          <p className="m-0 whitespace-pre-wrap"> MAX TORQUE</p>
                        </div>
                      </div>
                      <div className="w-[334px] flex flex-col items-start justify-start gap-[18px] max-w-full">
                        <div className="self-stretch h-[79px] relative inline-block shrink-0 mq450:text-lgi">
                          <p className="m-0 whitespace-pre-wrap">{`      759.01bhp@8500rpm `}</p>
                          <p className="m-0 whitespace-pre-wrap"> MAX POWER</p>
                        </div>
                        <div className="self-stretch h-[79px] relative inline-block shrink-0 mq450:text-lgi">
                          <p className="m-0 whitespace-pre-wrap">{`                6498 cc `}</p>
                          <p className="m-0 whitespace-pre-wrap">
                            {" "}
                            ENGINE DISPLACEMENT
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="h-[970px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[520px] z-[3] mq925:min-w-full"
              loading="lazy"
              alt=""
              src="/lamborghini-aventador-wallpaper-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCarsContainer;
