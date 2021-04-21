import React from "react";
import * as svg from "./svg";

export type SvgIconType = keyof typeof svg;
export type SvgIconProps = {
  name: SvgIconType;
  className?: string;
};

function SvgIcon({ name, className }: SvgIconProps) {
  return React.createElement(svg[name], {
    className,
  });
}

export default SvgIcon;
