
// import { useState } from 'react';
import riddles from '../Components/AssetLists/riddles.js';
import { useState } from 'react';

const questions = [
  {
    prompt: riddles[0],
    answer: "dancer"
  },
  {
    prompt: riddles[1],
    answer: "gummy bears"
  },
  {
    prompt: riddles[2],
    answer: "duke"
  },
  {
    prompt: riddles[3],
    answer: "closet"
  },
];

function GiftView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const currentQuestion = questions[currentIndex];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedAnswer = currentQuestion.answer.trim().toLowerCase();

    if (normalizedInput === normalizedAnswer) {
      setIsCorrect(true);

      // Advance to next question after short delay
      setTimeout(() => {
        setIsCorrect(null);
        setUserInput('');
        setCurrentIndex((prev) => prev + 1);
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="gift-view text-center p-4" style={{textAlign: 'center'}}>
        <h2 className="text-xl font-bold mb-4">You've completed the game!</h2>
        <br/>
        <p >Well done! 🎉</p>
        <br/>
        <p>🎁🎁🎁 Your gift is hidden in the last answer!!! 🎁🎁🎁</p>
      </div>
    );
  }

  return (
    <div className="gift-view max-w-md mx-auto p-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Birthday Riddle #{currentIndex + 1}</h2>
      <p className="mb-4">{currentQuestion.prompt}</p>
      <br/><br/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="p-2 border rounded w-full mb-2"
          placeholder="Your answer..."
          required
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black font-bold px-4 py-2 rounded hover:bg-yellow-300"
        >
          Submit
        </button>
      </form>

      {isCorrect === true && <p className="text-green-600 mt-2">Correct! ✅</p>}
      {isCorrect === false && <p className="text-red-600 mt-2">Try again ❌</p>}
    </div>
  );
}

// export default QuestionGame;

export default GiftView;
