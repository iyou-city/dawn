import * as jspb from "google-protobuf"

import * as user_pb from './user_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Message extends jspb.Message {
  id: string;
  content: string;
  imagesList: Array<string>;
  clearimagesList(): void;
  addImages(value: string, index?: number): void;
  videosList: Array<string>;
  clearvideosList(): void;
  addVideos(value: string, index?: number): void;
  to: string;
  from: string;
  labelsMap: jspb.Map<string, string>;
  clearlabelsMap(): void;
  created: google_protobuf_timestamp_pb.Timestamp | undefined;
  hascreated(): boolean;
  clearcreated(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string,
    content: string,
    imagesList: Array<string>,
    videosList: Array<string>,
    to: string,
    from: string,
    labelsMap: Array<[string, string]>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Topic extends jspb.Message {
  groupId: string;
  message: Message | undefined;
  hasmessage(): boolean;
  clearmessage(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topic.AsObject;
  static toObject(includeInstance: boolean, msg: Topic): Topic.AsObject;
  static serializeBinaryToWriter(message: Topic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topic;
  static deserializeBinaryFromReader(message: Topic, reader: jspb.BinaryReader): Topic;
}

export namespace Topic {
  export type AsObject = {
    groupid: string,
    message?: Message.AsObject,
  }
}

