// logs.js
const log = require('./logs');
log.info('Starting application');
log.warning('Low disk space');
log.error('File not found');

// person.js
const Person = require('./person');

// data.js
const data = require('./data');

// Use data from data.js to create a Person object
const person1 = new Person(data.firstName, data.lastName);
console.log('\nPerson Full name:', person1.fullName());
