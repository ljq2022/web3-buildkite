"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routeWrapper_1 = require("../utils/routeWrapper");
var sample_1 = require("../controllers/sample");
routeWrapper_1.router.post("/sampleRoute", sample_1.SampleController.sampleFunction);
module.exports = routeWrapper_1.router;
