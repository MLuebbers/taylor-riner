import styles from '../styles/components/Schedule.module.css'

export default function Schedule() {
    const listItems = mydata.map((value, index) => {
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

function Item({ data }) {
    const {start, end, description, location, venue, link} = data;
    return (
        <li className={ styles.item }>
            <span className={ styles.start }>{ start }</span>
            <span className={ styles.end }>{ end }</span>
            <span className={ styles.description }>{ description }</span>
            <span className={ styles.location }>{ location }</span>
            <span className={ styles.venue }>
                <a href={ link }>{ venue }</a>
            </span>
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

