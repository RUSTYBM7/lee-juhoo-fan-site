import React from 'react';
import { Link } from 'react-router-dom';
import {
  Play, Pause, SkipBack, SkipForward, Shuffle, Repeat,
  Volume2, ListMusic, ChevronDown, ChevronUp, Youtube, X, Image
} from 'lucide-react';
import { useMusicPlayer } from '../contexts/MusicPlayerContext';
import { useLanguage } from '../contexts/LanguageContext';
import { defaultTracks } from '../lib/musicData';

const MusicPlayer = () => {
  const {
    isPlaying, currentTrack, isShuffle, isRepeat, progress,
    togglePlay, toggleShuffle, toggleRepeat, nextTrack, previousTrack,
    showVideoModal, openVideoModal, closeVideoModal, setCurrentTrack
  } = useMusicPlayer();
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = React.useState(false);

  if (!currentTrack) return null;

  const hasVideo = currentTrack.youtubeId && currentTrack.youtubeId !== 'none';

  return (
    <>
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
            {/* Track Info with Cover */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div 
                className="w-12 h-12 rounded-card bg-oled-muted flex-shrink-0 overflow-hidden relative group cursor-pointer"
                onClick={() => hasVideo && openVideoModal()}
              >
                <img
                  src={currentTrack.coverUrl}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
                {hasVideo && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={16} className="text-primary" />
                  </div>
                )}
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

            {/* Video Button & Expand */}
            <div className="flex items-center gap-2 flex-1 justify-end">
              {hasVideo && (
                <button
                  onClick={openVideoModal}
                  className="p-2 text-red-500 hover:text-red-400 transition-colors flex items-center justify-center min-h-[44px] min-w-[44px]"
                  title="Watch Music Video"
                >
                  <Youtube size={20} />
                </button>
              )}
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

          {/* Expanded Queue with Covers */}
          {isExpanded && (
            <div className="py-4 border-t border-oled-border animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <ListMusic size={18} className="text-primary" />
                <span className="text-white/70 text-sm">{t.player.nowPlaying}</span>
                <span className="text-white/30 text-xs ml-auto">{defaultTracks.length} songs</span>
              </div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {defaultTracks.map((track) => (
                  <div
                    key={track.id}
                    onClick={() => setCurrentTrack(track)}
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                      currentTrack.id === track.id
                        ? 'bg-primary/20 text-primary'
                        : 'hover:bg-oled-muted text-white/70'
                    }`}
                  >
                    <div className="w-10 h-10 rounded bg-oled-muted flex-shrink-0 overflow-hidden relative">
                      <img src={track.coverUrl} alt={track.title} className="w-full h-full object-cover" />
                      {track.youtubeId && track.youtubeId !== 'none' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Youtube size={10} className="text-red-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{track.title}</p>
                      <p className="text-xs text-white/50 truncate">{track.artist} • {track.album}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/30">{track.duration}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-oled-base text-white/40">{track.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* YouTube Video Modal */}
      {showVideoModal && currentTrack && currentTrack.youtubeId && currentTrack.youtubeId !== 'none' && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${currentTrack.youtubeId}?autoplay=1&rel=0`}
              title={currentTrack.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center max-w-full px-4">
            <p className="text-white font-semibold text-lg truncate">{currentTrack.title}</p>
            <p className="text-white/50 text-sm">{currentTrack.artist} • {currentTrack.album}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;