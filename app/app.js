 // moduli utilizzati dal progetto

var express = require('express');
var app = express();
var mysql = require('mysql');

// configurazione motore di render

app.set('views', './views');
app.set('view engine', 'pug');

// gestione della homepage

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// visualizza l'elenco degli studenti sottoforma di link ipertestuali
// i dati vengono recuperati da un database MySql
// e vengono mandati al client utilizzando il template pug presente nel file link.pug

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

// visualizzazione dei telefoni dello studente selezionato tramite link ipertestuale
// il link, renderizzato nel file link.pug, è nella forma
// <site>/dettagli/<id dello studente>. es.: <site>/dettagli/54
// e viene recuperato utilizzando req.params.ID

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

// analogo alla action /link solo che in questo caso si restituisce il file select.pug
// che visualizza gli studenti in una select (menù a tendina) inserita
// all'interno di una form, la cui action é /dettaglio

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

// visualizzazione dei telefoni dello studente selezionato tramite il menù a tendina
// l'ID dello studente viene recuperato dalla pagine attraverso req.query.studente

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

// analogo alla action /link solo che in questo caso si restituisce il file select.pug
// che visualizza gli studenti in una lista di radio button inseriti
// all'interno di una form, la cui action é /dettaglio
// non è necessario codificare una nuova action /dettaglio perché si può utilizzare tranquillamente
// quella già creata per la select

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
