"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var exceptionHandler_1 = require("./utils/exceptionHandler");
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
dotenv_1.default.config();
var port = process.env.PORT || 5000;
app.use("/api", require("./routes"));
app.use(exceptionHandler_1.exceptionHandler); // must be last middleware func
app.get("/", function (req, res) {
    res.send("This is the edu feedback platform server");
});
app.listen(port, function () {
    console.log("\uD83D\uDE80 Server is running on port: " + port);
});
