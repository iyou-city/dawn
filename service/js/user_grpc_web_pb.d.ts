import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

import {User} from './user_pb';

export class UsersClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  get(
    request: User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  update(
    request: User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

  list(
    request: User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<User>;

  delete(
    request: User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void
  ): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  login(
    request: User,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: User) => void
  ): grpcWeb.ClientReadableStream<User>;

}

export class UsersPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  add(
    request: User,
    metadata?: grpcWeb.Metadata
  ): Promise<User>;

  get(
    request: User,
    metadata?: grpcWeb.Metadata
  ): Promise<User>;

  update(
    request: User,
    metadata?: grpcWeb.Metadata
  ): Promise<User>;

  list(
    request: User,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<User>;

  delete(
    request: User,
    metadata?: grpcWeb.Metadata
  ): Promise<google_protobuf_empty_pb.Empty>;

  login(
    request: User,
    metadata?: grpcWeb.Metadata
  ): Promise<User>;

}

