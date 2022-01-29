// File System
import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

//fs.mkdir(path.join('node-begin' , 'demo', 'server', 'test'), (err) => {
//    if (err) {
//        throw err
//    }
//
//    console.log('Dir has been created')
//})

//const __filename = fileURLToPath(import.meta.url)
//const __dirname = dirname(__filename)

//const filePath = path.join(__dirname, 'test', 'text.txt')

//fs.writeFile(filePath, 'Hello from Node.js', (err) => {
//    if (err) {
//        throw err
//    }
//
//    console.log('File has been created')
//})

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err
    }

    console.log(content)
    //const data = Buffer.from(content)
    //console.log('Content: ', data.toString)
})