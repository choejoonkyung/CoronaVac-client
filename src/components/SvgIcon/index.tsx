import React from "react";
import * as svg from "./svg";

export type SvgIconType = keyof typeof svg;
export type SvgIconProps = {
  name: SvgIconType;
  className?: string;
  style?: React.CSSProperties;
};

function SvgIcon({ name, className, style }: SvgIconProps) {
  return React.createElement(svg[name], {
    className,
    style,
  });
}

export default SvgIcon;
