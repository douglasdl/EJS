import express from "express";
const app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('pages/home');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})