import { sum } from './sumNumbers.js'

describe('sumNumbers Test', function() {
    it('Works', function() {
        if (!Array.isArray(sum(array))) {
            throw new Error('Not an array');
        }
    });
})