// 테스트용 코드
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./app.db');
module.exports = db;

// 33개 부서 목록 전체 출력
db.all("SELECT * FROM departments", (err, rows) => {
  if (err) return console.error(err.message);
  console.log(rows); 
});

// 54개 notice 전체 출력
db.all("SELECT * FROM notice", (err, rows) => {
  if (err) return console.error(err.message);
  console.log(rows);
});

db.close()