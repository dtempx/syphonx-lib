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

• **new SyphonXApi**(`apiKey?`, `url?`)

Constructs a new instance of the SyphonX API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiKey?` | `string` | The API key to authenticate with the SyphonX API. |
| `url?` | `string` | The base URL of the SyphonX API. Defaults to the `defaultUrl`. |

#### Defined in

[api.ts:115](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L115)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[api.ts:105](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L105)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

#### Defined in

[api.ts:106](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L106)

___

### url

• **url**: `string`

#### Defined in

[api.ts:107](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L107)

## Methods

### auth

▸ **auth**(): `Promise`<[`Auth`](../interfaces/Auth.md)\>

Returns information about what the API key is authorized to do.

#### Returns

`Promise`<[`Auth`](../interfaces/Auth.md)\>

A Promise resolving to the Auth object.

#### Defined in

[api.ts:129](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L129)

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

[api.ts:142](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L142)

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

[api.ts:153](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L153)

___

### directory

▸ **directory**(): `Promise`<[`StoreFile`](../interfaces/StoreFile.md)[]\>

Retrieves the list of accessible files and folders in the store.

#### Returns

`Promise`<[`StoreFile`](../interfaces/StoreFile.md)[]\>

A Promise resolving to an array of accessible store files.

#### Defined in

[api.ts:166](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L166)

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

[api.ts:179](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L179)

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

[api.ts:211](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L211)

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

[api.ts:228](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L228)

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

[api.ts:249](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L249)

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

[api.ts:343](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L343)

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

[api.ts:361](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L361)
