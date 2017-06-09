flow-stop-error
===========
Useful JS module for simplifying promise code flow

## Example

lets say we have a flow of methods that work in sequence -A, B, C, D, E etc...
but, if B returns false, we would like to skip C.
instead of nesting promises, we can keep the nesting level to 1 with throwing FlowStopErrors
the errors are instatiated per option, keeping memory signature to a minumum.

```js
var workDone = {}
var FlowStopError = require('flow-stop-error')
return MethodA().then(res => {
    workDone.a = res
    return MethodB(workDone)
  }).then(res => {
    workDone.b = res
    if (res === false) FlowStopError.throw('time for D')
    // this will be skipped!
    return MethodC(workDone)
  }).then(res => {
    workDone.c = res
    FlowStopError.throw('time for D')
  }).catch(err => {
    if (FlowStopError.is(err) && err.option === 'time for D'){
      return methodD(workDone)
    }
  }).then ... 
```

## license
Mozilla Public License Version 2.0

Copyright © 2017 Rebelz LTD