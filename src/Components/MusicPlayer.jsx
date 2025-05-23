
import { useRef, useState, useEffect } from 'react';

function MusicPlayer({ playlist }) {
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(0.15); // Initial volume level
  const audioRef = useRef(null);

  const next = () => setCurrent((current + 1) % playlist.length);
  const prev = () => setCurrent((current - 1 + playlist.length) % playlist.length);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = (event) => {
    setVolume(parseFloat(event.target.value));
  };

  return (
    <>
      <div className="music-player">
        <audio id="audio" ref={audioRef} src={playlist[current].src} autoPlay onEnded={next}>
        </audio>
        <div className="track-info">
          {playlist[current].artist} - {playlist[current].title}
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
        <div className="music-player-input" >Volume: {Math.round(volume * 100)}%</div>
        <div className="controls">
          <button onClick={prev}>⏮</button>
          <button onClick={() => audioRef.current?.pause()}>⏸</button>
          <button onClick={() => audioRef.current?.play()}>▶️</button>
          <button onClick={next}>⏭</button>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
