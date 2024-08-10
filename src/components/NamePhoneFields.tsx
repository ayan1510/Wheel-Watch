import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type NamePhoneFieldsType = {
  className?: string;
  email?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const NamePhoneFields: FunctionComponent<NamePhoneFieldsType> = ({
  className = "",
  propPadding,
  propPadding1,
  email,
  propMinWidth,
}) => {
  const namePhoneFieldsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const namePhoneInputStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const emailStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-13xl text-gray-100 font-aclonica ${className}`}
      style={namePhoneFieldsStyle}
    >
      <div
        className="flex-1 flex flex-row items-start justify-start pt-[17px] px-[42px] pb-[15px] box-border relative max-w-full"
        style={namePhoneInputStyle}
      >
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gainsboro mix-blend-soft-light z-[1]" />
        <div
          className="relative inline-block min-w-[78px] z-[2] mq925:text-7xl mq450:text-lgi"
          style={emailStyle}
        >
          {email}
        </div>
      </div>
    </div>
  );
};

export default NamePhoneFields;
