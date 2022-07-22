import formatDatetime from './formatDatetime';

export default function formateDateRange(start, end) {
    const formattedStart = formatDatetime(start);
    const formattedEnd = formatDatetime(end);
    return formattedStart + (formattedEnd ? ` - ${ formattedEnd }` : "");
}