import { useState } from 'react';
import OffCanvasNav from './Components/OffCanvasNav.jsx';
import MusicPlayer from './Components/MusicPlayer.jsx';
import HomeView from './Components/HomeView.jsx';
import PhotosView from './Components/PhotosView.jsx';
import ShoutOutsView from './Components/ShoutOutsView.jsx';
import GiftView from './Components/GiftView.jsx';

const musicPlaylist = [
  { src: '/lara-bday/assets/music/1.mp3', artist: 'Sweet Sam', title: 'Introduction'},
  { src: '/lara-bday/assets/music/2.mp3', artist: 'Amos Less (cover by Sam)', title: 'Sweet Pea'},
  { src: '/lara-bday/assets/music/3.mp3', artist: 'Ingrid Michaelson (cover by Sam)', title: 'The Way I Am'},
  { src: '/lara-bday/assets/music/4.mp3', artist: 'The Beatles', title: 'Blackbird'},
  { src: '/lara-bday/assets/music/5.mp3', artist: 'Stevie Wonder', title: 'Sir Duke'},
  { src: '/lara-bday/assets/music/7.mp3', artist: 'Kings of Convenience', title: "I'd Rather Dance"},
  { src: '/lara-bday/assets/music/8.mp3', artist: 'B-52s', title: 'Love Shack'},
  { src: '/lara-bday/assets/music/9.mp3', artist: 'The Cure', title: 'Love Song'},
  { src: '/lara-bday/assets/music/11.mp3', artist: 'The Beatles', title: "I'm Only Sleeping"},
  // { src: '/lara-bday/assets/music/12.mp3', artist: 'Sweet Sam', title: 'Pangs'},
  { src: '/lara-bday/assets/music/13.mp3', artist: 'Simple Minds', title: "Don't You (Forget About Me)"},
  { src: '/lara-bday/assets/music/14.mp3', artist: 'Radiohead', title: 'Everything In Its Right Place'},
  { src: '/lara-bday/assets/music/15.mp3', artist: 'George Harrison', title: 'My Sweet Lord'},
  { src: '/lara-bday/assets/music/95.mp3', artist: 'Leonard Cohen (cover by Sam)', title: 'Hallelujah'},
  { src: '/lara-bday/assets/music/96.mp3', artist: 'Coldplay', title: 'Sparks'},
  { src: '/lara-bday/assets/music/97.mp3', artist: 'Nada Surf', title: 'La Pour Ça'},
  { src: '/lara-bday/assets/music/98.mp3', artist: 'Old 97s (cover by Sam)', title: 'Question'},
  { src: '/lara-bday/assets/music/99.mp3', artist: 'Death Cab for Cutie', title: 'I Will Follow You Into the Dark'},
  { src: '/lara-bday/assets/music/100.mp3', artist: 'Billy Joel', title: 'The Way You Are'},
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
