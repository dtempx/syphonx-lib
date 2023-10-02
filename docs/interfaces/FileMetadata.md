[syphonx-lib](../README.md) / [Exports](../modules.md) / FileMetadata

# Interface: FileMetadata

## Table of contents

### Properties

- [contract](FileMetadata.md#contract)
- [createdAt](FileMetadata.md#createdat)
- [hash](FileMetadata.md#hash)
- [modifiedAt](FileMetadata.md#modifiedat)
- [name](FileMetadata.md#name)

## Properties

### contract

• `Optional` **contract**: `string`

The storage name of the contract associated with a template.

#### Defined in

[api.ts:38](https://github.com/dtempx/syphonx-lib/blob/ca85ca5/api.ts#L38)

___

### createdAt

• **createdAt**: `Date`

Date contract was created.

#### Defined in

[api.ts:40](https://github.com/dtempx/syphonx-lib/blob/ca85ca5/api.ts#L40)

___

### hash

• **hash**: `string`

An MD5 hash of the contract file contents. Used to determine whether the contract has changed since last read.

#### Defined in

[api.ts:36](https://github.com/dtempx/syphonx-lib/blob/ca85ca5/api.ts#L36)

___

### modifiedAt

• **modifiedAt**: `Date`

Date contract was last modified.

#### Defined in

[api.ts:42](https://github.com/dtempx/syphonx-lib/blob/ca85ca5/api.ts#L42)

___

### name

• **name**: `string`

The storage name of the contract.

#### Defined in

[api.ts:34](https://github.com/dtempx/syphonx-lib/blob/ca85ca5/api.ts#L34)
