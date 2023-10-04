import styles from './TitleBar.module.css';

export default function TitleBar() {
    return (
        <div className={styles.titleBar}>
            <span>Discord</span>
            <div className={styles.actions}>
                <button id="minimize">-</button>
                <button id="maximize">+</button>
                <button id="close">x</button>
            </div>
        </div>
    );
}