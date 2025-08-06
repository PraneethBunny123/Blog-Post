const fs = require('fs')

// writing the callback functions cause they are dealing with file is an async operation and requires time. After the event happens the callback function will run

// reading

fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err)
    } 
    console.log(data)
})

// writing

fs.writeFile('./docs/blog1.txt', 'Editing the existing file blog1', () => {
    console.log('Edited the file')
})

fs.writeFile('./docs/blog2.txt', 'Creating a new file with this text', () => {
    console.log('Created new file as it is not there before')
})

// directories

// check if folder exists, if not create the folder or else remove the existing folder

if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) console.log(err)
        console.log('assets folder created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) console.log(err)
        console.log('assets folder removed')
    })
}

// delete

if(fs.existsSync('./docs/deleteMe.txt')) {
    fs.unlink('./docs/deleteMe.txt', (err) => {
        if(err) console.log(err)
        console.log('deleteMe file deleted')
    })
}

/////////////////////////////////////////////////
// large text data

const baseText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n`;

let largeData = ''

for(let i=0; i<1000; i++) {
    largeData += baseText 
}

fs.writeFile('./docs/largeData.txt', largeData, () => {
    console.log('large text file created')
})