import photos from '../Components/AssetLists/photos.js'

function PhotosView() {

  console.log(photos)
  return (
    <div className="view">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((src, index) => {
          console.log(src)
          return (
          <img key={index} src={`/lara-bday/assets/photos/${src}.jpg`} alt={`upload-${index}`} />
        )})}
      </div>
    </div>
  );
}

export default PhotosView;
