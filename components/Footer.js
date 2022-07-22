import Signature from '../components/Signature'
import Socials from '../components/Socials'

import styles from '../styles/components/Footer.module.css'

export default function Footer({ data }) {
    return (
        <footer className={styles.main}>
            <Socials data={ data.socials } />
            <Signature />
        </footer>
    );
}