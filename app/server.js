const express = require('express');
const app = express();
const PORT = 80;

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});