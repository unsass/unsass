# Types

[![Version](https://flat.badgen.net/npm/v/@unsass/types)](https://www.npmjs.com/package/@unsass/types)
[![Downloads](https://flat.badgen.net/npm/dt/@unsass/types)](https://www.npmjs.com/package/@unsass/types)
[![License](https://flat.badgen.net/npm/license/@unsass/types)](https://www.npmjs.com/package/@unsass/types)

## Introduction

A small, dependency-free Sass toolkit for checking the type of a value. Each `is-*` function wraps `meta.type-of()` in a
readable predicate, so conditions and input validation stay concise and consistent.

<div align="center">

![Types](.github/banner.svg)

</div>

## Installing

```shell
npm install @unsass/types
```

## Usage

```scss
@use "@unsass/types";

@if types.is-number(12) {
    // ...
}
```

## Functions

Every function takes a single `$value` and returns a boolean.

| Function             | Returns `true` when the value is… |
|----------------------|-----------------------------------|
| `is-number($value)`  | a number, with or without unit.   |
| `is-string($value)`  | a string, quoted or not.          |
| `is-color($value)`   | a color.                          |
| `is-list($value)`    | a list.                           |
| `is-map($value)`     | a map.                            |
| `is-boolean($value)` | `true` or `false`.                |
| `is-null($value)`    | `null`.                           |

```scss
@use "@unsass/types";

$number: types.is-number(12px); // true
$string: types.is-string("foo"); // true
$color: types.is-color(darkcyan); // true
$list: types.is-list((1px, 2px, 3px)); // true
$map: types.is-map(("foo": "bar")); // true
$boolean: types.is-boolean(false); // true
$null: types.is-null(null); // true
```
