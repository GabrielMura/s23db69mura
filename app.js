var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var treesRouter = require('./routes/tree');
var boardRouter = require('./routes/board');
var selectorRouter = require("./routes/selector");
var Tree = require("./models/tree");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tree', treesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on
async function recreateDB(){
  // Delete everything
  await Tree.deleteMany();
  let instance1 = new Tree({age: 10, size: 100, name: "oak"});
  let instance2 = new Tree({age: 20, size: 200, name: "pine"});
  let instance3 = new Tree({age: 30, size: 300, name: "birch"});
  instance1.save();
  instance2.save();
  instance3.save();
 }
 let reseed = true;
 if (reseed) { recreateDB();}

module.exports = app;
