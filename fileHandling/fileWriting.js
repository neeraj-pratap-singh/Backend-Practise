const fs = require('fs');
fs.writeFile('writeExample.txt', 'This is sample code to write data.', (err) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Data written successfully');
});