import { fromEvent, of } from 'rxjs';
import { tap, map, catchError, exhaustMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const url = 'https://reqres.in/api/login?delay=1';

// Helper
const peticionHttpLogin = ( userPass ) => 
  ajax.post(url, userPass)
      .pipe(
        map( res => res.response['token']),
        catchError( () => of('xxx') ),
      );



// create form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass  = document.createElement('input');
const submitBtn  = document.createElement('button');

// Configuractions
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit' )
  .pipe(
    tap( ev => ev.preventDefault() ),
    map( ({ target }) => ({
      email: target[0].value,
      password: target[1].value
    })),
    exhaustMap( peticionHttpLogin ),
  );

submitForm$.subscribe( console.log );
