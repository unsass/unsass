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
