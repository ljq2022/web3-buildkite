"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routeWrapper_1 = require("../utils/routeWrapper");
routeWrapper_1.router.use("/sample", require("./sample"));
module.exports = routeWrapper_1.router;
