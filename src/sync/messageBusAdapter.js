var MessageBus = require('bussi');

module.exports = {
    sendChanges: function(uri, changes) {
        MessageBus.channel('data').publish('update' + uri, changes);
    },
    subscribeChanges: function(uri, callback) {
        return MessageBus.channel('data').subscribe('update' + uri, function(envelope) {
            var clone = JSON.parse(JSON.stringify(envelope.payload));
            callback(uri, clone);
        });
    }
};
