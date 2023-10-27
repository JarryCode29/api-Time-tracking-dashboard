"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStatistics = exports.getEntriesWitHoutSensitiveInfo = exports.findById = exports.getEntries = void 0;
const statistics_json_1 = __importDefault(require("./statistics.json"));
const statistics = statistics_json_1.default;
const getEntries = () => statistics;
exports.getEntries = getEntries;
const findById = (id) => {
    const entry = statistics.find(d => d.id === id);
    if (entry != null) {
        const { title } = entry, restOFStatistics = __rest(entry, ["title"]);
        return restOFStatistics;
    }
    return undefined;
};
exports.findById = findById;
const getEntriesWitHoutSensitiveInfo = () => {
    return statistics.map(({ id, title, timeframes }) => {
        return {
            id,
            title,
            timeframes
        };
    });
};
exports.getEntriesWitHoutSensitiveInfo = getEntriesWitHoutSensitiveInfo;
const addStatistics = (newStatisticsEntry) => {
    const newStatistics = Object.assign({ id: statistics.length + 1 }, newStatisticsEntry);
    statistics.push(newStatistics);
    return newStatistics;
};
exports.addStatistics = addStatistics;
