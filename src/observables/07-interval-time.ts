import { Observer, interval, timer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};


//const interval$ = interval(1000);
// console.log('start');
// interval$.subscribe( observer );
// console.log('end');


// create an interval that starts at 2 seconds
// const timer2$ = timer(2000, 1000);


// schedule a date when to run
// const currentDayTo5 = new Date();
// currentDayTo5.setSeconds( currentDayTo5.getSeconds() + 5 );
// const timer$ = timer(currentDayTo5);


const timer$ = timer(1000);

console.log('start');
timer$.subscribe( observer );
console.log('end');
