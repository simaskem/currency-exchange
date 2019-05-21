import {convertCurrency, getCurrencyRate, getCurrencyRateList} from '../index';

describe('index.js file', () => {
    describe('getCurrencyRateList method', () => {
        test('base value should equal to EUR', async () => {
            const result = await getCurrencyRateList();
            expect(result['base']).toEqual('EUR');
        });
        test('should return not null', async () => {
            expect(await getCurrencyRateList('EUR')).not.toBeNull();
        });
        test('date value should equal 2015-05-05 and base to EUR', async () => {
            const result = await getCurrencyRateList('EUR', '2015-05-05');
            expect(result['date']).toEqual('2015-05-05');
            expect(result['base']).toEqual('EUR');
        });
        test('should not return null', async () => {
            expect(await getCurrencyRate('EUR', 'USD', '2019-05-05')).toEqual({ base: 'EUR', rates: { USD: 1.1155 }, date: '2019-05-03' });
        });
    });

    describe('getCurrencyRate method', () => {
        test('should return exchange rate', async () => {
            expect(await getCurrencyRate('usd', 'eur', '2019-05-05')).toEqual({"base": "USD", "date": "2019-05-03", "rates": {"EUR": 0.896458987}});
        });
    });

    describe('convertCurrency method', () => {
        test('should convert currency', async () => {
            expect(await convertCurrency('usd', 'eur', 100, '2019-05-05')).toEqual(89.6458987);
        });
    });
});