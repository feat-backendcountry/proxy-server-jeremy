const express = require('Express');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/')));

app.listen(port, () => console.log(`Listening on port ${port}`));
