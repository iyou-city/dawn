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
proto.dawn = require('./book_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dawn.BooksClient =
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
proto.dawn.BooksPromiseClient =
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
 *   !proto.dawn.Book,
 *   !proto.dawn.Book>}
 */
const methodInfo_Books_Add = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Book,
  /** @param {!proto.dawn.Book} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Book.deserializeBinary
);


/**
 * @param {!proto.dawn.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dawn.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.BooksClient.prototype.add =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Books/Add',
      request,
      metadata || {},
      methodInfo_Books_Add,
      callback);
};


/**
 * @param {!proto.dawn.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dawn.Book>}
 *     A native promise that resolves to the response
 */
proto.dawn.BooksPromiseClient.prototype.add =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Books/Add',
      request,
      metadata || {},
      methodInfo_Books_Add);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Book,
 *   !proto.dawn.Book>}
 */
const methodInfo_Books_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dawn.Book,
  /** @param {!proto.dawn.Book} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dawn.Book.deserializeBinary
);


/**
 * @param {!proto.dawn.Book} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Book>}
 *     The XHR Node Readable Stream
 */
proto.dawn.BooksClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Books/List',
      request,
      metadata || {},
      methodInfo_Books_List);
};


/**
 * @param {!proto.dawn.Book} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dawn.Book>}
 *     The XHR Node Readable Stream
 */
proto.dawn.BooksPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dawn.Books/List',
      request,
      metadata || {},
      methodInfo_Books_List);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dawn.Book,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_Books_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /** @param {!proto.dawn.Book} request */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.dawn.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dawn.BooksClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dawn.Books/Delete',
      request,
      metadata || {},
      methodInfo_Books_Delete,
      callback);
};


/**
 * @param {!proto.dawn.Book} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     A native promise that resolves to the response
 */
proto.dawn.BooksPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dawn.Books/Delete',
      request,
      metadata || {},
      methodInfo_Books_Delete);
};


module.exports = proto.dawn;

