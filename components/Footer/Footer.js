import Signature from '../Signature/Signature'
import Socials from '../Socials/Socials'

import styles from './Footer.module.css'

export default function Footer({ data }) {
    return (
        <footer className={styles.main}>
            <Socials data={ data.socials } />
            <Signature />
        </footer>
    );
}