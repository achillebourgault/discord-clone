import styles from './LinkButtonIcon.module.css';

export default function LinkButtonIcon(props) {
    return (
        <div className={styles.linkButtonIcon}>
            {props.icon}
            <div className={styles.linkButtonIconName}>{props.name}</div>
        </div>
    )

}