import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from( numeros ).pipe(
  reduce( totalAcumulador, 0 )
)
.subscribe( console.log );

// Scan
from( numeros ).pipe(
  scan( totalAcumulador, 0 )
)
.subscribe( console.log );

// Redux
interface Usuario {
  id?: string;
  authenticated?: boolean;
  token?: string;
  age?: number;
}

const user: Usuario[] = [
  { id: 'fher', authenticated: false, token: null },
  { id: 'fher', authenticated: true, token: 'ABC' },
  { id: 'fher', authenticated: true, token: 'ABC123' },
];

const state$ = from( user ).pipe(
  scan<Usuario>( (acc, cur) => {
    return { ...acc, ...cur }
  }, { age: 33 })
);

const id$ = state$.pipe<Usuario>(
  map( state => state.id )
);

id$.subscribe( console.log );
