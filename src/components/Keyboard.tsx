import { type } from 'os';
import styles from '../styles/Keyboard.module.css';
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
]

type KeyboadProps = {
  disabled?: boolean,
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessesLetters: (letter: string) => void
}
const Keyboard = ({ activeLetters, inactiveLetters, addGuessesLetters, disabled = false  }: KeyboadProps) => {
  return (
    <div className={styles.container}>

      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key)
        return <button onClick={() => addGuessesLetters((key))} key={key} className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
          disabled={isInactive || isActive || disabled}
        >
          {key}
        </button>
      })}
    </div>
  )
}

export default Keyboard
