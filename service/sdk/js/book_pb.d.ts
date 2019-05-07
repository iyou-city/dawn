import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Book extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getCover(): Media | undefined;
  setCover(value?: Media): void;
  hasCover(): boolean;
  clearCover(): void;

  getPageList(): Array<Page>;
  setPageList(value: Array<Page>): void;
  clearPageList(): void;
  addPage(value?: Page, index?: number): Page;

  getReader(): string;
  setReader(value: string): void;

  getCount(): string;
  setCount(value: string): void;

  getCategory(): string;
  setCategory(value: string): void;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): void;

  getCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreated(): boolean;
  clearCreated(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    id: string,
    title: string,
    cover?: Media.AsObject,
    pageList: Array<Page.AsObject>,
    reader: string,
    count: string,
    category: string,
    labelsMap: Array<[string, string]>,
    created?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Page extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPicture(): Media | undefined;
  setPicture(value?: Media): void;
  hasPicture(): boolean;
  clearPicture(): void;

  getSound(): Media | undefined;
  setSound(value?: Media): void;
  hasSound(): boolean;
  clearSound(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Page.AsObject;
  static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
  static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Page;
  static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
}

export namespace Page {
  export type AsObject = {
    name: string,
    picture?: Media.AsObject,
    sound?: Media.AsObject,
  }
}

export class Media extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Media.AsObject;
  static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
  static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Media;
  static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
}

export namespace Media {
  export type AsObject = {
    url: string,
  }
}

