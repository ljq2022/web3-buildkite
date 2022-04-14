"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandler = void 0;
var slackManager_1 = require("./slackManager");
exports.exceptionHandler = function (error, req, res, next) {
    var prettyErrorMessage = "Code: " + (error.code || "N/A") + "\nMessage: " + (error.message || "N/A");
    console.error(error.message);
    if (!process.env.IS_DEV) {
        slackManager_1.SlackManager.log({
            channel: "#server-error-logs",
            text: prettyErrorMessage,
            username: "Error Report" + (process.env.IS_DEV ? " [DEV]" : ""),
        });
    }
    res.status(500).send(error);
};
