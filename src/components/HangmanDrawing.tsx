import { type } from 'os'
import styles from '../styles/HangmanDrawing.module.css'

const HEAD = (
    <div className={styles.head} />
)


const BODY = (
    <div className={styles.body} />
)


const RIGHT_ARM = (
    <div className={styles.rightArm} />
)

const LEFT_ARM = (
    <div className={styles.leftArm} />
)

const RIGHT_LEG = (
    <div className={styles.rightLeg} />
)

const LEFT_LEG = (
    <div className={styles.leftLeg} />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDriwingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDriwingProps) => {
    return (
        <div className={styles.container}>
            {BODY_PARTS.slice(0 , numberOfGuesses)}
            <div className={styles.lineRight} />
            <div className={styles.lineLeft} />
            <div className={styles.lineHeight} />
            <div className={styles.lineBottob} />

        </div>
    )
}

export default HangmanDrawing
