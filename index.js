function FlowStopError (flowOption) {
  this.name = 'FlowStopError'
  this.message = 'use this error withing chained promises to stop flow'
  this.stack = 'stack irrelevant'
  Object.defineProperty(this, 'flowOption', {
    value: flowOption,
    writable: false
  })
}

FlowStopError.prototype = Object.create(Error.prototype)
FlowStopError.prototype.constructor = FlowStopError

var allErrors = []
module.exports.throw = function (flowOption = '') {
  if (allErrors[flowOption]) throw allErrors[flowOption]
  var res = allErrors[flowOption] = new FlowStopError(flowOption)
  throw res
}

module.exports.is = function (obj) { return obj instanceof FlowStopError }
