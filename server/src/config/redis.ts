import { createClient } from 'redis';

const client = createClient({ url:process.env.REDIS_STRING });

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

export { client }