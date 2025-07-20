import styles from './Socials.module.css'

export default function Socials({ data }) {
    const listItems = data?.map((value, index) => {
        if(!value.show) return ;
        return (
            <Item key={ index } data={ value } />
        );
    });

    return (
        <section className={ styles.main }>
            <ul className={ styles.list } role="list">
                { listItems }
            </ul>
        </section>
    );
}

function Item({ data }){
    const { text, url } = data;
    return (
        <li>
            <a className={ styles.start } href={ url }>{ text }</a>
        </li>
    );
}

