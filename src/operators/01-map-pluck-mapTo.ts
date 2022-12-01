import { fromEvent, Observer, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

// range(1, 5).pipe(
//   map<number, number>( val => val * 10 ),
// ).subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe( map(event => event.code) );
//deprecated
const keyupPluck$ = keyup$.pipe( pluck('key') );
const keyupMapTo$ = keyup$.pipe( mapTo('key') );


keyupCode$.subscribe( observer );
//deprecated
keyupPluck$.subscribe( observer );
keyupMapTo$.subscribe( observer );
