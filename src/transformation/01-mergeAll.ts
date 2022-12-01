import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, mergeAll } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

const url = 'https://api.github.com/search/users?q=';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );


// Helpers
const showUsers = ( users: GithubUser[] ) => {
    
  console.log(users);
  orderList.innerHTML = '';

  for( const user of users ) {

    const li  = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const link  = document.createElement('a');
    link.href   = user.html_url;
    link.text   = 'Ver página';
    link.target = '_blank';

    li.append( img );
    li.append( user.login + ' ' );
    li.append( link );

    orderList.append(li);
  };
};

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


const getData = (text: string): Observable<GithubUsersResp> => ajax.getJSON( `${url}${ text }` );

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>( val => val.target['value']),
  map<string, Observable<GithubUsersResp>>( getData ),
  mergeAll<Observable<GithubUsersResp>>(),
  map<GithubUsersResp, GithubUser[]>( val => val.items),
).subscribe( showUsers );
