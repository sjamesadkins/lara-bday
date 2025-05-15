
import React, { useState } from 'react';
import sam_b from '../assets/videos/sam_b_reel.mp4';

function ShoutOutsView() {
  // const [videos, setVideos] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    setVideos(prev => [...prev, ...files.map(file => URL.createObjectURL(file))]);
  };

  const videos = [
    sam_b,
    sam_b,
    sam_b,
    sam_b,
    sam_b,
  ]

  return (
    <div className="view">
      <h1>Shout Outs</h1>
      {/* <input type="file" accept="video/*" multiple onChange={handleUpload} /> */}
      <div className="video-column">
        {videos.map((src, index) => (
          <video key={index} src={src} controls width="70%" />
        ))}
      </div>
    </div>
  );
}

export default ShoutOutsView;
