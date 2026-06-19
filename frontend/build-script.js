const fs = require('fs');
const path = require('path');

const clientJsPath = path.join(__dirname, 'js', 'client.js');
const backendUrl = process.env.BACKEND_URL || 'wss://bacendfordasta.onrender.com';

console.log('Replacing BACKEND_URL_PLACEHOLDER with:', backendUrl);

let content = fs.readFileSync(clientJsPath, 'utf8');
content = content.replace('BACKEND_URL_PLACEHOLDER', backendUrl);
fs.writeFileSync(clientJsPath, content);

console.log('Build completed successfully');
