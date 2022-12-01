import { fromEvent, Observer } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
  tap<MouseEvent>( console.log ),
  map( ({ clientX, clientY }) => ({ clientY,clientX }) ),
  first( event => event.clientY >= 150 ),
).subscribe( observer );
