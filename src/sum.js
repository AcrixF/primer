export default function ( values ) {
    return values.reduce( (total, val) => total + val, 0 );
}

export function sumValues ( values ) {
    return values.reduce( (total, val) => total + val, 0 );
}

export function summOdd( values ) {
    return sumValues( values.filter( (item, index) => index % 2 === 0));
}