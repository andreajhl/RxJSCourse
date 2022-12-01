import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge( 
  keyup$.pipe( map( val => val.type ) ), 
  click$.pipe( map( val => val.type ) )
).subscribe( console.log );
