import React, { useState } from "react";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

function Keyboard({ wordToGuess, guessedLetters, setGuessedLetters, setTries, setGameOver }) {
    const [wrongGuessed, setWrongGuessed] = useState([]);

    const handleAddLetter = (key) => {
        if (wordToGuess.includes(key)) {
            setGuessedLetters((prev) => {
                // CHECKING GAME OVER
                if (wordToGuess.split("").every((ele) => [...prev, key].includes(ele))) {
                    setGameOver(true);
                }
                return [...prev, key];
            });
        } else {
            setWrongGuessed((prev) => [...prev, key]);
            setTries((prev) => ++prev);
        }
    };
    return (
        <div className="keyboard">
            {KEYS.map((key) => (
                <button
                    onClick={() => handleAddLetter(key)}
                    key={key}
                    className={`key ${guessedLetters.includes(key) ? "active" : ""}`}
                    disabled={wrongGuessed.includes(key)}
                >
                    {key}
                </button>
            ))}
        </div>
    );
}

export default Keyboard;
