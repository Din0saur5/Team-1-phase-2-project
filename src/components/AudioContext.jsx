import React, { useState, createContext, useContext } from 'react';

// Create an AudioContext
const AudioContext = createContext();

// Create a hook for using the audio context
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

// AudioProvider component
export const AudioProvider = ({ children }) => {
  const [isMusicPlaying, setMusicPlaying] = useState(false);

  const toggleMusic = () => {
    setMusicPlaying(!isMusicPlaying);
    const audioElement = document.getElementById('your-audio-element-id');
    if (isMusicPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  return (
    <AudioContext.Provider value={{ isMusicPlaying, toggleMusic }}>
      {children}
      <audio id="your-audio-element-id" src="../../public/audio/backgroundmusic.mp3" loop />
    </AudioContext.Provider>
  );
};
