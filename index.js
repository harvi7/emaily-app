const express = require('express');

const app = express();  


app.get('/', (req, res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000; // port asiigned by Heroku
app.listen(PORT);

// localhost:5000