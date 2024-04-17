[syphonx-lib](../README.md) / [Exports](../modules.md) / FileMetadata

# Interface: FileMetadata

## Table of contents

### Properties

- [contract](FileMetadata.md#contract)
- [createdAt](FileMetadata.md#createdat)
- [createdBy](FileMetadata.md#createdby)
- [hash](FileMetadata.md#hash)
- [modifiedAt](FileMetadata.md#modifiedat)
- [modifiedBy](FileMetadata.md#modifiedby)
- [name](FileMetadata.md#name)
- [revision](FileMetadata.md#revision)
- [size](FileMetadata.md#size)

## Properties

### contract

• `Optional` **contract**: `string`

The storage name of the contract associated with a template.

#### Defined in

[api.ts:42](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L42)

___

### createdAt

• **createdAt**: `Date`

Date file was created.

#### Defined in

[api.ts:44](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L44)

___

### createdBy

• `Optional` **createdBy**: `string`

Identifies user who created the file.

#### Defined in

[api.ts:46](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L46)

___

### hash

• **hash**: `string`

An MD5 hash of the file contents. Used to determine whether the file has changed since last read.

#### Defined in

[api.ts:36](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L36)

___

### modifiedAt

• **modifiedAt**: `Date`

Date file was last modified.

#### Defined in

[api.ts:48](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L48)

___

### modifiedBy

• `Optional` **modifiedBy**: `string`

Identifies user who modified the file.

#### Defined in

[api.ts:50](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L50)

___

### name

• **name**: `string`

The storage name of the file.

#### Defined in

[api.ts:34](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L34)

___

### revision

• **revision**: `string`

A unique identifier for the revision.

#### Defined in

[api.ts:38](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L38)

___

### size

• **size**: `string`

The file size in bytes.

#### Defined in

[api.ts:40](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L40)
