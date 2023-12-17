const fs = require('fs').promises; // Import the Promise-based API of the fs module
const fileName = './sample.txt'

async function readFileAsync() {
    try {
        const data = await fs.readFile(fileName, 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFileAsync();



// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log(data);
// });
