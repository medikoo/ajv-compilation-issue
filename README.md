# AJV compiliaton issue

More info: https://github.com/ajv-validator/ajv/issues/1390

## Reproduction steps

### Setup

1. Clone this repo, and cd into it.
2. Run following commands in repo context:

```
$ npm link ajv
$ npm link ajv-formats
$ npm link ajv-keywords
```

### Reproduce bug

Run following commands:

```
$ node generate.js
$ node validate-schema.js
```
