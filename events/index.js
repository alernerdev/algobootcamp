// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
        this.cache = {}
    }
    // Register an event handler
    on(eventName, callback) {
        const callbacks = this.cache[eventName];
        if (callbacks === undefined) {
            this.cache[eventName] = [];
        }
        this.cache[eventName].push(callback);
    }
  
    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        const callbacks = this.cache[eventName];      
        if (callbacks === undefined) {
            return;
        }    
        
        for (let callback of callbacks) {
            callback();
        }
    }
  
    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        const callbacks = this.cache[eventName];      
        if (callbacks === undefined) {
            return;
        }    

        delete this.cache[eventName];
    }
  }
  
  module.exports = Events;