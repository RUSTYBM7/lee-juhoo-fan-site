import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  duration: string;
}

interface MusicPlayerContextType {
  isPlaying: boolean;
  currentTrack: MusicTrack | null;
  isShuffle: boolean;
  isRepeat: boolean;
  progress: number;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  setCurrentTrack: (track: MusicTrack) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  seek: (time: number) => void;
}

const defaultTracks: MusicTrack[] = [
  { id: '1', title: 'Heartbeat', artist: 'Lee Juhoo', duration: '3:45' },
  { id: '2', title: 'Midnight Dreams', artist: 'Lee Juhoo', duration: '4:12' },
  { id: '3', title: 'Starlight', artist: 'Lee Juhoo', duration: '3:58' },
  { id: '4', title: 'Forever Young', artist: 'Lee Juhoo', duration: '4:30' },
  { id: '5', title: 'Summer Breeze', artist: 'Lee Juhoo', duration: '3:22' },
];

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrackState] = useState<MusicTrack | null>(defaultTracks[0]);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [progress, setProgress] = useState(0);
  const [trackIndex, setTrackIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 0.5;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    if (isRepeat) {
      setProgress(0);
      return;
    }
    setTrackIndex((prev) => {
      const nextIndex = isShuffle
        ? Math.floor(Math.random() * defaultTracks.length)
        : (prev + 1) % defaultTracks.length;
      setCurrentTrackState(defaultTracks[nextIndex]);
      return nextIndex;
    });
    setProgress(0);
  }, [isRepeat, isShuffle]);

  const handlePrevious = useCallback(() => {
    setTrackIndex((prev) => {
      const prevIndex = prev === 0 ? defaultTracks.length - 1 : prev - 1;
      setCurrentTrackState(defaultTracks[prevIndex]);
      return prevIndex;
    });
    setProgress(0);
  }, []);

  const togglePlay = useCallback(() => setIsPlaying((prev) => !prev), []);
  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggleShuffle = useCallback(() => setIsShuffle((prev) => !prev), []);
  const toggleRepeat = useCallback(() => setIsRepeat((prev) => !prev), []);

  const setCurrentTrack = useCallback((track: MusicTrack) => {
    setCurrentTrackState(track);
    const index = defaultTracks.findIndex((t) => t.id === track.id);
    if (index !== -1) setTrackIndex(index);
    setProgress(0);
  }, []);

  const nextTrack = useCallback(() => handleNext(), [handleNext]);
  const previousTrack = useCallback(() => handlePrevious(), [handlePrevious]);
  const seek = useCallback((time: number) => setProgress(time), []);

  const value: MusicPlayerContextType = {
    isPlaying,
    currentTrack,
    isShuffle,
    isRepeat,
    progress,
    togglePlay,
    play,
    pause,
    toggleShuffle,
    toggleRepeat,
    setCurrentTrack,
    nextTrack,
    previousTrack,
    seek,
  };

  return (
    <MusicPlayerContext.Provider value={value}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (context === undefined) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
}