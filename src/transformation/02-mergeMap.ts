import { of, interval, fromEvent, Observer } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap( (letra) => interval(1000).pipe(
    map( i => letra + i ), 
    take(3)
  )),
);//.subscribe( observer );


const mousedown$ = fromEvent( document, 'mousedown');
const mouseup$ = fromEvent( document, 'mouseup');
const interval$ = interval();

mousedown$.pipe(
  mergeMap( () => interval$.pipe( takeUntil( mouseup$ ) )),
).subscribe( observer );
