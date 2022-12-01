import { Observer, of } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const obs$ = of([1, 2], { a: 1, b: 2 }, function(){}, true);

console.log('start');
obs$.subscribe( observer );
console.log('end');
