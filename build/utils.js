"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
// String
const isString = (value) => {
    return typeof value === 'string';
};
// title
const isTitle = (title) => {
    return Object.values(enums_1.Title).includes(title);
};
const parseTitle = (titleFromRequest) => {
    if (!isString(titleFromRequest) || !isTitle(titleFromRequest)) {
        throw new Error('Incorrect or missing title');
    }
    return titleFromRequest;
};
// timeframes
const isNumber = (data) => {
    return typeof data === 'number';
};
const parseTimeframes = (timeframesFromRequest) => {
    if (!isNumber(timeframesFromRequest.daily.current) ||
        !isNumber(timeframesFromRequest.daily.previous) ||
        !isNumber(timeframesFromRequest.weekly.current) ||
        !isNumber(timeframesFromRequest.weekly.previous) ||
        !isNumber(timeframesFromRequest.monthly.current) ||
        !isNumber(timeframesFromRequest.monthly.previous)) {
        throw new Error('Incorrect or missing timeframe values');
    }
    return {
        daily: {
            current: timeframesFromRequest.daily.current,
            previous: timeframesFromRequest.daily.previous
        },
        weekly: {
            current: timeframesFromRequest.weekly.current,
            previous: timeframesFromRequest.weekly.previous
        },
        monthly: {
            current: timeframesFromRequest.monthly.current,
            previous: timeframesFromRequest.monthly.previous
        }
    };
};
// Function toNewStatisticsEntry
const toNewStatisticsEntry = (object) => {
    if (!isString(object.title)) {
        throw new Error('Incorrect or missing title');
    }
    parseTimeframes(object.timeframes);
    const newEntry = {
        title: parseTitle(object.title),
        timeframes: parseTimeframes(object.timeframes)
        // Aquí deberías incluir las otras propiedades requeridas de NewStatisticsEntry
    };
    return newEntry;
};
exports.default = toNewStatisticsEntry;
