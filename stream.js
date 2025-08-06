const fs = require('fs')

const readStream = fs.createReadStream('./docs/largeData.txt')

readStream.on('data', (chunk) => {
    console.log('----------    NEW CHUNK   ----------- ')
    console.log(chunk)
})