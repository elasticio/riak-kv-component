/*eslint no-invalid-this: 0 no-console: 0*/
'use strict';
const Riak = require('basho-riak-client');
const eioUtils = require('elasticio-node').messages;

let client;

/**
 * This method will be called from elastic.io platform before the first message will
 * reach the action.
 * If you need to do a asynchronous action here please return Promise
 *
 * @param cfg configuration that is account information and configuration field values
 */
function init(cfg) {
    return new Promise((ok, nok) => {
        console.log('Connecting to riak %j', cfg);
        const nodes = cfg.nodes.split(',');
        client = new Riak.Client(nodes, (err) => {
            if (err) {
                console.error('Connection failed');
                return nok(err);
            }
            console.log('Connection established');
            ok();
        });
    });
}

/**
 * This method will be called from elastic.io platform providing following data
 *
 * @param msg incoming message object that contains ``body`` with payload
 */
function processAction(msg, cfg) {
    const key = msg.body.key;
    const value = msg.body.value;
    const bucket = cfg.bucket;
    return new Promise((ok,nok) => {
        client.storeValue({
            bucket,
            key,
            value
        }, (err, result) => {
            if (err) {
                console.error('Error storing message=%j', msg, err);
                return nok(err);
            }
            ok(eioUtils.newMessageWithBody(result));
        });
    });
}

module.exports.process = processAction;
module.exports.init = init;
