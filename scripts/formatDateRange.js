import formatDatetime from './formatDatetime';

export default function formateDateRange(start, end, style) {
    const formattedStart = formatDatetime(start, style);
    const formattedEnd = formatDatetime(end, style);
    return formattedStart + (formattedEnd ? ` - ${ formattedEnd }` : "");
}