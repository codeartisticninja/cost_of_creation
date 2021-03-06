[cost_of_creation](../README.md) > ["lib/utils/Collab"](../modules/_lib_utils_collab_.md) > [Collab](../classes/_lib_utils_collab_.collab.md)

# Class: Collab

Collab class

*__date__*: 07-mar-2018

## Hierarchy

**Collab**

## Index

### Constructors

* [constructor](_lib_utils_collab_.collab.md#constructor)

### Properties

* [listeners](_lib_utils_collab_.collab.md#listeners)
* [peer](_lib_utils_collab_.collab.md#peer)
* [peers](_lib_utils_collab_.collab.md#peers)
* [state](_lib_utils_collab_.collab.md#state)
* [url](_lib_utils_collab_.collab.md#url)

### Methods

* [addPeer](_lib_utils_collab_.collab.md#addpeer)
* [applyPatch](_lib_utils_collab_.collab.md#applypatch)
* [checkIn](_lib_utils_collab_.collab.md#checkin)
* [init](_lib_utils_collab_.collab.md#init)
* [onPatch](_lib_utils_collab_.collab.md#onpatch)
* [removePeer](_lib_utils_collab_.collab.md#removepeer)
* [sendPatch](_lib_utils_collab_.collab.md#sendpatch)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collab**(url: *`string`*): [Collab](_lib_utils_collab_.collab.md)

*Defined in [lib/utils/Collab.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L15)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [Collab](_lib_utils_collab_.collab.md)

___

## Properties

<a id="listeners"></a>

###  listeners

**● listeners**: *`Function`[]* =  []

*Defined in [lib/utils/Collab.ts:15](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L15)*

___
<a id="peer"></a>

###  peer

**● peer**: *`Peer`* =  <PeerJs.Peer>{}

*Defined in [lib/utils/Collab.ts:12](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L12)*

___
<a id="peers"></a>

###  peers

**● peers**: *`object`*

*Defined in [lib/utils/Collab.ts:13](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L13)*

#### Type declaration

[key: `string`]: `DataConnection`

___
<a id="state"></a>

###  state

**● state**: *`any`*

*Defined in [lib/utils/Collab.ts:14](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L14)*

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Defined in [lib/utils/Collab.ts:17](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L17)*

___

## Methods

<a id="addpeer"></a>

###  addPeer

▸ **addPeer**(id: *`string`*, conn?: *`DataConnection`*): `void`

*Defined in [lib/utils/Collab.ts:57](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L57)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| `Optional` conn | `DataConnection` |

**Returns:** `void`

___
<a id="applypatch"></a>

###  applyPatch

▸ **applyPatch**(patch: *`any`*): `void`

*Defined in [lib/utils/Collab.ts:86](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L86)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| patch | `any` |

**Returns:** `void`

___
<a id="checkin"></a>

###  checkIn

▸ **checkIn**(): `void`

*Defined in [lib/utils/Collab.ts:34](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L34)*

**Returns:** `void`

___
<a id="init"></a>

###  init

▸ **init**(): `void`

*Defined in [lib/utils/Collab.ts:21](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L21)*

**Returns:** `void`

___
<a id="onpatch"></a>

###  onPatch

▸ **onPatch**(cb: *`Function`*): `void`

*Defined in [lib/utils/Collab.ts:102](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L102)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| cb | `Function` |

**Returns:** `void`

___
<a id="removepeer"></a>

###  removePeer

▸ **removePeer**(id: *`string`*): `void`

*Defined in [lib/utils/Collab.ts:79](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L79)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `void`

___
<a id="sendpatch"></a>

###  sendPatch

▸ **sendPatch**(patch: *`any`*): `void`

*Defined in [lib/utils/Collab.ts:94](https://github.com/codeartisticninja/cost_of_creation/blob/HEAD/src/script/_classes/lib/utils/Collab.ts#L94)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| patch | `any` |

**Returns:** `void`

___

