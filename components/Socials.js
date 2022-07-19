import styles from '../styles/components/Socials.module.css'

export default function Socials() {
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

function Item({ data }){
    const { link, platform } = data;
    return (
        <li>
            <a className={ styles.start } href={ link }>{ platform }</a>
        </li>
    );
}

const mydata =[
    {
        "link":"asdafadfaf",
        "platform":"adsf",
    },
    {
        "link":"asghjkghjkfmnnfaf",
        "platform":"s",
    },
    {
        "link":"asdafaf",
        "platform":"adsf",
    },
];

