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

[api.ts:85](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L85)

___

### hash

• **hash**: `string`

The hash of the file or folder.

#### Defined in

[api.ts:83](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L83)

___

### name

• **name**: `string`

The name of the file or folder.

#### Defined in

[api.ts:75](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L75)

___

### size

• **size**: `number`

The size of the file or folder in bytes.

#### Defined in

[api.ts:81](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L81)

___

### timestamp

• **timestamp**: `Date`

The last modified timestamp of the file or folder.

#### Defined in

[api.ts:77](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L77)

___

### type

• **type**: ``"file"`` \| ``"folder"``

The type of the object, either a file or a folder.

#### Defined in

[api.ts:79](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L79)
