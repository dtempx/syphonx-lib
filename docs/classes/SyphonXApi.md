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

[api.ts:117](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L117)

## Properties

### apiKey

• `Optional` **apiKey**: `string`

#### Defined in

[api.ts:105](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L105)

___

### headers

• `Optional` **headers**: `Record`<`string`, `string`\>

#### Defined in

[api.ts:106](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L106)

___

### url

• **url**: `string`

#### Defined in

[api.ts:107](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L107)

___

### user

• `Optional` **user**: `string`

#### Defined in

[api.ts:108](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L108)

## Methods

### auth

▸ **auth**(): `Promise`<[`Auth`](../interfaces/Auth.md)\>

Returns information about what the API key is authorized to do.

#### Returns

`Promise`<[`Auth`](../interfaces/Auth.md)\>

A Promise resolving to the Auth object.

#### Defined in

[api.ts:132](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L132)

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

[api.ts:145](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L145)

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

[api.ts:156](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L156)

___

### directory

▸ **directory**(): `Promise`<[`StoreFile`](../interfaces/StoreFile.md)[]\>

Retrieves the list of accessible files and folders in the store.

#### Returns

`Promise`<[`StoreFile`](../interfaces/StoreFile.md)[]\>

A Promise resolving to an array of accessible store files.

#### Defined in

[api.ts:169](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L169)

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

[api.ts:182](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L182)

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

[api.ts:214](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L214)

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

[api.ts:231](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L231)

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

[api.ts:252](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L252)

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

[api.ts:346](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L346)

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

[api.ts:364](https://github.com/dtempx/syphonx-lib/blob/4fe11ca/api.ts#L364)
