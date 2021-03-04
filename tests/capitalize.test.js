#!/usr/bin/env node
import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

assert(capitalize('hello') === 'Hello');
assert(capitalize('') === '');
test('capital', () => {
expect(capitalize('hello')).toEqual('Hello');
expect(capitalize('hi')).toEqual('Hi');
});

console.log('Все тесты пройдены!');
