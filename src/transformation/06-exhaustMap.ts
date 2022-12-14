import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) );
const click$ = fromEvent( document, 'click' );

// keep a subscription active before issuing another
// (those executed are ignored while a subscription is still active)
click$.pipe( exhaustMap( () => interval$ ) ).subscribe( console.log );
