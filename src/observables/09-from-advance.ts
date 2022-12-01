import { Observer, from, of } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

/**
 * of: takes arguments and generates a sequence
 * from: array, promise, iterable, observable
 */

// const source$ = from([0, 1, 2, 3, 4, 5]);
// const source2$ = of(...[1, 2, 3, 4, 5, 6]);
//output => 1, 2, 3, 4, ...

// const source$ = from('fernando');
//output => f, e, r, n, ....
// const source2$ = of('fernando');
//output => fernando


// const source$ = from( fetch('https://api.github.com/users/klerith') );

// source$.subscribe( async resp => {
//   const data = await resp.json();
//   console.log(data);
// });

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();

from(myIterable).subscribe(observer)
