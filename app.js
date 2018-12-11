let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

/* let homeRouter = require("./routes/home"); */

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//all me routes!
app.use("/", require("./routes/home"));
app.use("/about", require("./routes/about"));
app.use("/barHireStaff", require("./routes/barHireStaff"));
app.use(
  "/coffeeCocktailConversations",
  require("./routes/coffeeCocktailConversations")
);
app.use("/gallery", require("./routes/gallery"));
app.use("/howToMakeCocktails", require("./routes/howToMakeCocktails"));
app.use("/mobileCocktail", require("./routes/mobileCocktail"));
app.use("/services", require("./routes/services"));
app.use("/tailoredCocktails", require("./routes/tailoredCocktails"));
app.use("/teamBuilding", require("./routes/teamBuilding"));
app.use("/weddingBar", require("./routes/weddingBar"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
