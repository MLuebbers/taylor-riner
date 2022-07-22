import styles from '../../styles/components/core/Box.module.css'

export default function Box({ children }) {
    return (
        <div className={ styles.main }>
            { children }
        </div>
    );
}