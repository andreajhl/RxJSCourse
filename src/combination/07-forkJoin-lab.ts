import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'andreajhl';

forkJoin({
  user: ajax.getJSON(
    `${ GITHUB_API_URL }/${ GITHUB_USER }`
  ),
  repos: ajax.getJSON(
    `${ GITHUB_API_URL }/${ GITHUB_USER }/repo123123s`
  ).pipe(
    catchError( () => of([]) )
  ),
  gists: ajax.getJSON(
    `${ GITHUB_API_URL }/${ GITHUB_USER }/gists`
  )
}).pipe( catchError( of ) ).subscribe( console.log );
