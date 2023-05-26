'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const csv_parser_1 = __importDefault(require('csv-parser'))
const fs_1 = __importDefault(require('fs'))
const path_1 = __importDefault(require('path'))
const parseCSV = async (pathName) =>
    new Promise((callback, reject) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const results = []
        fs_1.default
            .createReadStream(path_1.default.join(__dirname, pathName))
            .pipe(
                (0, csv_parser_1.default)({
                    mapValues: ({ header, value }) => {
                        switch (header) {
                            case 'id':
                            case 'default_price':
                                return Number(value)
                            default:
                                return value
                        }
                    },
                })
            )
            .on('data', (data) => {
                results.push(data)
            })
            .on('end', () => {
                callback(results)
            })
            .on('error', (error) => {
                reject(error)
            })
    })
exports.default = parseCSV
