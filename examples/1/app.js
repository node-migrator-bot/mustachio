var express = require("express"),
    mustachio = require("mustachio"),
    app = express.createServer();

app.configure(function() {
  app.register('.mustache', mustachio);
  app.set('view engine', 'mustache');
  app.set('views', __dirname + '/views');
});

app.get("/", function(req, res) {
  res.render("index", {
    title: "Example Application with Mustachio"
  });
});

app.get("/1", function(req, res) {
  res.render("1", {
    title: "Page 1"
  });
});

app.get("/2", function(req, res) {
  res.render("2");
});

app.get("/3", function(req, res) {
  res.render("3");
});


app.listen("3000");
