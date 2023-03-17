# `@unsass/var`

[![Version](https://flat.badgen.net/npm/v/@unsass/var)](https://www.npmjs.com/package/@unsass/var)
[![Downloads](https://flat.badgen.net/npm/dt/@unsass/var)](https://www.npmjs.com/package/@unsass/var)
[![License](https://flat.badgen.net/npm/license/@unsass/var)](https://www.npmjs.com/package/@unsass/var)

## Introduction

Sass functions to manage the `var()` CSS function.

## Installing

```shell
npm install @unsass/var
```

## Usage

```scss
@use "@unsass/var";

.foo {
  color: var.create("primary-color", darkcyan);
}
```

### Result

```css
.foo {
  color: var(--primary-color, darkcyan);
}
```

## Functions

### `create-name($name)`

This function will return string value with `--` if missing.

```scss
@use "@unsass/var";

$name: var.create-name("primary-color"); // $name: "--primary-color";
```

### `name($var)`

This function will return variable name value.

```scss
@use "@unsass/var";

$name: var.name(var(--primary-color, darkcyan)); // $name: "--primary-color";
```

### `fallback($var)`

This function will return variable fallback value.

```scss
@use "@unsass/var";

$fallback: var.fallback(var(--primary-color, darkcyan)); // $name: "darkcyan";
```

### `parse($var)`

This function will return a map with variable name and fallback values on dedicated keys.

```scss
@use "@unsass/var";

$var: var.parse(var(--primary-color, darkcyan)); // $var: ("name": --primary-color, "fallback": darkcyan);
```
