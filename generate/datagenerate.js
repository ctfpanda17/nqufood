import { createReadStream, writeFileSync } from 'fs';
import csv from 'csv-parser';

// Array to store CSV data
const data = [];

// File path
const filePath = './data.csv';
const outputPath = '/Volumes/D/nqufood/nqufood/frontend/data.json';
const outputAlternative = '/Volumes/D/nqufood/nqufood/frontend/data.js';

// Read CSV file and parse its data
createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
        // Push each row to the data array
        data.push(row);
    })
    .on('end', () => {
        writeFileSync(outputPath, JSON.stringify(data, null, 4));
        writeFileSync(outputAlternative, `export default ${JSON.stringify(data, null, 4)}`);
    })