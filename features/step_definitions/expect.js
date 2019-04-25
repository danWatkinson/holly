const chai = require('chai');
const assertArrays = require('chai-arrays');
const chaiString = require('chai-string');
chai.use(assertArrays);
chai.use(chaiString);

module.exports = chai.expect;
