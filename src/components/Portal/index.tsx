import { useMemo } from "react";
import ReactDOM from "react-dom";
export type RootPortalProps = { children: React.ReactNode };

function Portal({ children }: RootPortalProps) {
  const ele = useMemo(() => document.getElementById("portal"), []);
  if (!ele) return null;
  return ReactDOM.createPortal(children, ele);
}

export default Portal;
