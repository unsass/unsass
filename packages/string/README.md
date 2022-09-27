# String

[![Version](https://flat.badgen.net/npm/v/@unsass/string)](https://www.npmjs.com/package/@unsass/string)
[![Downloads](https://flat.badgen.net/npm/dt/@unsass/string)](https://www.npmjs.com/package/@unsass/string)
[![License](https://flat.badgen.net/npm/license/@unsass/string)](https://www.npmjs.com/package/@unsass/string)

## Introduction

Sass functions to manage string.

## Installing

```shell
npm install @unsass/string
```

## Usage

```scss
@use "@unsass/string";

$string: string.replace("The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?", "dog", "monkey");
// The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?
```
