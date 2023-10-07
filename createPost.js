const fs = require('fs');
const path = require('path');


fs.writeFile(path.join(__dirname, 'Posts', 'blogPost.txt'), 'Created', (err) => {
  if (err) {
    throw err;
  }
  console.log('File Created');
});
