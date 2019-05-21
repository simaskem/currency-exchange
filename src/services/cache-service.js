import NodeCache from 'node-cache';

class CacheService {

    constructor(ttlSeconds) {
        this.cache = new NodeCache({ stdTTL: ttlSeconds, checkperiod: ttlSeconds * 0.2, useClones: false });
    }

    get(key, fetchData) {
        const value = this.cache.get(key);

        if (value) {
            return Promise.resolve(value);
        }

        if (!fetchData) {
            return undefined;
        }

        return fetchData().then((result) => {
            this.cache.set(key, result);
            return result;
        });
    }

    del(keys) {
        this.cache.del(keys);
    }

    flush() {
        this.cache.flushAll();
    }
}


export default CacheService;