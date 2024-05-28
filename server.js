const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('dist'));

app.get('/api/FederalFM', (req, res) => {
  const url = 'http://usa15.ciudaddigital.com.uy:8040/FederalFM';
  req.pipe(request(url)).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});