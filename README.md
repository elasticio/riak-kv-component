# riak-kv-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Integration component that communicates with Riak Key-Value Store

# riak-kv-component
Riak KV component for the [elastic.io platform](http://www.elastic.io &#34;elastic.io platform&#34;)

If you plan to **deploy it into [elastic.io platform](http://www.elastic.io &#34;elastic.io platform&#34;) you must follow sets of instructions to succseed**. 

## Before you Begin

Before you can deploy any code into elastic.io **you must be a registered elastic.io platform user**. Please see our home page at [http://www.elastic.io](http://www.elastic.io) to learn how. 

We&#39;ll use git and SSH public key authentication to upload your component code, therefore you must **[upload your SSH Key](http://docs.elastic.io/docs/ssh-key)**. 

&gt; If you fail to upload you SSH Key you will get **permission denied** error during the deployment.

## Authentication

Connection to Riak cluster is established based on the comma-separated list of nodes

``server-one:1234,server-two:1234,server-three:1234``

## Actions

### Create Object

This action will create a new object in Riak. You would need to specify bucket
where you would like to store your object. This action uses no mapper so
you would need to prepare the data as following.

```json
{
    "body": {
        ...
    }
}
```

In this case ``body`` will be stored in Riak and key will be auto-generated.
If ``message`` looks like this:
```json
{
    "body": {
        "key": "value",
        ...
    }
}
```

Then ``key`` out of ``body`` will be used as key and full body will be stored in Riak.
If you message looks like this:

```json
{
    "body": {
        "key": "value",
        "value": {
        ...
        }
    }
}
```
Then ``key`` and ``value`` will be used as expected :)

## Known issues

No known issues are there yet.


## License

Apache-2.0 © [elastic.io GmbH](https://www.elastic.io)


[npm-image]: https://badge.fury.io/js/riak-kv-component.svg
[npm-url]: https://npmjs.org/package/riak-kv-component
[travis-image]: https://travis-ci.org/elasticio/riak-kv-component.svg?branch=master
[travis-url]: https://travis-ci.org/elasticio/riak-kv-component
[daviddm-image]: https://david-dm.org/elasticio/riak-kv-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/elasticio/riak-kv-component
