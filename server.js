const express = require('express');
const app = express();
const expressLayouts = require('express-layouts');


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'))