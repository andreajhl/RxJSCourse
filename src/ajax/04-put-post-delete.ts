import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// ajax.put( url, {
//   id: 1,
//   name: 'Pepe'
// },
// {
//   'my-token': 'ABC123'
// }).subscribe( console.log  );

ajax({
  url,
  method: 'POST',
  headers: { 'my-token': 'ABC123' },
  body: {
    id: 1,
    name: 'Pepe'
  },
}).subscribe( console.log );
