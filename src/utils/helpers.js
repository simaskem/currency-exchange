import moment from 'moment';
import { LATEST } from '../constants';

export const prepareDate = date => {
    const today = moment().startOf('day');
    if (!date) {
        return LATEST;
    }
    if (!moment(date, 'YYYY-MM-DD', true).isValid()) {
        throw new Error(`Invalid Date: ${date}`);
    }
    return today - moment(date) > 0 ? moment(date).format('YYYY-MM-DD') : LATEST;
};

export const prepareAbbreviation = value => {
    if (!value || typeof value !== 'string') {
        throw new Error(`Invalid value: ${value}! Currency Abbreviation is required and must be type of string!`)
    }
    if (value.replace(/\s+/g, '').length !== 3) {
        throw TypeError(`Invalid value: ${value}! Letter count not equal to 3!`);
    }
    return value.toUpperCase();
};