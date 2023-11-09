import React from 'react';
import { useAudio } from '../components/AudioContext.jsx';

import noSoundImage from '../../public/images/no-sound.png';
import soundImage from '../../public/images/sound.png';

const AudioButton = () => {
  const { isMusicPlaying, toggleMusic } = useAudio();

  return (
    <button onClick={toggleMusic} className="audio-button">
      {isMusicPlaying ? (
        <img src={noSoundImage} alt="Pause" />
      ) : (
        <img src={soundImage} alt="Play" />
      )}
    </button>
  );
};

export default AudioButton;