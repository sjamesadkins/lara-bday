
import React from 'react';
import lara from '../assets/photos/lara_ear.jpg';

function HomeView() {
  return (
    <div className="view">
      <div>
        <h1>Happy Birthday, Lara!!!</h1>
        <h3>Hit 'Play' on the music player below...</h3>
      </div>
      <div>
        <img src={lara} alt="Lara and Sam" width="900" height="1000" />
      </div>
    </div>
  );
}

export default HomeView;
