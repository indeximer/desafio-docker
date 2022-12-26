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

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const sqlInsert = `INSERT into people(name) values('Douglas')`;
  connection.query(sqlInsert);

  const sqlSelect = "SELECT * from people";
  const peopleList = connection.query(sqlSelect);

  connection.end();
  const generateNamesList = () => {
    for (const person of peopleList) {
      return `<li>${person.name}<li>`;
    }
  };

  const content = `
    <h1>FullCycle ROCKS!</h1>
    <ul>
      ${generateNamesList()}
    </ul>
  `;

  res.send(content);
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));
