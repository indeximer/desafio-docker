const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

app.get("/", (req, res) => {
  const connection = mysql.createConnection(config);

  const sqlInsert = `INSERT into people(name) values('Douglas')`;
  connection.query(sqlInsert);

  const sqlSelect = "SELECT name FROM people";
  connection.query(sqlSelect, (err, result) => {
    connection.end();
    console.log("##### RESULT: ", result);

    let personsList = "";

    for (const person of result) {
      personsList += `<li>${person.name}</li>`;
    }

    console.log("#### PERSONS: ", personsList);

    const content = `
      <h1>FullCycle ROCKS!!</h1>
      <h2>Persons Name List:</h2>
      <ul>${personsList}</ul>
    `;

    res.send(content);
  });
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
