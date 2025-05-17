import photos from '../Components/AssetLists/photos.js'

function PhotosView() {

  photos.sort((a, b) => {
  
  return Number(a) - Number(b);
  });

  return (
    <div className="view">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((src, index) => {
          console.log(src)
          return (
          <img key={index} src={`/assets/photos/${src}`} alt={`upload-${index}`} />
        )})}
      </div>
    </div>
  );
}

export default PhotosView;
