"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var yaml = require("js-yaml");
var yamlToGraph = function () {
    var config = yaml.load(fs.readFileSync("./testConfig.yaml"));
    console.log(config);
};
