import styles from '../styles/components/CV.module.css'
import formatDateRange from '../scripts/formatDateRange'
import { useEffect, useState } from 'react';

export default function CV({ data }) {
    const [groupedEntries, setGroupedEntries] = useState([]);

    useEffect(() => {
        let groupedData = {}
        data?.entries.forEach(( entry ) => {
            if(groupedData[entry.type]) {
                groupedData[entry.type].push(entry);
            } else {
                groupedData[entry.type] = [entry];
            }
        });

        const cvSections = Object.keys(groupedData).map((value, index) => {
            return(<Section key={index} title={ value } data={ groupedData[value] }/>);
        });
        
        setGroupedEntries(cvSections);

    }, [data?.entries]);

    if(!(groupedEntries?.length >= 1)) return (<></>);

    return (
        <section className={ styles.main }>
            { groupedEntries }
        </section>
    );
}

function Section({ title, data }){
    const entries = data?.map((value, index) => {
        return (
            <Item key={ index } data={ value } />
        );
    });
    return (
        <>
            <h1 className={ styles.sectionHeader }>{ title }</h1>
            <ul className={ styles.list } role="list">
                { entries }
            </ul>
        </>
    );
}

function Item({ data }){
    const { start, end, title, subtitle, location, body } = data;
    return (
        <li className={ styles.item }>
            <span className={ styles.dates }>{ formatDateRange(start, end, "month") }</span>
            <span className={ styles.title }>{ title }</span>
            <span className={ styles.subtitle }>{ subtitle }</span>
            <span className={ styles.location }>{ location }</span>
            <span className={ styles.body }>{ body }</span>
        </li>
    );
}
