[syphonx-lib](../README.md) / [Exports](../modules.md) / HostOptions

# Interface: HostOptions

## Table of contents

### Properties

- [debug](HostOptions.md#debug)
- [extractHtml](HostOptions.md#extracthtml)
- [maxYields](HostOptions.md#maxyields)
- [onExtract](HostOptions.md#onextract)
- [onGoback](HostOptions.md#ongoback)
- [onHtml](HostOptions.md#onhtml)
- [onLocator](HostOptions.md#onlocator)
- [onNavigate](HostOptions.md#onnavigate)
- [onReload](HostOptions.md#onreload)
- [onScreenshot](HostOptions.md#onscreenshot)
- [onYield](HostOptions.md#onyield)
- [params](HostOptions.md#params)
- [retries](HostOptions.md#retries)
- [retryDelay](HostOptions.md#retrydelay)
- [template](HostOptions.md#template)
- [unwrap](HostOptions.md#unwrap)
- [url](HostOptions.md#url)

## Properties

### debug

• `Optional` **debug**: `boolean`

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:11

___

### extractHtml

• `Optional` **extractHtml**: `boolean`

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:12

___

### maxYields

• `Optional` **maxYields**: `number`

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

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:17

___

### onHtml

• `Optional` **onHtml**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

##### Returns

`Promise`<`string`\>

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

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:32

___

### params

• `Optional` **params**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:9

___

### retries

• `Optional` **retries**: `number`

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:14

___

### retryDelay

• `Optional` **retryDelay**: `number`[]

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:15

___

### template

• **template**: [`Template`](Template.md)

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:7

___

### unwrap

• `Optional` **unwrap**: `boolean`

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:10

___

### url

• `Optional` **url**: `string`

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:8
