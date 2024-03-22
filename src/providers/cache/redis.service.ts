import { RedisSetValue } from '@app/common/interfaces/redisDataTyep';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async del(key: string) {
    await this.cacheManager.del(key);
  }

  async set(key: string, value: RedisSetValue[], ttl?: number) {
    await this.cacheManager.set(key, value, ttl);
  }

  async update(key: string, value: RedisSetValue[], ttl?: number) {
    const result = {};
    const data: RedisSetValue[] = await this.cacheManager.get(key);
    console.log(data);

    for (const v of value) {
      data.push(v);
    }

    await this.cacheManager.set(key, data, ttl);

    return result;
  }

  async get() {}

  async reset() {}
}
