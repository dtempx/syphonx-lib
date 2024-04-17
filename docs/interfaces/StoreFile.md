[syphonx-lib](../README.md) / [Exports](../modules.md) / StoreFile

# Interface: StoreFile

Represents a file or folder in the store.

## Table of contents

### Properties

- [access](StoreFile.md#access)
- [hash](StoreFile.md#hash)
- [name](StoreFile.md#name)
- [size](StoreFile.md#size)
- [timestamp](StoreFile.md#timestamp)
- [type](StoreFile.md#type)

## Properties

### access

• **access**: ``"write"`` \| ``"read"`` \| ``"delete"``

The access level granted for the file or folder.

#### Defined in

[api.ts:92](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L92)

___

### hash

• **hash**: `string`

The hash of the file or folder.

#### Defined in

[api.ts:90](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L90)

___

### name

• **name**: `string`

The name of the file or folder.

#### Defined in

[api.ts:82](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L82)

___

### size

• **size**: `number`

The size of the file or folder in bytes.

#### Defined in

[api.ts:88](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L88)

___

### timestamp

• **timestamp**: `Date`

The last modified timestamp of the file or folder.

#### Defined in

[api.ts:84](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L84)

___

### type

• **type**: ``"file"`` \| ``"folder"``

The type of the object, either a file or a folder.

#### Defined in

[api.ts:86](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L86)
