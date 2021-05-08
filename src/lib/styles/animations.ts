import { keyframes } from "@emotion/react";
import palette from "./palette";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
}
`;

export const fadeIn = keyframes`
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 3;
  }
`;

export const navFadeIn = keyframes`
  0% {
    background: ${palette.grey[50]};
  }
  100% {
    background: ${palette.grey[100]};
  }
`;

export const shining = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;
