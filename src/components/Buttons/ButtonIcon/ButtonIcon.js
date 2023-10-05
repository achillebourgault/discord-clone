import styles from './ButtonIcon.module.css';

export default function ButtonIcon(props) {
    return (
        <button className={styles.buttonIcon}>
            {props.icon}
        </button>
    )
}