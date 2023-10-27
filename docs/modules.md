[syphonx-lib](README.md) / Exports

# syphonx-lib

## Table of contents

### Classes

- [SyphonXApi](classes/SyphonXApi.md)

### Interfaces

- [AttemptOptions](interfaces/AttemptOptions.md)
- [Auth](interfaces/Auth.md)
- [Break](interfaces/Break.md)
- [Click](interfaces/Click.md)
- [Each](interfaces/Each.md)
- [Error](interfaces/Error.md)
- [ExtractError](interfaces/ExtractError.md)
- [ExtractResult](interfaces/ExtractResult.md)
- [ExtractState](interfaces/ExtractState.md)
- [ExtractStatus](interfaces/ExtractStatus.md)
- [FileMetadata](interfaces/FileMetadata.md)
- [GoBack](interfaces/GoBack.md)
- [HostOptions](interfaces/HostOptions.md)
- [LoadTemplateResult](interfaces/LoadTemplateResult.md)
- [Locator](interfaces/Locator.md)
- [LogData](interfaces/LogData.md)
- [Metrics](interfaces/Metrics.md)
- [Navigate](interfaces/Navigate.md)
- [NavigateResult](interfaces/NavigateResult.md)
- [Reload](interfaces/Reload.md)
- [Repeat](interfaces/Repeat.md)
- [RunOptions](interfaces/RunOptions.md)
- [Screenshot](interfaces/Screenshot.md)
- [Scroll](interfaces/Scroll.md)
- [Select](interfaces/Select.md)
- [SelectOptions](interfaces/SelectOptions.md)
- [SelectTarget](interfaces/SelectTarget.md)
- [Snooze](interfaces/Snooze.md)
- [StoreFile](interfaces/StoreFile.md)
- [Switch](interfaces/Switch.md)
- [Template](interfaces/Template.md)
- [Transform](interfaces/Transform.md)
- [TransformOptions](interfaces/TransformOptions.md)
- [WaitFor](interfaces/WaitFor.md)
- [Yield](interfaces/Yield.md)
- [YieldLocator](interfaces/YieldLocator.md)
- [YieldNavigate](interfaces/YieldNavigate.md)
- [YieldParams](interfaces/YieldParams.md)
- [YieldScreenshot](interfaces/YieldScreenshot.md)
- [YieldState](interfaces/YieldState.md)

### Type Aliases

- [Action](modules.md#action)
- [BreakAction](modules.md#breakaction)
- [ClickAction](modules.md#clickaction)
- [DocumentLoadState](modules.md#documentloadstate)
- [EachAction](modules.md#eachaction)
- [ErrorAction](modules.md#erroraction)
- [ExtractErrorCode](modules.md#extracterrorcode)
- [GoBackAction](modules.md#gobackaction)
- [LocatorAction](modules.md#locatoraction)
- [LocatorMethod](modules.md#locatormethod)
- [LogDataType](modules.md#logdatatype)
- [NavigateAction](modules.md#navigateaction)
- [ReloadAction](modules.md#reloadaction)
- [RepeatAction](modules.md#repeataction)
- [ScreenshotAction](modules.md#screenshotaction)
- [ScrollAction](modules.md#scrollaction)
- [ScrollTarget](modules.md#scrolltarget)
- [SelectAction](modules.md#selectaction)
- [SelectFormat](modules.md#selectformat)
- [SelectOn](modules.md#selecton)
- [SelectQuery](modules.md#selectquery)
- [SelectQueryOp](modules.md#selectqueryop)
- [SelectQueryOperand](modules.md#selectqueryoperand)
- [SelectQueryOperator](modules.md#selectqueryoperator)
- [SelectType](modules.md#selecttype)
- [SnoozeAction](modules.md#snoozeaction)
- [SnoozeInterval](modules.md#snoozeinterval)
- [SnoozeMode](modules.md#snoozemode)
- [SwitchAction](modules.md#switchaction)
- [TransformAction](modules.md#transformaction)
- [WaitForAction](modules.md#waitforaction)
- [When](modules.md#when)
- [YieldAction](modules.md#yieldaction)

### Variables

- [script](modules.md#script)

### Functions

- [\_select](modules.md#_select)
- [\_transform](modules.md#_transform)
- [evaluateFormula](modules.md#evaluateformula)
- [extract](modules.md#extract)
- [extractSync](modules.md#extractsync)
- [fetchTemplate](modules.md#fetchtemplate)
- [fetchTemplateSource](modules.md#fetchtemplatesource)
- [flatten](modules.md#flatten)
- [host](modules.md#host)
- [invokeAsyncMethod](modules.md#invokeasyncmethod)
- [parseJQuery](modules.md#parsejquery)
- [parseTemplate](modules.md#parsetemplate)
- [renderJQuery](modules.md#renderjquery)
- [select](modules.md#select)
- [transform](modules.md#transform)
- [unwrap](modules.md#unwrap)
- [validate](modules.md#validate)

## Type Aliases

### Action

Ƭ **Action**: [`BreakAction`](modules.md#breakaction) \| [`ClickAction`](modules.md#clickaction) \| [`EachAction`](modules.md#eachaction) \| [`ErrorAction`](modules.md#erroraction) \| [`GoBackAction`](modules.md#gobackaction) \| [`LocatorAction`](modules.md#locatoraction) \| [`NavigateAction`](modules.md#navigateaction) \| [`ReloadAction`](modules.md#reloadaction) \| [`RepeatAction`](modules.md#repeataction) \| [`ScreenshotAction`](modules.md#screenshotaction) \| [`ScrollAction`](modules.md#scrollaction) \| [`SelectAction`](modules.md#selectaction) \| [`SnoozeAction`](modules.md#snoozeaction) \| [`SwitchAction`](modules.md#switchaction) \| [`TransformAction`](modules.md#transformaction) \| [`WaitForAction`](modules.md#waitforaction) \| [`YieldAction`](modules.md#yieldaction)

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:18

___

### BreakAction

Ƭ **BreakAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `break` | [`Break`](interfaces/Break.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:19

___

### ClickAction

Ƭ **ClickAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `click` | [`Click`](interfaces/Click.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:22

___

### DocumentLoadState

Ƭ **DocumentLoadState**: ``"load"`` \| ``"domcontentloaded"`` \| ``"networkidle"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/DocumentLoadState.d.ts:1

___

### EachAction

Ƭ **EachAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `each` | [`Each`](interfaces/Each.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:25

___

### ErrorAction

Ƭ **ErrorAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](interfaces/Error.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:28

___

### ExtractErrorCode

Ƭ **ExtractErrorCode**: ``"app-error"`` \| ``"click-timeout"`` \| ``"click-required"`` \| ``"error-limit"`` \| ``"eval-error"`` \| ``"external-error"`` \| ``"fatal-error"`` \| ``"host-error"`` \| ``"invalid-select"`` \| ``"invalid-operator"`` \| ``"invalid-operand"`` \| ``"select-required"`` \| ``"waitfor-timeout"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/ExtractErrorCode.d.ts:1

___

### GoBackAction

Ƭ **GoBackAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `goback` | [`GoBack`](interfaces/GoBack.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:31

___

### LocatorAction

Ƭ **LocatorAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `locator` | [`Locator`](interfaces/Locator.md)[] |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:34

___

### LocatorMethod

Ƭ **LocatorMethod**: `string`

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Locator.d.ts:12

___

### LogDataType

Ƭ **LogDataType**: ``"error"``

Identifies the type of informaation to be logged.

#### Defined in

[api.ts:49](https://github.com/dtempx/syphonx-lib/blob/322fff5/api.ts#L49)

___

### NavigateAction

Ƭ **NavigateAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `navigate` | [`Navigate`](interfaces/Navigate.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:37

___

### ReloadAction

Ƭ **ReloadAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reload` | [`Reload`](interfaces/Reload.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:40

___

### RepeatAction

Ƭ **RepeatAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `repeat` | [`Repeat`](interfaces/Repeat.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:43

___

### ScreenshotAction

Ƭ **ScreenshotAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `screenshot` | [`Screenshot`](interfaces/Screenshot.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:46

___

### ScrollAction

Ƭ **ScrollAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `scroll` | [`Scroll`](interfaces/Scroll.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:49

___

### ScrollTarget

Ƭ **ScrollTarget**: ``"top"`` \| ``"bottom"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Scroll.d.ts:12

___

### SelectAction

Ƭ **SelectAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `select` | [`Select`](interfaces/Select.md)[] |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:52

___

### SelectFormat

Ƭ **SelectFormat**: ``"href"`` \| ``"multiline"`` \| ``"singleline"`` \| ``"innertext"`` \| ``"textcontent"`` \| ``"none"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:31

___

### SelectOn

Ƭ **SelectOn**: ``"any"`` \| ``"all"`` \| ``"none"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:32

___

### SelectQuery

Ƭ **SelectQuery**: [`string`, ...SelectQueryOp[]]

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:27

___

### SelectQueryOp

Ƭ **SelectQueryOp**: [`string`, ...unknown[]]

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:28

___

### SelectQueryOperand

Ƭ **SelectQueryOperand**: `unknown`

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:30

___

### SelectQueryOperator

Ƭ **SelectQueryOperator**: `string`

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:29

___

### SelectType

Ƭ **SelectType**: ``"string"`` \| ``"number"`` \| ``"boolean"`` \| ``"object"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Select.d.ts:26

___

### SnoozeAction

Ƭ **SnoozeAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `snooze` | [`Snooze`](interfaces/Snooze.md) \| `number` \| [`number`] \| [`number`, `number`] |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:55

___

### SnoozeInterval

Ƭ **SnoozeInterval**: [`number`, `number`] \| [`number`, `number`, [`SnoozeMode`](modules.md#snoozemode)]

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Snooze.d.ts:3

___

### SnoozeMode

Ƭ **SnoozeMode**: ``"before"`` \| ``"after"`` \| ``"before-and-after"``

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Snooze.d.ts:2

___

### SwitchAction

Ƭ **SwitchAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `switch` | [`Switch`](interfaces/Switch.md)[] |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:58

___

### TransformAction

Ƭ **TransformAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `transform` | [`Transform`](interfaces/Transform.md)[] |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:61

___

### WaitForAction

Ƭ **WaitForAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `waitfor` | [`WaitFor`](interfaces/WaitFor.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:64

___

### When

Ƭ **When**: `string`

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/When.d.ts:1

___

### YieldAction

Ƭ **YieldAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `yield` | [`Yield`](interfaces/Yield.md) |

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/public/Action.d.ts:67

## Variables

### script

• `Const` **script**: ``""``

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:39

## Functions

### \_select

▸ **_select**(`selects`, `options?`): [`ExtractState`](interfaces/ExtractState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `selects` | [`Select`](interfaces/Select.md)[] |
| `options?` | `SelectOptions` |

#### Returns

[`ExtractState`](interfaces/ExtractState.md)

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/select.d.ts:9

___

### \_transform

▸ **_transform**(`transforms`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transforms` | [`Transform`](interfaces/Transform.md)[] |
| `options?` | `TransformOptions` |

#### Returns

`void`

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/transform.d.ts:8

___

### evaluateFormula

▸ **evaluateFormula**(`formula`, `scope?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `formula` | `string` |
| `scope?` | `Record`<`string`, `unknown`\> |

#### Returns

`unknown`

#### Defined in

node_modules/syphonx-core/dist/cjs/lib/formula.d.ts:1

___

### extract

▸ **extract**(`state`): `Promise`<[`ExtractState`](interfaces/ExtractState.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`ExtractState`](interfaces/ExtractState.md) |

#### Returns

`Promise`<[`ExtractState`](interfaces/ExtractState.md)\>

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/extract.d.ts:2

___

### extractSync

▸ **extractSync**(`state`): [`ExtractState`](interfaces/ExtractState.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `Partial`<[`ExtractState`](interfaces/ExtractState.md)\> |

#### Returns

[`ExtractState`](interfaces/ExtractState.md)

#### Defined in

node_modules/syphonx-core/dist/cjs/extract/extract-sync.d.ts:2

___

### fetchTemplate

▸ **fetchTemplate**(`file`): `Promise`<[`Template`](interfaces/Template.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<[`Template`](interfaces/Template.md)\>

**`Deprecated`**

Use SyphonXApi instead.

#### Defined in

[template.ts:12](https://github.com/dtempx/syphonx-lib/blob/322fff5/template.ts#L12)

___

### fetchTemplateSource

▸ **fetchTemplateSource**(`file`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`string`\>

**`Deprecated`**

Use SyphonXApi instead.

#### Defined in

[template.ts:30](https://github.com/dtempx/syphonx-lib/blob/322fff5/template.ts#L30)

___

### flatten

▸ **flatten**(`actions`, `result?`, `level?`, `n?`): `FlatAction`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | [`Action`](modules.md#action)[] |
| `result?` | `FlatAction`[] |
| `level?` | `number` |
| `n?` | `number` |

#### Returns

`FlatAction`[]

#### Defined in

node_modules/syphonx-core/dist/cjs/lib/flatten.d.ts:7

___

### host

▸ **host**(`«destructured»`): `Promise`<[`ExtractResult`](interfaces/ExtractResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`HostOptions`](interfaces/HostOptions.md) |

#### Returns

`Promise`<[`ExtractResult`](interfaces/ExtractResult.md)\>

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:34

___

### invokeAsyncMethod

▸ **invokeAsyncMethod**(`obj`, `method`, `args?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `method` | `string` |
| `args?` | `unknown`[] |

#### Returns

`Promise`<`unknown`\>

#### Defined in

node_modules/syphonx-core/dist/cjs/host.d.ts:35

___

### parseJQuery

▸ **parseJQuery**(`text`): [`SelectQuery`](modules.md#selectquery) \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`SelectQuery`](modules.md#selectquery) \| `undefined`

#### Defined in

[yaml.ts:170](https://github.com/dtempx/syphonx-lib/blob/322fff5/yaml.ts#L170)

___

### parseTemplate

▸ **parseTemplate**(`text`): [`Template`](interfaces/Template.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`Template`](interfaces/Template.md)

#### Defined in

[template.ts:40](https://github.com/dtempx/syphonx-lib/blob/322fff5/template.ts#L40)

___

### renderJQuery

▸ **renderJQuery**(`query`): `string` \| `undefined`

Renders the input query object as a jQuery expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`SelectQuery`](modules.md#selectquery) | The input query object. |

#### Returns

`string` \| `undefined`

A string containing the rendered jQuery expression result.

#### Defined in

[render.ts:8](https://github.com/dtempx/syphonx-lib/blob/322fff5/render.ts#L8)

___

### select

▸ **select**(`selects`, `html`, `options?`): [`ExtractState`](interfaces/ExtractState.md)

Selects data from an HTML document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selects` | [`Select`](interfaces/Select.md)[] |
| `html` | `string` |
| `options` | [`SelectOptions`](interfaces/SelectOptions.md) |

#### Returns

[`ExtractState`](interfaces/ExtractState.md)

The extraction result.

#### Defined in

[select.ts:20](https://github.com/dtempx/syphonx-lib/blob/322fff5/select.ts#L20)

___

### transform

▸ **transform**(`transforms`, `html`, `options?`): `string` \| `undefined`

Applies a set of jQuery transforms to the HTML document.

#### Parameters

| Name | Type |
| :------ | :------ |
| `transforms` | [`Transform`](interfaces/Transform.md)[] |
| `html` | `string` |
| `options` | [`TransformOptions`](interfaces/TransformOptions.md) |

#### Returns

`string` \| `undefined`

The transform result.

#### Defined in

[transform.ts:17](https://github.com/dtempx/syphonx-lib/blob/322fff5/transform.ts#L17)

___

### unwrap

▸ **unwrap**(`obj`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `unknown` |

#### Returns

`unknown`

#### Defined in

node_modules/syphonx-core/dist/cjs/lib/unwrap.d.ts:1

___

### validate

▸ **validate**(`state`, `contract`): [`ExtractState`](interfaces/ExtractState.md)

Validates the extract state data using the specified data contract schema.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`ExtractState`](interfaces/ExtractState.md) | Extract state containing data to validate against the data contract. |
| `contract` | `Schema` | A JSON schema the represents the data contract. |

#### Returns

[`ExtractState`](interfaces/ExtractState.md)

An updated extract state.

**`Description`**

Modifies the input extract state in place and also returns it.

#### Defined in

[validate.ts:13](https://github.com/dtempx/syphonx-lib/blob/322fff5/validate.ts#L13)
