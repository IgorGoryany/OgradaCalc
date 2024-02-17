import { memo } from 'react';

import type { SVGElement } from '../../types/types';

export const DownloadSVG = memo((props: SVGElement) => (
  <svg
    fill="none"
    height="19"
    viewBox="0 0 18 19"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 15V18H17V15"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M10 1C10 0.447715 9.55228 0 9 0C8.44772 0 8 0.447715 8 1L10 1ZM8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L16.0711 7.34315C16.4616 6.95262 16.4616 6.31946 16.0711 5.92893C15.6805 5.53841 15.0474 5.53841 14.6569 5.92893L9 11.5858L3.34315 5.92893C2.95262 5.53841 2.31946 5.53841 1.92893 5.92893C1.53841 6.31946 1.53841 6.95262 1.92893 7.34315L8.29289 13.7071ZM8 1V13H10V1L8 1Z"
      fill="black"
    />
  </svg>
));
