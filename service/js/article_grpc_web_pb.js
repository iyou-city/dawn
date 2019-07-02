/**
 * @fileoverview gRPC-Web generated client stub for dawn
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.dawn = require('./article_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dawn.ArticlesClient =
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
proto.dawn.ArticlesPromiseClient =
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
 *   !proto.dawn.Article,
 *   !proto.dawn.Article>}
 */
const methodInfo_Articles_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Article,
  /** @param {!proto.dawn.Article} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Article.deserializeBinary
);


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Article)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Article>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.ArticlesClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Articles/Add',
      request,
      metadata || {},
      methodInfo_Articles_Add,
      callback);
};


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Article>}
 *     A native promise that resolves to the response
 */
proto.dawn.ArticlesPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Articles/Add',
      request,
      metadata || {},
      methodInfo_Articles_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Article,
 *   !proto.dawn.Article>}
 */
const methodInfo_Articles_Get = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Article,
  /** @param {!proto.dawn.Article} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Article.deserializeBinary
);


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Article)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Article>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.ArticlesClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Articles/Get',
      request,
      metadata || {},
      methodInfo_Articles_Get,
      callback);
};


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Article>}
 *     A native promise that resolves to the response
 */
proto.dawn.ArticlesPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Articles/Get',
      request,
      metadata || {},
      methodInfo_Articles_Get);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Article,
 *   !proto.dawn.Article>}
 */
const methodInfo_Articles_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Article,
  /** @param {!proto.dawn.Article} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Article.deserializeBinary
);


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Article)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Article>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.ArticlesClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Articles/Update',
      request,
      metadata || {},
      methodInfo_Articles_Update,
      callback);
};


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Article>}
 *     A native promise that resolves to the response
 */
proto.dawn.ArticlesPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Articles/Update',
      request,
      metadata || {},
      methodInfo_Articles_Update);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Article,
 *   !proto.dawn.Article>}
 */
const methodInfo_Articles_ListByUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Article,
  /** @param {!proto.dawn.Article} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Article.deserializeBinary
);


/**
 * @param {!proto.dawn.Article} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Article>}
 *     The XHR Node Readable Stream
 */
proto.dawn.ArticlesClient.prototype.listByUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Articles/ListByUser',
      request,
      metadata || {},
      methodInfo_Articles_ListByUser);
};


/**
 * @param {!proto.dawn.Article} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Article>}
 *     The XHR Node Readable Stream
 */
proto.dawn.ArticlesPromiseClient.prototype.listByUser =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Articles/ListByUser',
      request,
      metadata || {},
      methodInfo_Articles_ListByUser);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Article,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Articles_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.dawn.Article} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.ArticlesClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Articles/Delete',
      request,
      metadata || {},
      methodInfo_Articles_Delete,
      callback);
};


/**
 * @param {!proto.dawn.Article} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.dawn.ArticlesPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Articles/Delete',
      request,
      metadata || {},
      methodInfo_Articles_Delete);
};


module.exports = proto.dawn;

