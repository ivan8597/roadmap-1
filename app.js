const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Server Index Page');
});
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});