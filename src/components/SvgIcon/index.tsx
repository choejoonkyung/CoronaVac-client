import React from "react";
import * as svg from "./svg";

export type SvgIconType = keyof typeof svg;
export type SvgIconProps = {
  name: SvgIconType;
  className?: string;
  onClick?(): void;
};

function SvgIcon({ name, className, onClick }: SvgIconProps) {
  return React.createElement(svg[name], {
    className,
    onClick,
  });
}

export default SvgIcon;
