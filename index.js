const sqlite3 = require('sqlite3').verbose();
const chrome_path = process.env.HOME + '\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\History';
console.log(chrome_path);

//process.exit();

let db = new sqlite3.Database(chrome_path, sqlite3.OPEN_READONLY);

//	let db = new sqlite3.Database(chrome_path, sqlite3.OPEN_READONLY);

db.serialize(()=>{
	db.each("SELECT * FROM urls", (err, row)=>{
		if(err) console.log(err);
		console.log(row);
	});
});
db.close();
