
// Evented thing (30 mins)

// Define the "EventedThing" class, so that its instances have
// an "on" and a "trigger" method to react to events. For example:
//
// eventedThingc
//
// eventedThing.trigger('meet', 'Sarah');
// -> 'Hi there!'
// -> 'Nice to meet you, Sarah.'
//
// eventedThing.trigger('whatever');
// -> nothing happens


function EventedThing () {
  this._listen = {};
  var result = {};
  Object.assign(result,EventedThingMethods);
  return result;
}
var EventedThingMethods = {};
EventedThingMethods.trigge = function (meet,name) {
  return
}


module.exports = new EventedThing;
