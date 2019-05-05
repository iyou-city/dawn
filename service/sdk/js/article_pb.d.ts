import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Article extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): void;
  clearImagesList(): void;
  addImages(value: string, index?: number): void;

  getVideosList(): Array<string>;
  setVideosList(value: Array<string>): void;
  clearVideosList(): void;
  addVideos(value: string, index?: number): void;

  getOwner(): string;
  setOwner(value: string): void;

  getLocation(): Location | undefined;
  setLocation(value?: Location): void;
  hasLocation(): boolean;
  clearLocation(): void;

  getAccessesList(): Array<number>;
  setAccessesList(value: Array<number>): void;
  clearAccessesList(): void;
  addAccesses(value: number, index?: number): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Article.AsObject;
  static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
  static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Article;
  static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
  export type AsObject = {
    id: string,
    title: string,
    content: string,
    imagesList: Array<string>,
    videosList: Array<string>,
    owner: string,
    location?: Location.AsObject,
    accessesList: Array<number>,
    labelsMap: Array<[string, string]>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Location extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    latitude: number,
    longitude: number,
    name: string,
  }
}

