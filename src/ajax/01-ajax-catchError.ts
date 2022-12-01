import { ajax, AjaxError } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const handleErrors = ( response: Response ) => {
  if ( !response.ok ) throw new Error( response.statusText );
  return response;
};

const catchErrors = (err: AjaxError) => {
  console.warn('error in:', err.message );
  return of([]);
};

// fetch( url )
//  .then( resp => resp.json() )
//  .then( data => console.log('data:', data) )
//  .catch( err => console.warn('error in users', err ) )

// fetch( url )
//  .then( handleErrors )
//  .then( resp => resp.json() )
//  .then( data => console.log('data:', data) )
//  .catch( err => console.warn('error in users', err ) )

ajax( url ).pipe(
  map( val => val.response),
  catchError( catchErrors )
).subscribe( console.log );
