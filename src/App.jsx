import { useState } from 'react';
import OffCanvasNav from './Components/OffCanvasNav';
import MusicPlayer from './Components/MusicPlayer';
import HomeView from './Components/HomeView';
import PhotosView from './Components/PhotosView';
import ShoutOutsView from './Components/ShoutOutsView';
import GiftView from './Components/GiftView';

const musicPlaylist = [
  { src: '/assets/music/follow.mp3', artist: 'Death Cab for Cutie', title: 'I Will Follow You Into the Dark'},
  { src: '/assets/music/blackbird.mp3', artist: 'The Beatles', title: 'Blackbird'},
  { src: '/assets/music/duke.mp3', artist: 'Stevie Wonder', title: 'Sir Duke'},
  { src: '/assets/music/sleeping.mp3', artist: 'The Beatles', title: "I'm Only Sleeping"},
  { src: '/assets/music/sparks.mp3', artist: 'Coldplay', title: 'Sparks'},
  { src: '/assets/music/la.mp3', artist: 'Nada Surf', title: 'La Pour Ça'},
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
