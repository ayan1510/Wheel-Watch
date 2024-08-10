import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ExploreButtonContainerType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
};

const ExploreButtonContainer: FunctionComponent<ExploreButtonContainerType> = ({
  className = "",
  propWidth,
}) => {
  const exploreButtonContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`w-[940px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
      style={exploreButtonContainerStyle}
    >
      <button className="cursor-pointer border-gold-200 border-[1px] border-solid pt-[29px] px-[78px] pb-[30px] bg-gray-400 rounded-sm flex flex-row items-start justify-start hover:bg-dimgray-200 hover:border-goldenrod hover:border-[1px] hover:border-solid hover:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-[90px] w-[274px] relative rounded-sm bg-gray-400 border-gold-200 border-[1px] border-solid box-border hidden" />
        <div className="relative text-5xl font-aclonica text-white text-left inline-block min-w-[116px] z-[1] mq450:text-lgi">
          EXPLORE
        </div>
      </button>
    </div>
  );
};

export default ExploreButtonContainer;
