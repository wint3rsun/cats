const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf-8', (error, data) => {
    //ISSUE: Returning from *inner* callback function, not breedDetailsFromFile
    if(!error) callback(data);
  });
};

const printCatBreed = (breed) => {
  console.log(breed);
};

breedDetailsFromFile('Bombay', printCatBreed);

