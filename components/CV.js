import styles from '../styles/components/CV.module.css'

export default function CV({ data }) {
    const listItems = data?.entries.map((value, index) => {
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
    const { start, end, title, subtitle, location, body } = data;
    return (
        <li className={ styles.item }>
            <span className={ styles.start }>{ start }</span>
            <span className={ styles.end }>{ end }</span>
            <span className={ styles.title }>{ title }</span>
            <span className={ styles.subtitle }>{ subtitle }</span>
            <span className={ styles.location }>{ location }</span>
            <span className={ styles.body }>{ body }</span>
        </li>
    );
}

const mydata =[
    {
        "start":"asdafadfaf",
        "end":"adsf",
        "description":"asdjhffghaf",
        "location":"asdafadfaghghdf",
        "venue":"dafhadsf",
    },
    {
        "start":"asghjkghjkfmnnfaf",
        "end":"s",
        "description":"asdjhffghaf",
        "location":"asdafadfjkjjkfjkkhjf",
        "venue":"dafhadsf",
    },
    {
        "start":"asdafaf",
        "end":"adsf",
        "description":"asd",
        "location":"asdafhghdf",
        "venue":"dafhadsf",
    },
];

