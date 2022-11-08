import { useEffect, useState } from "react";
import words from "./assets/data/wordList.json";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
    const [tries, setTries] = useState(0);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [wordToGuess, setWordToGuess] = useState();

    useEffect(() => {
        setWordToGuess(words[Math.floor(Math.random() * words.length)]);
        setLoading(false);
    }, []);

    return loading ? (
        "Loading..."
    ) : (
        <section className="game-container">
            <h5>LOSE / WIN</h5>
            <HangmanDrawing tries={tries} setGameOver={setGameOver} />
            <HangmanWord word={wordToGuess} gameOver={gameOver} guessedLetters={guessedLetters} />
            {!gameOver ? (
                <Keyboard
                    wordToGuess={wordToGuess}
                    setTries={setTries}
                    guessedLetters={guessedLetters}
                    setGameOver={setGameOver}
                    setGuessedLetters={setGuessedLetters}
                />
            ) : (
                <h2 className="gameOverText">GAME OVER</h2>
            )}
        </section>
    );
}

export default App;
