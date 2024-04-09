[syphonx-lib](../README.md) / [Exports](../modules.md) / FileMetadata

# Interface: FileMetadata

## Table of contents

### Properties

- [contract](FileMetadata.md#contract)
- [createdAt](FileMetadata.md#createdat)
- [createdBy](FileMetadata.md#createdby)
- [hash](FileMetadata.md#hash)
- [key](FileMetadata.md#key)
- [modifiedAt](FileMetadata.md#modifiedat)
- [modifiedBy](FileMetadata.md#modifiedby)
- [name](FileMetadata.md#name)

## Properties

### contract

• `Optional` **contract**: `string`

The storage name of the contract associated with a template.

#### Defined in

[api.ts:41](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L41)

___

### createdAt

• **createdAt**: `Date`

Date file was created.

#### Defined in

[api.ts:43](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L43)

___

### createdBy

• `Optional` **createdBy**: `string`

Identifies user who created the file.

#### Defined in

[api.ts:45](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L45)

___

### hash

• **hash**: `string`

An MD5 hash of the file contents. Used to determine whether the file has changed since last read.

#### Defined in

[api.ts:39](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L39)

___

### key

• `Optional` **key**: `string`

A unique identifier for the revision.

#### Defined in

[api.ts:35](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L35)

___

### modifiedAt

• **modifiedAt**: `Date`

Date file was last modified.

#### Defined in

[api.ts:47](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L47)

___

### modifiedBy

• `Optional` **modifiedBy**: `string`

Identifies user who modified the file.

#### Defined in

[api.ts:49](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L49)

___

### name

• **name**: `string`

The storage name of the file.

#### Defined in

[api.ts:37](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L37)
