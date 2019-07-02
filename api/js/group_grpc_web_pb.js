/**
 * @fileoverview gRPC-Web generated client stub for dawn
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.dawn = require('./group_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dawn.GroupsClient =
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
proto.dawn.GroupsPromiseClient =
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
 *   !proto.dawn.Group,
 *   !proto.dawn.Group>}
 */
const methodInfo_Groups_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Group,
  /** @param {!proto.dawn.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Group.deserializeBinary
);


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.GroupsClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Groups/Add',
      request,
      metadata || {},
      methodInfo_Groups_Add,
      callback);
};


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Group>}
 *     A native promise that resolves to the response
 */
proto.dawn.GroupsPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Groups/Add',
      request,
      metadata || {},
      methodInfo_Groups_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Group,
 *   !proto.dawn.Group>}
 */
const methodInfo_Groups_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Group,
  /** @param {!proto.dawn.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Group.deserializeBinary
);


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.GroupsClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Groups/Get',
      request,
      metadata || {},
      methodInfo_Groups_Get,
      callback);
};


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Group>}
 *     A native promise that resolves to the response
 */
proto.dawn.GroupsPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Groups/Get',
      request,
      metadata || {},
      methodInfo_Groups_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Group,
 *   !proto.dawn.Group>}
 */
const methodInfo_Groups_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Group,
  /** @param {!proto.dawn.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Group.deserializeBinary
);


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Group)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Group>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.GroupsClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Groups/Update',
      request,
      metadata || {},
      methodInfo_Groups_Update,
      callback);
};


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Group>}
 *     A native promise that resolves to the response
 */
proto.dawn.GroupsPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Groups/Update',
      request,
      metadata || {},
      methodInfo_Groups_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.dawn.Group>}
 */
const methodInfo_Groups_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Group,
  /** @param {!proto.google.protobuf.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Group.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Group>}
 *     The XHR Node Readable Stream
 */
proto.dawn.GroupsClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Groups/List',
      request,
      metadata || {},
      methodInfo_Groups_List);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Group>}
 *     The XHR Node Readable Stream
 */
proto.dawn.GroupsPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Groups/List',
      request,
      metadata || {},
      methodInfo_Groups_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Group,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Groups_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.dawn.Group} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.GroupsClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Groups/Delete',
      request,
      metadata || {},
      methodInfo_Groups_Delete,
      callback);
};


/**
 * @param {!proto.dawn.Group} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.dawn.GroupsPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Groups/Delete',
      request,
      metadata || {},
      methodInfo_Groups_Delete);
};


module.exports = proto.dawn;

