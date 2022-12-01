import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next( 'Hi' );
  subs.next( 'Bye' );
  subs.complete();
});

const observer: Observer<any> = {
  next: value => console.log( 'next: ', value ),
  error: error => console.warn( `error: ${error}` ),
  complete: () => console.log( 'Complete' ),
};

obs$.subscribe( observer );
