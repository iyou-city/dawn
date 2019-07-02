import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {Article} from './article_pb';

export class ArticlesClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Article,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Article) => void
  ): grpcWeb.ClientReadableStream<Article>;

  get(
    request: Article,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Article) => void
  ): grpcWeb.ClientReadableStream<Article>;

  update(
    request: Article,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: Article) => void
  ): grpcWeb.ClientReadableStream<Article>;

  listByUser(
    request: Article,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Article>;

  delete(
    request: Article,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

}

export class ArticlesPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: Article,
    metadata?: grpcWeb.Metadata
  ): Promise<Article>;

  get(
    request: Article,
    metadata?: grpcWeb.Metadata
  ): Promise<Article>;

  update(
    request: Article,
    metadata?: grpcWeb.Metadata
  ): Promise<Article>;

  listByUser(
    request: Article,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Article>;

  delete(
    request: Article,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

}

