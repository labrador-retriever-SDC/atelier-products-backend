import csv from 'csv-parser';
import fs from 'fs';
import path from 'path';

const parseCSV = async (pathName: string) => new Promise((callback, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results: any[] = [];

    fs.createReadStream(path.join(__dirname, pathName))
      .pipe(csv({
        mapValues: ({ header, value }) => {
          switch (header) {
            case 'id':
            case 'default_price':
              return Number(value);
            default:
              return value;
          }
        }
      }))
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        callback(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  })

export default parseCSV;



