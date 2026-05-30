import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play, Pause, SkipBack, SkipForward, Shuffle, Repeat,
  Volume2, ListMusic, ChevronDown, ChevronUp
} from 'lucide-react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { useLanguage } from '../contexts/LanguageContext';

const MusicPlayer = () => {
  const {
    isPlaying, currentTrack, isShuffle, isRepeat, progress,
    togglePlay, toggleShuffle, toggleRepeat, nextTrack, previousTrack
  } = useMusicPlayer();
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!currentTrack) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
      isExpanded ? 'bg-oled-card border-t border-oled-border' : 'bg-oled-base/95 backdrop-blur-md border-t border-oled-border'
    }`}>
      {/* Progress Bar */}
      <div className="h-1 bg-oled-muted cursor-pointer group" onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        // Handle seek
      }}>
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Track Info */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-12 h-12 rounded-card bg-oled-muted flex-shrink-0 overflow-hidden">
              <img
                src="/images/lee/IMG_5110.JPG"
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="text-white font-medium text-sm truncate">{currentTrack.title}</p>
              <p className="text-white/50 text-xs truncate">{currentTrack.artist}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={toggleShuffle}
              className={`p-2 transition-colors hidden sm:flex items-center justify-center min-h-[44px] min-w-[44px] ${
                isShuffle ? 'text-primary' : 'text-white/50 hover:text-white'
              }`}
              aria-label={t.player.shuffle}
            >
              <Shuffle size={18} />
            </button>
            <button
              onClick={previousTrack}
              className="p-2 text-white/70 hover:text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
              aria-label={t.player.previous}
            >
              <SkipBack size={20} />
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0"
              aria-label={isPlaying ? t.player.pause : t.player.play}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
            </button>
            <button
              onClick={nextTrack}
              className="p-2 text-white/70 hover:text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
              aria-label={t.player.next}
            >
              <SkipForward size={20} />
            </button>
            <button
              onClick={toggleRepeat}
              className={`p-2 transition-colors hidden sm:flex items-center justify-center min-h-[44px] min-w-[44px] ${
                isRepeat ? 'text-primary' : 'text-white/50 hover:text-white'
              }`}
              aria-label={t.player.repeat}
            >
              <Repeat size={18} />
            </button>
          </div>

          {/* Volume & Expand */}
          <div className="flex items-center gap-2 flex-1 justify-end">
            <div className="hidden md:flex items-center gap-2 text-white/50">
              <Volume2 size={18} />
              <div className="w-24 h-1 bg-oled-muted rounded-full">
                <div className="w-3/4 h-full bg-white/50 rounded-full" />
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-white/50 hover:text-white transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </button>
          </div>
        </div>

        {/* Expanded Queue */}
        {isExpanded && (
          <div className="py-4 border-t border-oled-border animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <ListMusic size={18} className="text-primary" />
              <span className="text-white/70 text-sm">{t.player.nowPlaying}</span>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {[
                { id: '1', title: 'Heartbeat', artist: 'Lee Juhoo' },
                { id: '2', title: 'Midnight Dreams', artist: 'Lee Juhoo' },
                { id: '3', title: 'Starlight', artist: 'Lee Juhoo' },
                { id: '4', title: 'Forever Young', artist: 'Lee Juhoo' },
                { id: '5', title: 'Summer Breeze', artist: 'Lee Juhoo' },
              ].map((track) => (
                <div
                  key={track.id}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                    currentTrack.id === track.id
                      ? 'bg-primary/20 text-primary'
                      : 'hover:bg-oled-muted text-white/70'
                  }`}
                >
                  <div className="w-10 h-10 rounded bg-oled-muted flex-shrink-0 overflow-hidden">
                    <img src="/images/lee/IMG_5110.JPG" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{track.title}</p>
                    <p className="text-xs text-white/50 truncate">{track.artist}</p>
                  </div>
                  <span className="text-xs text-white/30">3:45</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;