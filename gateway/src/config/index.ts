import { Transport } from '@nestjs/microservices';

export default () => ({
  host: process.env.GATEWAY_HOST,
  port: process.env.GATEWAY_PORT,
  environment: process.env.ENVIRONMENT,
  version: process.env.VERSION,
  lifecycleService: {
    options: {
      port: process.env.LIFECYCLE_SERVICE_PORT,
      host: process.env.LIFECYCLE_SERVICE_HOST,
    },
    transport: Transport.TCP,
  },
});
