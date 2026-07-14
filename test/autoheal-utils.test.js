'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { colorDistance, isColorClose } = require('../src/autoheal-utils.js');

test('colorDistance calculates euclidean distance between rgb values', () => {
  assert.equal(Math.round(colorDistance({ r: 10, g: 20, b: 30 }, { r: 14, g: 22, b: 32 }) * 100) / 100, 4.9);
});

test('isColorClose matches similar colors within tolerance', () => {
  assert.equal(isColorClose({ r: 10, g: 20, b: 30 }, { r: 14, g: 22, b: 32 }, 6), true);
});

test('isColorClose rejects colors outside the tolerance', () => {
  assert.equal(isColorClose({ r: 10, g: 20, b: 30 }, { r: 50, g: 60, b: 70 }, 6), false);
});
