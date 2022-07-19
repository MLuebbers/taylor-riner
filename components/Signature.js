import styles from '../styles/components/Signature.module.css'

export default function Signature() {
    return (
        <span className={styles.main}>
            Built by <a href="https://www.maxluebbers.com/">ML</a>
        </span>
    );
}