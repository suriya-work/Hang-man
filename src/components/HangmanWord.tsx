import styles from '../styles/HangmanWord.module.css';

type HangmanWordProps = {
  list: string[],
  wordToGuess: string,
  reveal?: boolean,

}
const HangmanWord = ({ list, wordToGuess, reveal = false }: HangmanWordProps) => {

  return (
    <div className={styles.word}>
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          <span style={{ visibility: list.includes(letter) || reveal ? "visible" : "hidden", color: !list.includes(letter) && reveal ? 'red' : 'black'}}>{letter}</span>
        </span>
      ))}
    </div>
  )
}

export default HangmanWord
