import styles from '../styles/components/Portrait.module.css'

export default function Portrait({ data }) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <img className={styles.image} src="/content/assets/textures/taylor.png" />
            </div>
        </div>
    );
}