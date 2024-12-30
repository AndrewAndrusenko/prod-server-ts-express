"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const apps_configs_1 = require("../env/apps-configs");
exports.router = express_1.default.Router();
/* GET users listing. */
exports.router.all('/ssngrx/*', function (req, res) {
    var _a;
    res.sendFile(((_a = apps_configs_1.APPS_CONFIG.get('ssngrx')) === null || _a === void 0 ? void 0 : _a.bootstrapPath) + 'index.html');
});
exports.router.all('/rtq/*', function (req, res) {
    var _a;
    res.sendFile(((_a = apps_configs_1.APPS_CONFIG.get('rtq')) === null || _a === void 0 ? void 0 : _a.bootstrapPath) + 'index.html');
});
