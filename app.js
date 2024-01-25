const express = require('express');
const app = express();

app.get('/get', (req, res) => {
    const queryParams = req.query;
    console.log('Query Parameters:', queryParams);
    res.send('Query Parameters logged to console');
  });
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
