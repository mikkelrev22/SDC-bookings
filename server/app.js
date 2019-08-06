const express = require('express');
// const mysql = require('mysql');
const bodyParse = require('body-parser');
const app = express();
const { Pool } = require('pg')
const PORT = 3000;
const password = require('./secret.js')
app.use("/:id", express.static(__dirname + "/../client/public"));
app.use(bodyParse.json());

const pool = new Pool({
    host: "localhost",
    database: "postgres",
    username: "mikkelrev",
    password: password.secret,
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.on('error', () => {
    process.exit(-1);
  });
// connection.connect((err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("Connected to MySQL DB");
// });

app.get('/getrentaldata/:id', (req, res) => {
   //this routes the request which comes from the 
   //getDataForId function in index.jsx and then passes
   //the id along to query the database and return the entire
   //data body to the client
    
   pool.query(
       `SELECT * FROM rental_price_info WHERE id=${req.params.id}`,
       (err, results) => {
           if (err) {
               console.log(`error with getting all fields by id from rental_price_info between server and db`, err);
           }
           res.send(results)
       }
   );  
})

app.get('/getavailabilitydata/:id', (req, res) => {
    pool.query(
        `SELECT * FROM rental_availability WHERE rental_id=${req.params.id}`,
        (err, results) => {
            if (err) {
                console.log(`err getting data from rental_availability between server and db`, err);
            }
            res.send(results)
        }
    )
// pool.end()
})

app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)});