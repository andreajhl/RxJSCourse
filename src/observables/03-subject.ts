import { Observer, Observable, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const interval$ = new Observable<number>(subs => {

  //Could Observable
  const int = setInterval(() => subs.next( Math.random() ), 5000);

  //runs on unsubscribe
  return () => clearInterval(int) || console.log( 'close interval' );
});


/**
  1. Casteo multiple
  2. Es Observer
  3. Next, Eroor, Complete
* */
const subject$ = new Subject();
const intervalSub = interval$.subscribe( subject$ );


//subscribe
const subscribe1 = subject$.subscribe( observer );
const subscribe2 = subject$.subscribe( observer );


//combine subscribe
subscribe1.add( subscribe2 )


//close subscribe
setTimeout(() => {
  //Hot Observable
  subject$.next( 10 );

  subject$.complete();

  intervalSub.unsubscribe();
}, 3500);
