const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./app.db');
module.exports = db;

// 33개 부서 목록 출력
db.all("SELECT * FROM departments", (err, rows) => {
  if (err) return console.error(err.message);
  console.log(rows); 
});
