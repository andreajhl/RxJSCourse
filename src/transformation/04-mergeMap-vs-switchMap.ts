import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );
const interval$ = interval(1000);

click$.pipe(
  //keep a single subscription active
  switchMap( () => interval$ ),

  //keep all subscriptions active
  // mergeMap( () => interval$ ),
).subscribe( console.log );
