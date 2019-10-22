"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var express = __importStar(require("express"));
// import * as serveIndex from 'serve-index';
var bodyParser = __importStar(require("body-parser"));
var core_1 = require("@overnightjs/core");
var IndexController_1 = require("./controllers/IndexController");
var calcRoot = path.resolve(__dirname, "../packages/calculator/build");
var SampleServer = /** @class */ (function (_super) {
    __extends(SampleServer, _super);
    function SampleServer() {
        var _this = _super.call(this) || this;
        _this.app.use(bodyParser.json());
        _this.app.use(bodyParser.urlencoded({ extended: true }));
        _this.app.use(express.static(calcRoot));
        var indexController = new IndexController_1.IndexController();
        _super.prototype.addControllers.call(_this, [indexController]);
        return _this;
    }
    SampleServer.prototype.start = function (port) {
        this.app.listen(port, function () {
            console.log("Server listening on port: " + port);
        });
    };
    return SampleServer;
}(core_1.Server));
exports.SampleServer = SampleServer;
