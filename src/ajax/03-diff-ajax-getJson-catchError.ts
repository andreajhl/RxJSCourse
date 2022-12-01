import { Observer, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

const url = 'https://httpbinxx.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const handleErrors = ( resp: AjaxError ) => {
  console.warn('error:', resp.message );
  return of({ ok: false, users: [] });
};

// const obs$  = ajax.getJSON( url ).pipe( catchError( handleErrors ) );
// const obs2$ = ajax( url ).pipe( catchError( handleErrors ) );

const obs$  = ajax.getJSON( url );
const obs2$ = ajax( url );

// obs2$.subscribe( console.log );
obs$.pipe( catchError( handleErrors ) ).subscribe( observer );
