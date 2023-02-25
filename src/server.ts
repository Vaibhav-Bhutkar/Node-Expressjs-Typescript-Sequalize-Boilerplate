import express from 'express';
import db from '../models';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

const app = express();


//Middleware 
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello VB");
})

const port = process.env.PORT || 5000;

//----Listen to port and start server without db sync
app.listen(port, () => {
    console.log("Server Started");
});

//----To Sync with DB
// db.sequelize.sync().then(() => {
//     app.listen(port, () => {
//         console.log("Server Started");
//     })
// });