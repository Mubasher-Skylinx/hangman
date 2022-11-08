import React, { useEffect } from "react";

function HangmanWord({ word, gameOver, guessedLetters }) {
    useEffect(() => {
        if (guessedLetters.join() === "f") {
        }
    }, [guessedLetters]);

    return (
        <div className="hangman-word">
            {word.split("").map((letter, index) => (
                <span key={index}>
                    <span
                        className={
                            guessedLetters.includes(letter)
                                ? "guessed"
                                : gameOver && !guessedLetters.includes(letter)
                                ? "notGuessed"
                                : ""
                        }
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}

export default HangmanWord;
