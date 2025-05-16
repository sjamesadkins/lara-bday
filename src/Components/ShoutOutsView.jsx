
import videos from '../Components/AssetLists/videos.js'

function ShoutOutsView() {

  return (
    <div className="view">
      <h1>Shout Outs</h1>
      <div className="video-column">
        {videos.map((src, index) => (
          <video key={index} src={`/assets/videos/${src}`} controls width="70%" />
        ))}
      </div>
    </div>
  );
}

export default ShoutOutsView;
