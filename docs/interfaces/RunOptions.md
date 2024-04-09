[syphonx-lib](../README.md) / [Exports](../modules.md) / RunOptions

# Interface: RunOptions

## Hierarchy

- `Omit`<[`HostOptions`](HostOptions.md), ``"template"``\>

  ↳ **`RunOptions`**

## Table of contents

### Properties

- [contract](RunOptions.md#contract)
- [debug](RunOptions.md#debug)
- [extractHtml](RunOptions.md#extracthtml)
- [html](RunOptions.md#html)
- [maxYields](RunOptions.md#maxyields)
- [onExtract](RunOptions.md#onextract)
- [onGoback](RunOptions.md#ongoback)
- [onHtml](RunOptions.md#onhtml)
- [onLocator](RunOptions.md#onlocator)
- [onNavigate](RunOptions.md#onnavigate)
- [onReload](RunOptions.md#onreload)
- [onScreenshot](RunOptions.md#onscreenshot)
- [onYield](RunOptions.md#onyield)
- [outside](RunOptions.md#outside)
- [params](RunOptions.md#params)
- [retries](RunOptions.md#retries)
- [retryDelay](RunOptions.md#retrydelay)
- [template](RunOptions.md#template)
- [unwrap](RunOptions.md#unwrap)
- [url](RunOptions.md#url)

## Properties

### contract

• `Optional` **contract**: `Schema`

A contract document to validate extracted data.

#### Defined in

[api.ts:69](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L69)

___

### debug

• `Optional` **debug**: `boolean`

#### Inherited from

Omit.debug

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:11

___

### extractHtml

• `Optional` **extractHtml**: `boolean`

#### Inherited from

Omit.extractHtml

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:12

___

### html

• `Optional` **html**: `string`

HTML content for extracting data offline.

#### Defined in

[api.ts:71](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L71)

___

### maxYields

• `Optional` **maxYields**: `number`

#### Inherited from

Omit.maxYields

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:13

___

### onExtract

• `Optional` **onExtract**: (`state`: [`ExtractState`](ExtractState.md), `script`: `string`) => `Promise`<[`ExtractState`](ExtractState.md)\>

#### Type declaration

▸ (`state`, `script`): `Promise`<[`ExtractState`](ExtractState.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ExtractState`](ExtractState.md) |
| `script` | `string` |

##### Returns

`Promise`<[`ExtractState`](ExtractState.md)\>

#### Inherited from

Omit.onExtract

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:16

___

### onGoback

• `Optional` **onGoback**: (`options`: { `timeout?`: `number` ; `waitUntil?`: [`DocumentLoadState`](../modules.md#documentloadstate)  }) => `Promise`<[`NavigateResult`](NavigateResult.md)\>

#### Type declaration

▸ (`options`): `Promise`<[`NavigateResult`](NavigateResult.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.timeout?` | `number` |
| `options.waitUntil?` | [`DocumentLoadState`](../modules.md#documentloadstate) |

##### Returns

`Promise`<[`NavigateResult`](NavigateResult.md)\>

#### Inherited from

Omit.onGoback

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:17

___

### onHtml

• `Optional` **onHtml**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

#### Inherited from

Omit.onHtml

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:21

___

### onLocator

• `Optional` **onLocator**: (`options`: [`YieldLocator`](YieldLocator.md)) => `Promise`<`unknown`\>

#### Type declaration

▸ (`options`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`YieldLocator`](YieldLocator.md) |

##### Returns

`Promise`<`unknown`\>

#### Inherited from

Omit.onLocator

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:22

___

### onNavigate

• `Optional` **onNavigate**: (`options`: [`YieldNavigate`](YieldNavigate.md) & { `timeout?`: `number` ; `waitUntil?`: [`DocumentLoadState`](../modules.md#documentloadstate)  }) => `Promise`<[`NavigateResult`](NavigateResult.md)\>

#### Type declaration

▸ (`options`): `Promise`<[`NavigateResult`](NavigateResult.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`YieldNavigate`](YieldNavigate.md) & { `timeout?`: `number` ; `waitUntil?`: [`DocumentLoadState`](../modules.md#documentloadstate)  } |

##### Returns

`Promise`<[`NavigateResult`](NavigateResult.md)\>

#### Inherited from

Omit.onNavigate

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:23

___

### onReload

• `Optional` **onReload**: (`options`: { `timeout?`: `number` ; `waitUntil?`: [`DocumentLoadState`](../modules.md#documentloadstate)  }) => `Promise`<[`NavigateResult`](NavigateResult.md)\>

#### Type declaration

▸ (`options`): `Promise`<[`NavigateResult`](NavigateResult.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.timeout?` | `number` |
| `options.waitUntil?` | [`DocumentLoadState`](../modules.md#documentloadstate) |

##### Returns

`Promise`<[`NavigateResult`](NavigateResult.md)\>

#### Inherited from

Omit.onReload

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:27

___

### onScreenshot

• `Optional` **onScreenshot**: (`options`: [`YieldScreenshot`](YieldScreenshot.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`YieldScreenshot`](YieldScreenshot.md) |

##### Returns

`Promise`<`void`\>

#### Inherited from

Omit.onScreenshot

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:31

___

### onYield

• `Optional` **onYield**: (`params`: [`YieldParams`](YieldParams.md)) => `Promise`<`void`\>

#### Type declaration

▸ (`params`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`YieldParams`](YieldParams.md) |

##### Returns

`Promise`<`void`\>

#### Inherited from

Omit.onYield

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:32

___

### outside

• `Optional` **outside**: `boolean`

In an online case, forces the data extraction to be performed outside of the browser by extracting the HTML and processing the template offline.

#### Defined in

[api.ts:73](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L73)

___

### params

• `Optional` **params**: `Record`<`string`, `unknown`\>

#### Inherited from

Omit.params

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:9

___

### retries

• `Optional` **retries**: `number`

#### Inherited from

Omit.retries

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:14

___

### retryDelay

• `Optional` **retryDelay**: `number`[]

#### Inherited from

Omit.retryDelay

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:15

___

### template

• **template**: `string` \| [`Template`](Template.md)

Cloud path to template or a template document.

#### Defined in

[api.ts:67](https://github.com/dtempx/syphonx-lib/blob/ebfa31f/api.ts#L67)

___

### unwrap

• `Optional` **unwrap**: `boolean`

#### Inherited from

Omit.unwrap

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:10

___

### url

• `Optional` **url**: `string`

#### Inherited from

Omit.url

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:8
