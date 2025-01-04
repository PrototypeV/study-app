import { useState } from 'react';

const tips = ["Don't forget to drink some water!", "Little work is better than no work", "Your worth is not based on your productivity", "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Every day is a new beginning. Take a deep breath, smile, and start again.", "It always seems impossible until it's done. - Nelson Mandela", "It is never too late to be what you might have been."
  ]

function Tips() {
    const [randomNumber, setRandomNumber] = useState(0);

    const generateRandomNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 7));
    };

    return (
        <div>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
            <p>Random Number: {randomNumber}</p>
        </div>
    );
}

export default Tips;

