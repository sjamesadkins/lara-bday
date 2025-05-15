
import React, { useState } from 'react';

function GiftView() {
  const [step, setStep] = useState(0);

  const prompts = [
    { text: 'You find a mysterious box. Open it?', options: ['Yes', 'No'] },
    { text: 'It glows! Do you touch it?', options: ['Touch', 'Run'] },
    { text: 'You’re transported! Adventure begins...', options: [] }
  ];

  const nextStep = () => setStep(step + 1);

  return (
    <div className="view">
      <h1>Gift</h1>
      <p>{prompts[step]?.text}</p>
      {prompts[step]?.options.map((opt, i) => (
        <button key={i} onClick={nextStep}>{opt}</button>
      ))}
    </div>
  );
}

export default GiftView;
