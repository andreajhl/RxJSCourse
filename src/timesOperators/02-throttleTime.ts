import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, map, distinctUntilChanged, tap } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );

click$.pipe(
  throttleTime(3000)
)//.subscribe( console.log );

// Example 2
const input = document.createElement('input');
document.querySelector('body').append( input );

const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
  throttleTime(400, asyncScheduler, {
    leading: false,
    trailing: true
  }),
  tap( console.log ),
  map( ({ target } ) => target.value),
  distinctUntilChanged()
).subscribe( console.log );
