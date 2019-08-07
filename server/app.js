const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const { Pool } = require('pg')
const PORT = 3000;
const password = require('./secret.js')
app.use("/:id", express.static(__dirname + "/../client/public"));
app.use(bodyParse.json());

const pool = new Pool({
    host: "ec2-34-214-151-224.us-west-2.compute.amazonaws.com",
    database: "postgres",
    user: "postgres",
    password: password.secrets, 
    port: 5432,
});

pool.on('error', () => {
    process.exit(-1);
  });

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
           res.send(results.rows)
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
            res.send(results.rows)
        }
    )
})

app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)});