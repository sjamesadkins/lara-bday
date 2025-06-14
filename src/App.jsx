import { useState } from 'react';
import OffCanvasNav from './Components/OffCanvasNav.jsx';
import MusicPlayer from './Components/MusicPlayer.jsx';
import HomeView from './Components/HomeView.jsx';
import PhotosView from './Components/PhotosView.jsx';
import ShoutOutsView from './Components/ShoutOutsView.jsx';
import GiftView from './Components/GiftView.jsx';

const musicPlaylist = [
  { src: '/lara-bday/assets/music/pea.mp3', artist: 'Amos Less (cover by Sam)', title: 'Sweet Pea'},
  { src: '/lara-bday/assets/music/way.mp3', artist: 'Ingrid Michaelson (cover by Sam)', title: 'The Way I Am'},
  { src: '/lara-bday/assets/music/follow.mp3', artist: 'Death Cab for Cutie', title: 'I Will Follow You Into the Dark'},
  { src: '/lara-bday/assets/music/blackbird.mp3', artist: 'The Beatles', title: 'Blackbird'},
  { src: '/lara-bday/assets/music/duke.mp3', artist: 'Stevie Wonder', title: 'Sir Duke'},
  { src: '/lara-bday/assets/music/hallelujah.mp3', artist: 'Leonard Cohen (cover by Sam)', title: 'Hallelujah'},
  { src: '/lara-bday/assets/music/sparks.mp3', artist: 'Coldplay', title: 'Sparks'},
  { src: '/lara-bday/assets/music/la.mp3', artist: 'Nada Surf', title: 'La Pour Ça'},
  { src: '/lara-bday/assets/music/question.mp3', artist: 'Old 97s (cover by Sam)', title: 'Question'},
  ]

function App() {
  const [view, setView] = useState('Home');

  return (
    <div className="app">
      <OffCanvasNav currentView={view} setView={setView} />
      <div className="main-view">
        {view === 'Home' && <HomeView />}
        {view === 'Photos' && <PhotosView />}
        {view === 'ShoutOuts' && <ShoutOutsView />}
        {view === 'Gift' && <GiftView />}
      </div>
      <MusicPlayer playlist={musicPlaylist} />
    </div>
  );
}

export default App;
