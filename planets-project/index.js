// Import required Node.js modules.
const csv = require('csv-parse');
const fs = require('fs');

// Initialize an empty array to store information about habitable planets.
let Habitable = [];

// Define a function to check if a planet is habitable based on criteria.
function isHabitable(planet){
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6;
};

// Open a readable stream to 'kepler_data.csv' and process it.
fs.createReadStream('kepler_data.csv')
    // Readable Stream (Source) ---> [ Pipe ] ---> Writable Stream (Destination)
    .pipe(csv.parse({
        comment: '#', // Ignore lines starting with '#'.
        columns: true, // Treat the first row as column headers
    })) 
    .on('data', (data) => {
        // When a data row is processed, check if it's habitable.
        if(isHabitable(data)){
            // If habitable, add it to the Habitable array.
            Habitable.push(data);
        }
    })
    .on('error', (err) => {
        // Log an error message if any error occurs during processing.
        console.log(`Error: ${err}`)
    })
    .on('end', () => {
        // When all data is processed, log the following information:
        console.log(`${Habitable.length} Habitable Planets Found!`);
        console.log(`----------------------`)
        console.log(Habitable.map((planet)=>{
            return planet['kepler_name'];
        }));
        console.log(`----------------------`)
        console.log(`=> Done Reading.`)
        console.log(`======================`)
    });

