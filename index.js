const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Cook is running')
});


app.listen(port, () => {
    console.log(`Cook is running on port: ${port}`)
})