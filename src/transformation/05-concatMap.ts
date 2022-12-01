import { interval, fromEvent } from 'rxjs';
import { take, concatMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );

click$.pipe(
  //keep all active subscriptions sequentially
  concatMap( () => interval$ )
).subscribe( console.log );
