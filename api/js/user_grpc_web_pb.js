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
proto.dawn = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dawn.UsersClient =
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
proto.dawn.UsersPromiseClient =
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
 *   !proto.dawn.User,
 *   !proto.dawn.User>}
 */
const methodInfo_Users_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.User,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.User.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Users/Add',
      request,
      metadata || {},
      methodInfo_Users_Add,
      callback);
};


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.User>}
 *     A native promise that resolves to the response
 */
proto.dawn.UsersPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Users/Add',
      request,
      metadata || {},
      methodInfo_Users_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.User,
 *   !proto.dawn.User>}
 */
const methodInfo_Users_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.User,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.User.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Users/Get',
      request,
      metadata || {},
      methodInfo_Users_Get,
      callback);
};


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.User>}
 *     A native promise that resolves to the response
 */
proto.dawn.UsersPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Users/Get',
      request,
      metadata || {},
      methodInfo_Users_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.User,
 *   !proto.dawn.User>}
 */
const methodInfo_Users_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.User,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.User.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Users/Update',
      request,
      metadata || {},
      methodInfo_Users_Update,
      callback);
};


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.User>}
 *     A native promise that resolves to the response
 */
proto.dawn.UsersPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Users/Update',
      request,
      metadata || {},
      methodInfo_Users_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.User,
 *   !proto.dawn.User>}
 */
const methodInfo_Users_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.User,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.User.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.User>}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Users/List',
      request,
      metadata || {},
      methodInfo_Users_List);
};


/**
 * @param {!proto.dawn.User} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.User>}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Users/List',
      request,
      metadata || {},
      methodInfo_Users_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.User,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Users_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Users/Delete',
      request,
      metadata || {},
      methodInfo_Users_Delete,
      callback);
};


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.dawn.UsersPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Users/Delete',
      request,
      metadata || {},
      methodInfo_Users_Delete);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.User,
 *   !proto.dawn.User>}
 */
const methodInfo_Users_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.User,
  /** @param {!proto.dawn.User} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.User.deserializeBinary
);


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.UsersClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Users/Login',
      request,
      metadata || {},
      methodInfo_Users_Login,
      callback);
};


/**
 * @param {!proto.dawn.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.User>}
 *     A native promise that resolves to the response
 */
proto.dawn.UsersPromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Users/Login',
      request,
      metadata || {},
      methodInfo_Users_Login);
};


module.exports = proto.dawn;

