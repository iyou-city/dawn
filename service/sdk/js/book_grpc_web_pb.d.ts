import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {Book} from './book_pb';

export class BooksClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  list(
    request: Book,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Book>;

}

export class BooksPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  list(
    request: Book,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Book>;

}

