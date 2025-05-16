import photos from '../Components/AssetLists/photos.js'

function PhotosView() {

  return (
    <div className="view">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((src, index) => (
          <img key={index} src={`/assets/photos/${src}`} alt={`upload-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default PhotosView;
