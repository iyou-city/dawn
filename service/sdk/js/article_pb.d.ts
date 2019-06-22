import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Article extends jspb.Message {
  id: string;
  title: string;
  content: string;
  imagesList: Array<string>;
  clearimagesList(): void;
  addImages(value: string, index?: number): void;
  videosList: Array<string>;
  clearvideosList(): void;
  addVideos(value: string, index?: number): void;
  owner: string;
  location: Location | undefined;
  haslocation(): boolean;
  clearlocation(): void;
  accessesList: Array<number>;
  clearaccessesList(): void;
  addAccesses(value: number, index?: number): void;
  labelsMap: jspb.Map<string, string>;
  clearlabelsMap(): void;
  created: google_protobuf_timestamp_pb.Timestamp | undefined;
  hascreated(): boolean;
  clearcreated(): void;
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
  latitude: number;
  longitude: number;
  name: string;
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

