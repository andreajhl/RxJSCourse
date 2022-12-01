import { Observer, Observable } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const interval$ = new Observable<number>(subs => {
  let count = 0;

  const int = setInterval(() => {
    subs.next( count );
    count++
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500);

  //runs on unsubscribe
  return () => {
    clearInterval(int)
    console.log( 'close interval' )
  };
});


//subscribe
const subscribe1 = interval$.subscribe( observer );
const subscribe2 = interval$.subscribe( observer );
const subscribe3 = interval$.subscribe( observer );


//combine subscribe
subscribe1.add( subscribe2 );
subscribe1.add( subscribe3 );


//close subscribe
setTimeout(() => {
  subscribe1.unsubscribe();
  console.log( 'complete timeout' );
}, 6000);
