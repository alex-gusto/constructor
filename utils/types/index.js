// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
module.exports.isUndef = function isUndef(v) {
  return v === undefined || v === null
}

module.exports.isDef = function isDef(v) {
  return v !== undefined && v !== null
}

module.exports.isTrue = function isTrue(v) {
  return v === true
}

module.exports.isFalse = function isFalse(v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
module.exports.isPrimitive = function isPrimitive(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}