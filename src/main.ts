import { NestFactory } from "@nestjs/core";
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { AppModule } from "./modules/app/app.module";
import { ValidationPipe } from "@nestjs/common";

/**
 * The url endpoint for open api ui
 * @type {string}
 */
export const SWAGGER_API_ROOT = "api/docs";
/**
 * The name of the api
 * @type {string}
 */
export const SWAGGER_API_NAME = "API";
/**
 * A short description of the api
 * @type {string}
 */
export const SWAGGER_API_DESCRIPTION = "API Description";
/**
 * Current version of the api
 * @type {string}
 */
export const SWAGGER_API_CURRENT_VERSION = "1.0";

(async () => {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    bufferLogs: false,
  });
  app.use(helmet());
  app.use(
    rateLimit({
      windowMs: 60, // 1 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    }),
  );
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(9000, "0.0.0.0");
})();
