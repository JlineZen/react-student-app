function Observer() {
    this.events = {};
}

Observer.prototype.subscribe = function(name, fn) {
    var eventName = this.events[name] ? this.events[name] : (this.events[name] = []);
    eventName.push(fn);
};

Observer.prototype.unsubscribe = function(name) {
    var fns = this.events[name];
    if (!fns) {
        throw Error('warning: do not subscribe ' + name + ' thing');
    } else {
        delete this.events[name];
    }
};

Observer.prototype.publish = function(name) {
    var fns = this.events[name],
        args = [].slice.call(arguments, 1);
    if (!fns) {
        throw Error('warning: do not subscribe ' + name + ' thing');
    } else {
        fns.forEach(function(fn) {
            fn.apply(this, args);
        });
    }
    
};

var observer = new Observer()

export default observer;