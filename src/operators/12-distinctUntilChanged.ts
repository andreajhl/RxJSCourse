import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numbers$.pipe( distinctUntilChanged() /** prevValue !== currentValue */ ).subscribe( console.log );

interface Character { name: string; };

const characters: Character[] = [
  {
    name: 'Megaman',
  },
  {
    name: 'Megaman',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Dr. Willy',
  },
  {
    name: 'X',
  },
  {
    name: 'X',
  },
  {
    name: 'Zero',
  },
];

from( characters ).pipe(
  distinctUntilChanged( (prev, current) => prev.name === current.name )
).subscribe( console.log );
