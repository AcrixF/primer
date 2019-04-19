import {sumValues} from "./sum";

export function asyncAdd( values) {
    setTimeout( () => {
        let total = sumValues( values );
        console.log(`Async total: ${total}`);
        return total;
    }, 1000);
}

export function asyncPromiseAdd( values ) {
    return new Promise( callback => setTimeout( () => {
            let total = sumValues(  values );
            console.log(`Async Total ${total}`);
            callback( total );
        }, 5000));
}