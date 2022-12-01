import { Observer, fromEvent } from 'rxjs';

//events DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

src1$.subscribe(({x, y}) => console.log( `next: x: ${x}, y: ${y}` ));
src2$.subscribe(({ key }) => console.log( `next: ${key}` ));
