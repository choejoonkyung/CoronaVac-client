import React from "react";

export type GraphProps = {
  sido: string;
  menu: string;
};

function Graph({ sido, menu }: GraphProps) {
  return (
    <div>
      {sido}
      {menu}
    </div>
  );
}

export default Graph;
