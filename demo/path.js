import path from 'path'

console.log('File name: ', path.basename('node-begin/demo/path.js'))

console.log('Dir name:', path.dirname('C:/Users/misha/OneDrive/Рабочий стол/SelfLearn/Node.JS/node-begin/demo/path.js'))

console.log('File extension: ', path.extname('path.js'))

console.log('Parse: ', path.parse('C:/Users/misha/OneDrive/Рабочий стол/SelfLearn/Node.JS/node-begin/demo/path.js').name)

console.log(path.join('Node.JS', 'node-begin' , 'demo', 'server', 'index.html'))