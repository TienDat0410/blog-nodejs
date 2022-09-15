const express = require('express');
const morgan = require('morgan');
// const handlebars = require('express-handlebars')
const exphbs = require("express-handlebars");
const { engine } = require("express-handlebars");
const path = require('path');
const app = express();
const port = 3000;

//logo
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));
//Template engine
// app.engine('handlebars', handlebars.engine()); phiên bản cũ
// app.set('view engine', 'handlebars');
app.engine(".hbs", engine({
  extname: '.hbs'
}));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "./resources/views"));

//route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})