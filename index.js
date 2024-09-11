import express from 'express';
import connection from './database/db.js'; // Adjust the path to where `db.js` is relative to your server folder
//import { connection } from 'mongoose';
import * as dotenv from 'dotenv';
import Routes  from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

// Use bodyParser middleware for handling JSON and URL-encoded form data
app.use(bodyParser.json({ extended: true }));  
app.use(bodyParser.urlencoded({ extended: true })); // Use extended for URL-encoded data

app.use(cors());

app.use(express.json()); //to parse JSON bodies

// Define a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.use('/api', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password= process.env.DB_PASSWORD;

connection(username, password);
//express server initialise using listen function
app.listen(PORT, () =>
    console.log(`server is running successfully on PORT ${PORT}`)
);
