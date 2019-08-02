const express = require('express');
const teams = require('./src/teams');
const articles = require('./src/articles');
const authors = require('./src/authors');


const app = express();
const bodyParsingMiddleware = express.urlencoded({extended: true});
app.use(bodyParsingMiddleware);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/teams', teams);
app.use('/articles', articles);
app.use('/authors', authors);

app.use((req, res) => {
    res.send('Not found!');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server start on port ${port}`);
});