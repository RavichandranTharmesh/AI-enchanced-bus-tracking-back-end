const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const port = 5001;

const routes = require('./routes/route');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose
    .connect(
        "mongodb+srv://bustharmesh:NxNr4GIkRXIeThK1@cluster0.rtk44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('cloud connected'))
    .catch((err) => console.log(err, 'cloud not connected'));


app.use('/api', routes);

app.listen(port, () => {
    console.log(`successfully running at http://localhost:${port}`);
})