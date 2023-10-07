const fs = require('fs');
const path = require('path');

//append content to file
fs.appendFile(
  path.join(__dirname, 'Posts', 'blogPost.txt'),
  '\nUpdated',
  (err) => {
    if (err) {
      console.log('err in data addition');
      return;
    }
    console.log('File Content Updated');
  }
);
