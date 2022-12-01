import { interval, fromEvent, Observer } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const button = document.createElement('button');
button.innerHTML = 'stop Timer';

document.querySelector('body').append( button );

const counter$ = interval(1000);

const clickBtn$ = fromEvent( button, 'click' ).pipe(
  tap( () => console.log('tap before skip') ),
  // skip event broadcasts
  skip(1),
  tap( () => console.log('tap after skip') ),
);

counter$.pipe( takeUntil( clickBtn$ ) ).subscribe( observer );
