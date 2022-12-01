import { asyncScheduler, observeOn, Observer, range } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const obs$ = range(-5, 10).pipe( observeOn(asyncScheduler) );

console.log('start');
obs$.subscribe( observer );
console.log('end');
