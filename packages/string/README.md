# `@unsass/string`

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

## API

| Function                             | Description                                                        |
|--------------------------------------|--------------------------------------------------------------------|
| `replace($string, $query, $replace)` | Replace character on string.                                       |
| `to-number($value)`                  | Transform string to number. Ex: "10" to 10.                        |
| `from-number($value)`                | Transform number to string. Ex: 10 to "10".                        |
| `starts-with($string, $substring)`   | Find if string starts with substring.                              |
| `ends-with($string, $substring)`     | Find if string ends with substring.                                |
| `trim-start($string, $target)`       | Delete character on string start.                                  |
| `trim-end($string, $target)`         | Delete character on string end.                                    |
| `trim($string, $start, $end)`        | Delete character on string any part.                               |
| `combine($values...)`                | Combine strings. Ex `combine("button", "label")` -> `button-label` |
