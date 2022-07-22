export default function formatDatetime( datetime ) {
    if(!datetime) return "";
    const d = new Date(datetime);
    return d.toLocaleString('en-US', { month: 'short', day: 'numeric'});
}
