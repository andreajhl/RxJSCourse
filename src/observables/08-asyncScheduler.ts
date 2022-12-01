import { Observer, asyncScheduler } from 'rxjs';

//asyncScheduler => create subscription


//create timer
// const saludar = () => console.log('Hi');
// const saludar2 = ( nameUser ) => console.log(`Hi ${nameUser}`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Andrea' );

//create interval
const subs = asyncScheduler.schedule( function(state) {
  console.log({ state });

  this.schedule(state + 1, 1000)
}, 2000, 0);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000);
