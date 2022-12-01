import { interval, Observer } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const numbers = [1,2,3,4,5];

const totalReducer = ( accumulator: number, currentValue: number ) => accumulator + currentValue;
const total = numbers.reduce( totalReducer, 0 );
console.log( total );

interval(500).pipe(
  take(6),
  tap( console.log ),
  reduce( totalReducer )
).subscribe( observer );
