/**
 * @fileoverview gRPC-Web generated client stub for dawn
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var user_pb = require('./user_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.dawn = require('./message_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dawn.MessagesClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dawn.MessagesPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Message,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Messages_Send = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.dawn.Message} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.dawn.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.MessagesClient.prototype.send =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Messages/Send',
      request,
      metadata || {},
      methodInfo_Messages_Send,
      callback);
};


/**
 * @param {!proto.dawn.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.dawn.MessagesPromiseClient.prototype.send =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Messages/Send',
      request,
      metadata || {},
      methodInfo_Messages_Send);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.User,
 *   !proto.dawn.Message>}
 */
const methodInfo_Messages_Receive = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Message,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Message.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Message>}
 *     The XHR Node Readable Stream
 */
proto.dawn.MessagesClient.prototype.receive =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Messages/Receive',
      request,
      metadata || {},
      methodInfo_Messages_Receive);
};


/**
 * @param {!proto.dawn.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Message>}
 *     The XHR Node Readable Stream
 */
proto.dawn.MessagesPromiseClient.prototype.receive =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Messages/Receive',
      request,
      metadata || {},
      methodInfo_Messages_Receive);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Topic,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Messages_Publish = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.dawn.Topic} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.dawn.Topic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.MessagesClient.prototype.publish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Messages/Publish',
      request,
      metadata || {},
      methodInfo_Messages_Publish,
      callback);
};


/**
 * @param {!proto.dawn.Topic} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.dawn.MessagesPromiseClient.prototype.publish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Messages/Publish',
      request,
      metadata || {},
      methodInfo_Messages_Publish);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Topic,
 *   !proto.dawn.Topic>}
 */
const methodInfo_Messages_Subscribe = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Topic,
  /** @param {!proto.dawn.Topic} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Topic.deserializeBinary
);


/**
 * @param {!proto.dawn.Topic} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Topic>}
 *     The XHR Node Readable Stream
 */
proto.dawn.MessagesClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Messages/Subscribe',
      request,
      metadata || {},
      methodInfo_Messages_Subscribe);
};


/**
 * @param {!proto.dawn.Topic} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Topic>}
 *     The XHR Node Readable Stream
 */
proto.dawn.MessagesPromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Messages/Subscribe',
      request,
      metadata || {},
      methodInfo_Messages_Subscribe);
};


module.exports = proto.dawn;

