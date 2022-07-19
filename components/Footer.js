import Signature from '../components/Signature'
import Socials from '../components/Socials'

import styles from '../styles/components/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.main}>
            <Socials />
            <Signature />
        </footer>
    );
}