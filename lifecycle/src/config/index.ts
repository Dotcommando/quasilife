export default () => ({
  environment: process.env.ENVIRONMENT,

  port: process.env.LIFECYCLE_SERVICE_PORT,
  host: process.env.LIFECYCLE_SERVICE_HOST,
});
