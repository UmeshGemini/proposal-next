import { EVCheckbox } from "@evervent_pvt_ltd/ui-kit";
import React from "react";

const CustomCheckbox = ({
  id,
  label,
  defaultChecked = false,
  value,
  value_update,
  attrName,
  disabled,
  selectedValue,
  variant,
  className,
}: {
  id?: any;
  label: React.ReactNode;
  defaultChecked?: boolean;
  value?: boolean;
  attrName?: any;
  value_update?: Function;
  disabled?: boolean;
  selectedValue?: string;
  variant?: "default" | "large";
  className?: string;
}) => {
  const convertString = (str: string) => {
    let newStr = str?.replace(/\s+/g, "_").toLowerCase();
    return newStr;
  };
  return (
    <EVCheckbox
      id={convertString(id || label || attrName)}
      label={label}
      defaultChecked={defaultChecked}
      value={value}
      value_update={value_update}
      attrName={attrName}
      disabled={disabled}
      className={className}
    />
  );
};

export default CustomCheckbox;
