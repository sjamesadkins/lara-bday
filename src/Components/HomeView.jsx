
import lara from './InternalAssets/1.jpg';

function HomeView() {
  return (
    <div className="view">
      <div>
        <h1>Happy Birthday, Lara!!!</h1>
        <h3>Hit 'Play' on the music player below...</h3>
      </div>
      <div>
        <br/><br/><br/>
        {/* <img src={lara} alt="Lara" width="1200" height="800" /> */}
        <img src={lara} alt="Lara"/>
      </div>
    </div>
  );
}

export default HomeView;
