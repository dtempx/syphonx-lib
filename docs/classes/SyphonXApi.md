[syphonx-lib](../README.md) / [Exports](../modules.md) / SyphonXApi

# Class: SyphonXApi

Provides access for reading and writing templates and contracts in the SyphonX cloud store,
as well as access to additional SyphonX features available on the cloud.

## Table of contents

### Constructors

- [constructor](SyphonXApi.md#constructor)

### Properties

- [apiKey](SyphonXApi.md#apikey)
- [headers](SyphonXApi.md#headers)
- [url](SyphonXApi.md#url)
- [user](SyphonXApi.md#user)

### Methods

- [auth](SyphonXApi.md#auth)
- [autoselect](SyphonXApi.md#autoselect)
- [delete](SyphonXApi.md#delete)
- [directory](SyphonXApi.md#directory)
- [loadTemplate](SyphonXApi.md#loadtemplate)
- [log](SyphonXApi.md#log)
- [read](SyphonXApi.md#read)
- [revisions](SyphonXApi.md#revisions)
- [rollback](SyphonXApi.md#rollback)
- [run](SyphonXApi.md#run)
- [template](SyphonXApi.md#template)
- [write](SyphonXApi.md#write)

## Constructors

### constructor

• **new SyphonXApi**(`apiKey?`, `url?`, `user?`)

Constructs a new instance of the SyphonX API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | The API key to authenticate with the SyphonX API. |
| `url?` | `string` | The base URL of the SyphonX API. Defaults to the `defaultUrl`. |
| `user?` | `string` | The email address of the user interacting with the SyphonX API. |

#### Defined in

[api.ts:134](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L134)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[api.ts:122](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L122)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

#### Defined in

[api.ts:123](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L123)

___

### url

• **url**: `string`

#### Defined in

[api.ts:124](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L124)

___

### user

• `Optional` **user**: `string`

#### Defined in

[api.ts:125](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L125)

## Methods

### auth

▸ **auth**(): `Promise`<[`Auth`](../interfaces/Auth.md)\>

Returns information about what the API key is authorized to do.

#### Returns

`Promise`<[`Auth`](../interfaces/Auth.md)\>

A Promise resolving to the Auth object.

#### Defined in

[api.ts:149](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L149)

___

### autoselect

▸ **autoselect**(`html`, `context?`): `Promise`<`string`\>

Generates a selector given the HTML and context.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `html` | `string` | `undefined` | The HTML string to process. |
| `context` | `string` | `""` | The context for the autoselection. |

#### Returns

`Promise`<`string`\>

A Promise resolving to the selected selector.

#### Defined in

[api.ts:162](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L162)

___

### delete

▸ **delete**(`name`): `Promise`<`void`\>

Deletes a file from the cloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The storage path of the file to delete. |

#### Returns

`Promise`<`void`\>

#### Defined in

[api.ts:173](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L173)

___

### directory

▸ **directory**(`«destructured»?`): `Promise`<[`StoreFile`](../interfaces/StoreFile.md)[]\>

Retrieves the list of accessible files and folders in the store.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DirectoryOptions`](../interfaces/DirectoryOptions.md) |

#### Returns

`Promise`<[`StoreFile`](../interfaces/StoreFile.md)[]\>

A Promise resolving to an array of accessible store files.

#### Defined in

[api.ts:186](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L186)

___

### loadTemplate

▸ **loadTemplate**(`name`): `Promise`<[`LoadTemplateResult`](../interfaces/LoadTemplateResult.md)\>

Retrieves a template and its associated contract from the cloud.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The storage path of the template to retrieve. |

#### Returns

`Promise`<[`LoadTemplateResult`](../interfaces/LoadTemplateResult.md)\>

A Promise resolving to a TemplateFileInfo object.

#### Defined in

[api.ts:208](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L208)

___

### log

▸ **log**(`data`): `Promise`<`boolean`\>

Logs data to the SyphonX API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`LogData`](../interfaces/LogData.md) | The LogData object to be logged. |

#### Returns

`Promise`<`boolean`\>

A Promise resolving to a boolean indicating whether the log was successful.

#### Defined in

[api.ts:240](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L240)

___

### read

▸ **read**(`name`): `Promise`<[`string`, [`FileMetadata`](../interfaces/FileMetadata.md)]\>

Reads the content of a file from cloud storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The storage path of the file to read. |

#### Returns

`Promise`<[`string`, [`FileMetadata`](../interfaces/FileMetadata.md)]\>

A Promise resolving to a tuple with the file content and metadata.

#### Defined in

[api.ts:257](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L257)

___

### revisions

▸ **revisions**(`name`): `Promise`<[`FileMetadata`](../interfaces/FileMetadata.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`FileMetadata`](../interfaces/FileMetadata.md)[]\>

#### Defined in

[api.ts:273](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L273)

___

### rollback

▸ **rollback**(`name`, `key`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `key` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api.ts:281](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L281)

___

### run

▸ **run**(`options`): `Promise`<[`ExtractResult`](../interfaces/ExtractResult.md)\>

Runs in a browser or offline environment extracting data using the specified template. Optionally validates the extracted data against the specified contract.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`RunOptions`](../interfaces/RunOptions.md) | The options for the extraction. |

#### Returns

`Promise`<[`ExtractResult`](../interfaces/ExtractResult.md)\>

The extraction result.

#### Defined in

[api.ts:293](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L293)

___

### template

▸ **template**(`name`): `Promise`<{ `contract?`: `string` ; `template`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<{ `contract?`: `string` ; `template`: `string`  }\>

**`Deprecated`**

Use `loadTemplate` instead.

#### Defined in

[api.ts:387](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L387)

___

### write

▸ **write**(`name`, `content`, `hash?`): `Promise`<`void`\>

Writes content to a file in the store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The storage path of the file to write. |
| `content` | `string` | The content to write to the file. |
| `hash?` | `string` | The hash of the existing file content. Must match to overwrite existing file or an error will result. Leave unspecified for new file creation. |

#### Returns

`Promise`<`void`\>

A Promise resolving when the write operation is complete.

#### Defined in

[api.ts:405](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L405)
