const express = require('Express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const Axios = require('axios');

const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../dist/')));

app.get('/reviews/:id', (req, res) => {
  var { id } = req.params;
  Axios.get(`http://localhost:4002/reviews/${id}`)
    .then(({ data }) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(404).send('err')
    });
});

app.get('/products/all', cors(), (req, res) => {
  Axios.get(`http://localhost:4001/products/all`)
    .then(({ data }) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
