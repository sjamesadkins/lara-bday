
import React from 'react';

function OffCanvasNav({ setView }) {
  return (
    <div className="offcanvas">
      <button onClick={() => setView('Home')}>Home</button>
      <button onClick={() => setView('Photos')}>Photos</button>
      <button onClick={() => setView('ShoutOuts')}>Shout Outs</button>
      <button onClick={() => setView('Gift')}>Gift</button>
    </div>
  );
}

export default OffCanvasNav;
