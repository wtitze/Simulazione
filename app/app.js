/*eslint-env node*/

var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

var mysql = require('mysql');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/link', function (req, res) {
    
    var con = mysql.createConnection({
      host: "remotemysql.com",
      user: "mhJOLDRxsy",
      password: "trXOgghfWu",
      database: "mhJOLDRxsy"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM studente", function (err, result, fields) {
        if (err) throw err;
          res.render("link", {title:"lista studenti", message: "lista degli studenti", list:result});
      });
    });
});

app.get('/dettagli/:ID', function (req, res) {
    
    var con = mysql.createConnection({
      host: "remotemysql.com",
      user: "mhJOLDRxsy",
      password: "trXOgghfWu",
      database: "mhJOLDRxsy"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM telefono where IDS=" + req.params.ID, function (err, result, fields) {
        if (err) throw err;
          res.render("dettagli", {title:"dettaglio studente", message: "telefoni dello studente selezionato", list:result});
      });
    });
});

app.get('/select', function (req, res) {
    
    var con = mysql.createConnection({
      host: "remotemysql.com",
      user: "mhJOLDRxsy",
      password: "trXOgghfWu",
      database: "mhJOLDRxsy"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM studente", function (err, result, fields) {
        if (err) throw err;
          res.render("select", {title:"lista studenti", message: "lista degli studenti", list:result});
      });
    });
});

app.get('/dettaglio', function (req, res) {
    
    var con = mysql.createConnection({
      host: "remotemysql.com",
      user: "mhJOLDRxsy",
      password: "trXOgghfWu",
      database: "mhJOLDRxsy"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM telefono where IDS=" + req.query.studente, function (err, result, fields) {
        if (err) throw err;
          res.render("dettagli", {title:"dettaglio studente", message: "telefoni dello studente selezionato", list:result});
      });
    });
});

app.get('/radio', function (req, res) {
    
    var con = mysql.createConnection({
      host: "remotemysql.com",
      user: "mhJOLDRxsy",
      password: "trXOgghfWu",
      database: "mhJOLDRxsy"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM studente", function (err, result, fields) {
        if (err) throw err;
          res.render("radio", {title:"lista studenti", message: "lista degli studenti", list:result});
      });
    });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
