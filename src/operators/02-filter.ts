import { from, Observer, range } from 'rxjs';
import { filter } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

range(1, 10).pipe(
  filter( val => val % 2 === 1),
).subscribe( observer );

interface Character {
  type: string;
  name: string;
}

const characters: Character[] = [
  {
    type: 'hero',
    name: 'Batman'
  },
  {
    type: 'hero',
    name: 'Robin'
  },
  {
    type: 'villain',
    name: 'Joker'
  },
]

from(characters).pipe(
  filter( ({ type }) => type === 'hero'),
).subscribe( console.log );
