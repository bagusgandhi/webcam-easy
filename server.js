import express from "express";

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(5000, () => {
    console.log('running on port 5000')
});
