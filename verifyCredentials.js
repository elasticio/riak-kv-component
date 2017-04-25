'use strict';
const Riak = require('basho-riak-client');

module.exports = function verifyCredentials(credentials) {
    console.log('Credentials passed for verification %j', credentials);
    const nodes = credentials.nodes.split(',');
    return new Promise((ok, nok) => {
        new Riak.Client(nodes, function (err, client) {
            if (err) {
                console.error('Connection failed');
                return nok(err);
            }
            console.log('Connection established');
            client.ping(function (err, result) {
                if (err) {
                    console.error('Ping failed');
                    return nok(err);
                } else {
                    console.log('Ping successful result=%j', result);
                    ok(result);
                }
            });
        });
    });
};
