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

[api.ts:128](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L128)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[api.ts:116](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L116)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

#### Defined in

[api.ts:117](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L117)

___

### url

• **url**: `string`

#### Defined in

[api.ts:118](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L118)

___

### user

• `Optional` **user**: `string`

#### Defined in

[api.ts:119](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L119)

## Methods

### auth

▸ **auth**(): `Promise`<[`Auth`](../interfaces/Auth.md)\>

Returns information about what the API key is authorized to do.

#### Returns

`Promise`<[`Auth`](../interfaces/Auth.md)\>

A Promise resolving to the Auth object.

#### Defined in

[api.ts:143](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L143)

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

[api.ts:156](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L156)

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

[api.ts:167](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L167)

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

[api.ts:180](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L180)

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

[api.ts:202](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L202)

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

[api.ts:234](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L234)

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

[api.ts:251](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L251)

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

[api.ts:272](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L272)

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

[api.ts:366](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L366)

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

[api.ts:384](https://github.com/dtempx/syphonx-lib/blob/e986e76/api.ts#L384)
