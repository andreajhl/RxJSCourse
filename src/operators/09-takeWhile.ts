import { fromEvent, Observer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
  map( ({ x, y }) => ({x,y}) ),

  //second value allows to display the value that completes the observable
  takeWhile( ({ y })=> y <= 150, true )
).subscribe( observer );
