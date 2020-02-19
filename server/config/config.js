
// Puerto

process.env.PORT = process.env.PORT || 3000;


//Entorno 

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

// if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';    
// } else {
//     urlDB = 'mongodb + srv : // Ana : sTycQpVu1rXJKUD4 @ cluster0-gnfja.mongodb.net / cafe ? retryWrites = true & w = mayority'
// }

process.env.URLDB = urlDB;