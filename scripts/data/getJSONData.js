import path from 'path';
import fs from 'fs';

export default function getJSONData(src) {
    const fileName = path.join(path.join(process.cwd(), 'public/content', src));
    try {
        const fileContents = fs.readFileSync(fileName, 'utf8');
        const jsonResult = JSON.parse(fileContents);
        return jsonResult;
    } catch(error) {
        return [];
    }
}