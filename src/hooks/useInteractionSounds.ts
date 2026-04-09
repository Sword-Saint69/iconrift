'use client';

import useSound from 'use-sound';

// Note: Ensure that 'hover.mp3' and 'click.mp3' are added to your /public/sounds directory!
export const useInteractionSounds = () => {
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.1 });
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.25 });

  return { playHover, playClick };
};
