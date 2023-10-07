const fs = require('fs');
const path = require('path');

// create a directory
fs.mkdir(path.join(__dirname, '/Posts'), (err) => {
  if (err) {
    console.log(err);
    console.log('Folder with the same name already exists');
    return;
  }
  console.log('Posts folder created');
});
