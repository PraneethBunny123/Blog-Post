const fs = require('fs')

const readStream = fs.createReadStream('./docs/largeData.txt', {encoding: 'utf8'})

const writeStream = fs.createWriteStream('./docs/newLargeData.txt')

// readStream.on('data', (chunk) => {
//     console.log('----------    NEW CHUNK   ----------- ')
//     // console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })

////////////////////////////////////////////

// piping

readStream.pipe(writeStream)