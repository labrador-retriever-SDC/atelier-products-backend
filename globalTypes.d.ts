// type Query<T> = {
//     page: T
//     count: T
// }

interface Query {
    page: string
    count: string
}


type Style<T> = {
    id: string,
    name: string,
    sale_price: string,
    original_price: number,
    "default?": any
}