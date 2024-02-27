import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import GlobalFilter from './filter/global/global.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
