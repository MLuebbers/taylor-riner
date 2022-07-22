import styles from '../styles/components/About.module.css'

export default function About({ data }) {
    return (
        <section className={styles.main}>
            <p>
                { data }
            </p>
        </section>
    );
}