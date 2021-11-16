
let fs = require('fs');

const newTask = process.argv[2]

fs.appendFile('tasksList.js', `\n${newTask}`, function (err, data) {
    if (err) throw err;
    console.log(data)
});

fs.readFile('tasksList.js', 'utf8', function (err, data) {
    if (err) throw err;
    console.table(data);
});
