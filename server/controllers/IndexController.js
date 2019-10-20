"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@overnightjs/core");
// import * as indexHTML from '@calc/index.html';
// <reference path="../html.d.ts" />
// import * as indexHTML from '@calc/index.html';
// <reference path="../html.d.ts" />
// import '@calc/index.html';
// const calcRoot: string = path.resolve(__dirname, "../../packages/calculator/build");
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.get = function (req, res) {
        // console.log(__dirname);
        // return res.status(200).json({ msg: 'get_called' });
        // return res.sendFile(path.join(calcRoot, "index.html"));
        return res.sendFile(require('@calc/index.html'));
    };
    __decorate([
        core_1.Get('')
    ], IndexController.prototype, "get", null);
    IndexController = __decorate([
        core_1.Controller('/')
    ], IndexController);
    return IndexController;
}());
exports.IndexController = IndexController;
