"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectCountries = void 0;
var react_1 = __importStar(require("react"));
var countries_json_1 = __importDefault(require("./countries.json"));
var SelectCountries = (function (_super) {
    __extends(SelectCountries, _super);
    function SelectCountries(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { CountriesList: countries_json_1.default };
        return _this;
    }
    SelectCountries.prototype.render = function () {
        var CountriesList = this.state.CountriesList;
        return (react_1.default.createElement("div", { className: "countries-list" },
            react_1.default.createElement("label", null, this.props.label),
            react_1.default.createElement("select", { name: this.props.name, className: this.props.classname }, CountriesList.map(function (country, index) { return (react_1.default.createElement("option", { key: index, value: country.code }, country.name)); }))));
    };
    return SelectCountries;
}(react_1.Component));
exports.SelectCountries = SelectCountries;
//# sourceMappingURL=Countries.js.map