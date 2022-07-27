export default function formatDatetime( datetime, style ) {
    if(!datetime) return "";
    const d = new Date(datetime);
    switch(style){
        case "month":
            return d.toLocaleString('en-US', { month: 'short', year: 'numeric'});
        case "day":
        default:
            return d.toLocaleString('en-US', { month: 'short', day: 'numeric'});
    }
}
