import { useCallback, useEffect, useState } from "react";
import styles from './styles/Keyboard.module.css';
import words from './wordList.json';
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [list, setList] = useState<string[]>([])

  const incorrectLetters = list.filter((letter) => !wordToGuess.includes(letter))
  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => list.includes(letter))


  const addGuessesLetters = useCallback((letter: string) => {

    if (list.includes(letter) || isLoser || isWinner)

      setList(currentLetters => [...currentLetters, letter])
  }, [list , isLoser , isWinner])


  useEffect(() => {
    const handelr = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessesLetters(key)
    }
    document.addEventListener('keypress', handelr)
    return () => {
      document.removeEventListener('keypress', handelr)
    }
  }, [list])
  return (
    <div className={styles.app}>
      <div className={styles.text}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} list={list} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={list.filter((letter) =>
            wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessesLetters={addGuessesLetters}
        />
      </div>
    </div>
  );
};

export default App;