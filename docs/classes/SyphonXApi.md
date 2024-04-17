[syphonx-lib](../README.md) / [Exports](../modules.md) / SyphonXApi

# Class: SyphonXApi

Provides access for reading and writing templates and contracts in the SyphonX cloud store,
as well as access to additional SyphonX features available on the cloud.

## Table of contents

### Constructors

- [constructor](SyphonXApi.md#constructor)

### Properties

- [headers](SyphonXApi.md#headers)
- [key](SyphonXApi.md#key)
- [url](SyphonXApi.md#url)

### Methods

- [auth](SyphonXApi.md#auth)
- [autoselect](SyphonXApi.md#autoselect)
- [delete](SyphonXApi.md#delete)
- [directory](SyphonXApi.md#directory)
- [loadTemplate](SyphonXApi.md#loadtemplate)
- [log](SyphonXApi.md#log)
- [read](SyphonXApi.md#read)
- [revisions](SyphonXApi.md#revisions)
- [run](SyphonXApi.md#run)
- [template](SyphonXApi.md#template)
- [write](SyphonXApi.md#write)

## Constructors

### constructor

• **new SyphonXApi**(`key?`, `options?`)

Constructs a new instance of the SyphonX API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key?` | `string` | The API key to authenticate with the SyphonX API. |
| `options?` | [`SyphonXApiOptions`](../interfaces/SyphonXApiOptions.md) | Additional options for the SyphonX API. |

#### Defined in

[api.ts:146](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L146)

## Properties

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

#### Defined in

[api.ts:137](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L137)

___

### key

• `Optional` **key**: `string`

#### Defined in

[api.ts:136](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L136)

___

### url

• **url**: `string`

#### Defined in

[api.ts:138](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L138)

## Methods

### auth

▸ **auth**(): `Promise`<[`Auth`](../interfaces/Auth.md)\>

Returns information about what the API key is authorized to do.

#### Returns

`Promise`<[`Auth`](../interfaces/Auth.md)\>

A Promise resolving to the Auth object.

#### Defined in

[api.ts:169](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L169)

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

[api.ts:182](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L182)

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

[api.ts:193](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L193)

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

[api.ts:206](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L206)

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

[api.ts:228](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L228)

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

[api.ts:254](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L254)

___

### read

▸ **read**(`name`, `revision?`): `Promise`<[`string`, [`FileMetadata`](../interfaces/FileMetadata.md), `string`]\>

Reads the content of a file from cloud storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The storage path of the file to read. |
| `revision?` | `string` | Optional key of the file revision to read, loads the latest revision if not specified. |

#### Returns

`Promise`<[`string`, [`FileMetadata`](../interfaces/FileMetadata.md), `string`]\>

A Promise resolving to a tuple with the file content, metadata, and associated contract.

#### Defined in

[api.ts:272](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L272)

___

### revisions

▸ **revisions**(`name`): `Promise`<[`FileMetadata`](../interfaces/FileMetadata.md)[]\>

Reads the list of revisions of a file from cloud storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The storage path of the file to read. |

#### Returns

`Promise`<[`FileMetadata`](../interfaces/FileMetadata.md)[]\>

A Promise resolving to a list of revisions for the file.

#### Defined in

[api.ts:288](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L288)

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

[api.ts:301](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L301)

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

[api.ts:395](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L395)

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

[api.ts:412](https://github.com/dtempx/syphonx-lib/blob/d8651ed/api.ts#L412)
