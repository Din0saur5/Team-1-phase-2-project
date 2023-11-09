import React from 'react';
import { useAudio } from '../components/AudioContext.jsx';

const AudioButton = () => {
  const { isMusicPlaying, toggleMusic } = useAudio();

  return (
    <button onClick={toggleMusic} className="audio-button">
      {isMusicPlaying ? (
        <img src="../../public/images/no-sound.png" alt="Pause" />
      ) : (
        <img src="../../public/images/sound.png" alt="Play" />
      )}
    </button>
  );
};

export default AudioButton;
