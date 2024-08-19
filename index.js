import express, { response } from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
 return response.send('Hello Wo!')
});
app.get('/about', (request, response) => {
    return response.send('Nori suzinoti apie si projekta!😘')
   });
   app.get('*', (request, response) => {
    return response.send('ups.....Norimas puslapis nerastas!👽🛸')
   });

app.listen(port, () => {
  console.log(`App running on: http://localhost:${port}`)
});