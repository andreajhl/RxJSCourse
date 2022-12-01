import { ajax } from 'rxjs/ajax';
import { startWith } from 'rxjs/operators';

const url = 'https://reqres.in/api/users/2?delay=3';

// References
const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

// Stream
ajax.getJSON(url).pipe( startWith(true) ).subscribe( resp => {
  resp ? body.append( loadingDiv ) : document.querySelector('.loading').remove();
  console.log(resp);
});
