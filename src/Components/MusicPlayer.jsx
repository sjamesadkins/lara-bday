
import { useRef, useState } from 'react';

function MusicPlayer({ playlist }) {
  const [current, setCurrent] = useState(0);
  const audioRef = useRef(null);

  const next = () => setCurrent((current + 1) % playlist.length);
  const prev = () => setCurrent((current - 1 + playlist.length) % playlist.length);

  return (
    <div className="music-player">
      <audio ref={audioRef} src={playlist[current].src} autoPlay onEnded={next} >
      </audio>
      <div className="track-info">
        {playlist[current].artist} - {playlist[current].title}
      </div>
      <div className="controls">
        <button onClick={prev}>⏮</button>
        <button onClick={() => audioRef.current?.pause()}>⏸</button>
        <button onClick={() => audioRef.current?.play()}>▶️</button>
        <button onClick={next}>⏭</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
