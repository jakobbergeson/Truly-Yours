import { keyframes } from '@emotion/react';

const preloaderLeaving = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } });

export const preloader = {
  body: {
    width: '100vw',
    height: '100vh',
    bg: 'primary',
    opacity: 1,
    leaving: {
      animationName: preloaderLeaving,
      animationDuration: '0.2s',
      animationFillMode: 'backwards',
    }
  }
};