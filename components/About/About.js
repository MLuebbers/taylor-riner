import styles from "./About.module.css";

export default function About({ data }) {
    return (
        <section className={styles.main}>
            <p>
                { data }
            </p>
        </section>
    );
}