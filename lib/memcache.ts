export class MemCache {
    cache: Record<string, { data: unknown, timer: NodeJS.Timeout }> = {};

    read(key: string): unknown {
        return this.cache[key]?.data;
    }

    write(key: string, data: unknown, ttl: number): void {
        const timer = this.cache[key]?.timer;
        if (timer)
            clearTimeout(timer);

        this.cache[key] = {
            data,
            timer: setTimeout(() => delete this.cache[key], ttl)
        }
    }
}
