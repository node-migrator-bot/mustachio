var assert = require("assert"),
    mustache = require("../index"),
    assert = require("assert"),
    express = require("express"),
    app;

module.exports = {
  '1. express-specific options should not pollute the root-level helper data': function() {
    app  = express.createServer();

    app.configure(function() {
      app.register('.mustache', mustache);
      app.set('view engine', 'mustache');
      app.set('views', __dirname + '/fixtures');
      app.set('view options', {
        layout: false
      });
      app.use(app.router);
    });

    app.get('/test1', function(req, res){
      res.render("test1", { value: "abc" });
    });

    app.get('/test2', function(req, res){
      res.render("test2", { value: "abc" });
    });

    assert.response(app, { url: '/test1' },
      { status: 200, body: "abc" }
    );

    assert.response(app, { url: '/test2' },
      { status: 200, body: "ABC" }
    );
  }
};
