/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { TimedoutPost } from '../blog/timedoutPost'
import { SentPost } from '../blog/sentPost'
import { Post } from '../blog/post'

export const protobufPackage = 'akure.planet.blog'

/** GenesisState defines the blog module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  timedoutPostList: TimedoutPost[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  timedoutPostCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  sentPostList: SentPost[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  sentPostCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  postList: Post[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  postCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  portId: string
}

const baseGenesisState: object = { timedoutPostCount: 0, sentPostCount: 0, postCount: 0, portId: '' }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.timedoutPostList) {
      TimedoutPost.encode(v!, writer.uint32(50).fork()).ldelim()
    }
    if (message.timedoutPostCount !== 0) {
      writer.uint32(56).uint64(message.timedoutPostCount)
    }
    for (const v of message.sentPostList) {
      SentPost.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    if (message.sentPostCount !== 0) {
      writer.uint32(40).uint64(message.sentPostCount)
    }
    for (const v of message.postList) {
      Post.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.postCount !== 0) {
      writer.uint32(24).uint64(message.postCount)
    }
    if (message.portId !== '') {
      writer.uint32(10).string(message.portId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.timedoutPostList = []
    message.sentPostList = []
    message.postList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 6:
          message.timedoutPostList.push(TimedoutPost.decode(reader, reader.uint32()))
          break
        case 7:
          message.timedoutPostCount = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.sentPostList.push(SentPost.decode(reader, reader.uint32()))
          break
        case 5:
          message.sentPostCount = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.postList.push(Post.decode(reader, reader.uint32()))
          break
        case 3:
          message.postCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.portId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.timedoutPostList = []
    message.sentPostList = []
    message.postList = []
    if (object.timedoutPostList !== undefined && object.timedoutPostList !== null) {
      for (const e of object.timedoutPostList) {
        message.timedoutPostList.push(TimedoutPost.fromJSON(e))
      }
    }
    if (object.timedoutPostCount !== undefined && object.timedoutPostCount !== null) {
      message.timedoutPostCount = Number(object.timedoutPostCount)
    } else {
      message.timedoutPostCount = 0
    }
    if (object.sentPostList !== undefined && object.sentPostList !== null) {
      for (const e of object.sentPostList) {
        message.sentPostList.push(SentPost.fromJSON(e))
      }
    }
    if (object.sentPostCount !== undefined && object.sentPostCount !== null) {
      message.sentPostCount = Number(object.sentPostCount)
    } else {
      message.sentPostCount = 0
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromJSON(e))
      }
    }
    if (object.postCount !== undefined && object.postCount !== null) {
      message.postCount = Number(object.postCount)
    } else {
      message.postCount = 0
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId)
    } else {
      message.portId = ''
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.timedoutPostList) {
      obj.timedoutPostList = message.timedoutPostList.map((e) => (e ? TimedoutPost.toJSON(e) : undefined))
    } else {
      obj.timedoutPostList = []
    }
    message.timedoutPostCount !== undefined && (obj.timedoutPostCount = message.timedoutPostCount)
    if (message.sentPostList) {
      obj.sentPostList = message.sentPostList.map((e) => (e ? SentPost.toJSON(e) : undefined))
    } else {
      obj.sentPostList = []
    }
    message.sentPostCount !== undefined && (obj.sentPostCount = message.sentPostCount)
    if (message.postList) {
      obj.postList = message.postList.map((e) => (e ? Post.toJSON(e) : undefined))
    } else {
      obj.postList = []
    }
    message.postCount !== undefined && (obj.postCount = message.postCount)
    message.portId !== undefined && (obj.portId = message.portId)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.timedoutPostList = []
    message.sentPostList = []
    message.postList = []
    if (object.timedoutPostList !== undefined && object.timedoutPostList !== null) {
      for (const e of object.timedoutPostList) {
        message.timedoutPostList.push(TimedoutPost.fromPartial(e))
      }
    }
    if (object.timedoutPostCount !== undefined && object.timedoutPostCount !== null) {
      message.timedoutPostCount = object.timedoutPostCount
    } else {
      message.timedoutPostCount = 0
    }
    if (object.sentPostList !== undefined && object.sentPostList !== null) {
      for (const e of object.sentPostList) {
        message.sentPostList.push(SentPost.fromPartial(e))
      }
    }
    if (object.sentPostCount !== undefined && object.sentPostCount !== null) {
      message.sentPostCount = object.sentPostCount
    } else {
      message.sentPostCount = 0
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromPartial(e))
      }
    }
    if (object.postCount !== undefined && object.postCount !== null) {
      message.postCount = object.postCount
    } else {
      message.postCount = 0
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId
    } else {
      message.portId = ''
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
