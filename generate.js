"use strict";

const path = require("path");
const fs = require("fs");
const Ajv = require("ajv").default;
const standaloneCode = require("ajv/dist/standalone").default;
const schema = require("./schema");

const ajv = new Ajv({
  allErrors: true,
  coerceTypes: "array",
  verbose: true,
  strict: false,
  code: { source: true },
});
require("ajv-keywords")(ajv, "regexp");
require("ajv-formats").default(ajv);
const validate = ajv.compile(schema);
const moduleCode = standaloneCode(ajv, validate);

fs.promises.writeFile(path.resolve(__dirname, "ajv-validate.js"), moduleCode);
