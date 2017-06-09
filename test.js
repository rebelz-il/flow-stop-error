var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
var FlowStopError = require('.')
var describe = require('mocha').describe
var it = require('mocha').it
var expect = chai.expect

describe('FlowStopError', function () {
  describe('throw', function () {
    it('should throw a general FlowStopError', function () {
      try {
        FlowStopError.throw
      } catch (err) {
        expect(err).to.have.property('flowOption')
      }
    })
  })
  describe('throw(optionName)', function () {
    it('should throw a specifc FlowStopError', function () {
      try {
        FlowStopError.throw('abraKadabra')
      } catch (err) {
        expect(err.flowOption).to.equal('abraKadabra')
      }
    })
  })
  describe('is(FlowStopError)', function () {
    it('should distinguish a FlowStopError', function () {
      try {
        FlowStopError.throw()
      } catch (err) {
        expect(FlowStopError.is(err)).to.equal(true)
      }
    })
  })
  describe('is(other error)', function () {
    it('should distinguish a none-FlowStopError', function () {
      try {
        throw new Error()
      } catch (err) {
        expect(FlowStopError.is(err)).to.equal(false)
      }
    })
  })
})
