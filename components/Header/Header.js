import styles from './Header.module.css'
import Box from '../core/Box/Box.js'

export default function Header({ data }) {
    return (
        <header className={ styles.main }>
            <Box>
                <div className={ styles.container }>
                    <svg viewBox="-25 -75 250 75">
                    <path fill="none"
                        stroke="none"
                        id="curve" 
                        d="M 0,0 
                            c 50,-65 150,-65 200,0" 
                    />
                    <text>
                        <textPath alignmentBaseline="top" textAnchor="middle" startOffset="50%" xlinkHref="#curve">
                        Taylor Jordan Riner
                        </textPath>
                    </text>
                    </svg>
                </div>
            </Box>
        </header>
    );
}