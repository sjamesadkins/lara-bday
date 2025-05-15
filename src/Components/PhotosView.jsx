
import React, { useState } from 'react';
import kiss from '../assets/photos/lara_kiss.jpg';
import duke from '../assets/photos/duke.jpg';
import mom from '../assets/photos/lara_mom.jpg';
import owen from '../assets/photos/lara_owen.jpg';
import party from '../assets/photos/duke_party.jpg';


function PhotosView() {
  // const [photos, setPhotos] = useState([]);

  // const handleUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   setPhotos(prev => [...prev, ...files.map(file => URL.createObjectURL(file))]);
  // };
  const photos = [
    kiss, duke, mom, owen, party,
  ]


  return (
    <div className="view">
      <h1>Photos</h1>
      {/* <input type="file" accept="image/*" multiple onChange={handleUpload} /> */}
      <div className="photo-grid">
        {photos.map((src, index) => (
          <img key={index} src={src} alt={`upload-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default PhotosView;
