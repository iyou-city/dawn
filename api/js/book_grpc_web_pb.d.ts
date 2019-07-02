import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {Book} from './book_pb';

export class BooksClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Book,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Book) => void
  ): grpcWeb.ClientReadableStream<Book>;

  list(
    request: Book,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Book>;

  delete(
    request: Book,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class BooksPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Book,
    metadata?: grpcWeb.Metadata
  ): Promise<Book>;

  list(
    request: Book,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Book>;

  delete(
    request: Book,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

