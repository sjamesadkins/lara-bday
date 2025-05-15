import React, { useState } from 'react';
import OffCanvasNav from './Components/OffCanvasNav';
import MusicPlayer from './Components/MusicPlayer';
import HomeView from './Components/HomeView';
import PhotosView from './Components/PhotosView';
import ShoutOutsView from './Components/ShoutOutsView';
import GiftView from './Components/GiftView';
import follow from './assets/music/follow.mp3';
import blackbird from './assets/music/blackbird.mp3';
import duke from './assets/music/duke.mp3';
import sleeping from './assets/music/sleeping.mp3';



const musicPlaylist = [
  { src: follow, artist: 'Death Cab for Cutie', title: 'I Will Follow You Into the Dark'},
  { src: blackbird, artist: 'The Beatles', title: 'Blackbird'},
  { src: duke, artist: 'Stevie Wonder', title: 'Sir Duke'},
  { src: sleeping, artist: 'The Beatles', title: "I'm Only Sleeping"},


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
