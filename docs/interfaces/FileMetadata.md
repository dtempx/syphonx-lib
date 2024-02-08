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

[api.ts:39](https://github.com/dtempx/syphonx-lib/blob/5494802/api.ts#L39)

___

### createdAt

• **createdAt**: `Date`

Date contract was created.

#### Defined in

[api.ts:41](https://github.com/dtempx/syphonx-lib/blob/5494802/api.ts#L41)

___

### hash

• **hash**: `string`

An MD5 hash of the contract file contents. Used to determine whether the contract has changed since last read.

#### Defined in

[api.ts:37](https://github.com/dtempx/syphonx-lib/blob/5494802/api.ts#L37)

___

### modifiedAt

• **modifiedAt**: `Date`

Date contract was last modified.

#### Defined in

[api.ts:43](https://github.com/dtempx/syphonx-lib/blob/5494802/api.ts#L43)

___

### name

• **name**: `string`

The storage name of the contract.

#### Defined in

[api.ts:35](https://github.com/dtempx/syphonx-lib/blob/5494802/api.ts#L35)
