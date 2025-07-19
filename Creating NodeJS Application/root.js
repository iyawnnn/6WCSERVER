const http = require('http');
const about = require('./about');
const contact = require('./contact');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if (req.url === '/') { // /(ROOT)
        res.write('<h1>Welcome to my Node.js Application</h1>');
        res.write(module.exports('John Smith'));
    }
    else if (req.url === '/about') { // ABOUT
        res.write('<h1>This is the About Page</h1>');
        res.write(about('John Smith'));
    }
    else if (req.url === '/contact') { // CONTACT
        res.write('<h1>This is the Contact Page</h1>');
        res.write(contact('John Smith'));
    }
    else if (req.url === '/gallery') { // GALLERY
        res.write('<h1>This is the Gallery Page</h1>');
    }
    else {
        res.write('<p>Invalid request</p>'); // NON-EXISTING ROUTE
    }
    
    res.end();
});

module.exports = function(name) {
    return `<p>Welcome ${name}. This is an activity about basics of Node.js</p>`;
};

server.listen(5000); 
console.log('Node.js web server at port 5000 is running...');



/* 
    Student Name: Macabulos, Ian Sebastian V.
    Date: July 26, 2025
    Section: WD-304
*/