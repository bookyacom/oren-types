# Oren Types [![Dependency Status](https://gemnasium.com/badges/github.com/bookyacom/oren-types.svg)](https://gemnasium.com/github.com/bookyacom/oren-types)

A type library with type validators to be used with `oren`.

## Usage

    const Types = require('oren-types');

    let email = Types.String();

## API

### `Type.<Type>()`

| Type | Desc | Min | Max | String Conversion |
|------|------|-----|-----|-------------------|
| Boolean | | | | |
| Integer | | | | |
| Short | | | | |
| Long | | | | |
| Float | | | | |
| Double | | | | |
| Datetime | | | | |
| String | | | | |
| Binary | | | | |
| Embedded | | | | |
| EmbeddedList | | | | |
| EmbeddedSet | | | | |
| EmbeddedMap | | | | |
| Link | | | | |
| LinkList | | | | |
| LinkSet | | | | |
| LinkMap | | | | |
| Byte | | | | |
| Transient | | | | |
| Date | | | | |
| Decimal | | | | | 
| LinkBag | | | | |

**Example**

    let email = Types.String();

    email.set(1); // throws exception
    email.set('soggie@gmail.com'); // accepts value

### `Type.<Type>().default(<value>)`

### `Type.<Type>().must()`

### `Type.<Type>().check(<algo>)`

