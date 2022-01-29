// Module support

//import chalk from 'chalk'
//import text from './data.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

//console.log(chalk.blue(text))

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

//console.log(__dirname)

// Building Your Own Web Server

import http from 'http'
import fs from 'fs'
import path from 'path'

const server = http.createServer((req, res) => {
    

//    if (req.url === '/') {
//        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//            if (err) {
//                throw err
//           }
//
//            res.writeHead(200, {
//                'Content-Type':'text/html'
//            })
//            res.end(data)
//        })
//    } else  if (req.url === '/contact') {
//        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
//            if (err) {
//                throw err
//            }
//
//            res.writeHead(200, {
//                'Content-Type':'text/html'
//            })
//            res.end(data)
//        })
//    }

// More optimized option

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        default: 
            contentType = 'text/html'
    }
    
    if (!ext) {
        filePath += '.html'
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
          fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
            if (err) {
                res.writeHead(500)
                res.end('Error')
            } else {
                res.writeHead(200, {
                    'Content-Type' : 'text/html'
                })
                res.end(data)
            }
        })
    } else {
        res.writeHead(200, {
            'Content-Type' : contentType
        })
        res.end(content)
    }
})
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})