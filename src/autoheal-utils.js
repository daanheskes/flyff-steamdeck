'use strict';

function colorDistance(a, b) {
  return Math.sqrt(
    Math.pow((a.r ?? 0) - (b.r ?? 0), 2) +
    Math.pow((a.g ?? 0) - (b.g ?? 0), 2) +
    Math.pow((a.b ?? 0) - (b.b ?? 0), 2)
  );
}

function isColorClose(a, b, tolerance = 12) {
  return colorDistance(a, b) <= tolerance;
}

module.exports = {
  colorDistance,
  isColorClose
};
