import styles from '../styles/components/Schedule.module.css'
import formatDateRange from '../scripts/formatDateRange';
import { useEffect, useState } from 'react';

export default function Schedule({ data }) {
    const [sortedDates, setSortedDates] = useState([]);

    useEffect(() => {
        const dates = data?.dates.filter((value) => {
            if(value.end) return new Date(value.end) >= new Date();
            return new Date(value.start) >= new Date();
        })?.sort((a, b) => {
            return new Date(a.start) >= new Date(b.start);
        });

        setSortedDates(dates);
    }, [data?.dates]);
    
    // If there are no dates don't even render the section
    if(!(sortedDates?.length >= 1)) return (<></>);

    const listItems = sortedDates?.map((value, index) => {
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
            <span className={ styles.dates }>{ formatDateRange(start, end) }</span>
            <span className={ styles.description }><i>{ description }</i></span>
            <span className={ styles.location }>{ location }</span>
            <span className={ styles.venue }>
                <a href={ link }>{ venue }</a>
            </span>
        </li>
    );
}

