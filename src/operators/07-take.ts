import { Observer, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const numbers$ = of(1,2,3,4,5);

numbers$.pipe(
  tap( t => console.log('tap', t) ),
  take(3)
).subscribe( observer );
