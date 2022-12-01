import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numbers$ = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) ); //0..1..2 
const letters$ = of('a','b','c').pipe( delay(3500) );

// forkJoin([
//   numbers$,
//   interval$,
//   letters$,
// ]).subscribe( console.log  );

// forkJoin({
//   numbers$,
//   interval$,
//   letters$,
// }).subscribe( console.log );

forkJoin({
  num: numbers$,
  int: interval$,
  let: letters$,
}).subscribe( console.log );
