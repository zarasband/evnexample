// console.log(process);
// console.log(process.env);
// console.log(process.env.USER);
// console.log(process.platform);
// console.log(process.version);

const express = require('express');
const app = express();

require('./config/config');

console.log(process.env.MONGODBURI);

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Peranc');
});
app.listen(port, () => {
    console.log(`server is running port ${port}`);

});